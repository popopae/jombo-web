pipeline {

    agent any

    environment {
        DOCKER_REPOSITORY = 'ascendcorp/ptvn-supplier-management-web'
        REGISTRY_CREDENTIAL = 'central_login_for_dockerhub'
        NEXUS_URL = 'registry.pantavanij.com:8444'
        DEPLOYMENT_NAME = 'ptvn-supplier-management-web-deployment'
        NAMESPACE_DEV = "dev-supplier-management-web"
        NAMESPACE_QA = "qa-supplier-management-web"
        NAMESPACE_STG = "stg-supplier-management-web"
        ENV_DEV = "development"
        ENV_QA = "qa"
        ENV_STG = "staging"
        SERVER_DEPLOY_DEV = "centos@192.168.19.157"
        SERVER_DEPLOY_QA = "centos@192.168.19.158"
        SERVER_DEPLOY_STG = "centos@192.168.19.159"
        REPOSITORY = 'ptvn-supplier-management-web'
        REPOSITORY_TAG_DEV = "$NEXUS_URL/$DOCKER_REPOSITORY:$ENV_DEV"
        REPOSITORY_TAG_QA = "$NEXUS_URL/$DOCKER_REPOSITORY:$ENV_QA"
        REPOSITORY_TAG_STG = "$NEXUS_URL/$DOCKER_REPOSITORY:$ENV_STG"
        CONTAINER_NAME = "ptvn-supplier-management-web"
        JENKINS_PATH = sh(script: 'pwd', , returnStdout: true).trim()
        DISCORD_HOOK = "https://discord.com/api/webhooks/826636391336378408/-7nPKInnxKbyhXnBsGp6QQ4pAIpJLs4xt5JqDa5MoECSESAD2Fq1U06URHbz0FDwcEpY"
        EXECUTE_USER = ""
    }

    stages {
        stage('Notification') {
            steps {
                script {
                    EXECUTE_USER = wrap([$class: 'BuildUser']) {
                        sh 'echo ${BUILD_USER}'
                        return env.BUILD_USER
                    }
                }
                discordSend(
                    description: "START JOB  \nJob:  ${env.JOB_NAME} \nBuild Number: ${env.BUILD_NUMBER} \nMore info at: \n${env.BUILD_URL}\n",
                    footer: "Build by : " + EXECUTE_USER,
                    link: env.BUILD_URL,
                    result: currentBuild.currentResult,
                    unstable: false,
                    title: JOB_NAME, 
                    webhookURL: env.DISCORD_HOOK
                )
            }
        }

        stage('Poll scm') {
            steps {
                deleteDir()
                checkout scm
            }
        }

        stage('Build DEV docker image') {
            agent any
            steps {
                withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'nexus_admin',
                          usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {
                    sh "docker login --username $USERNAME --password '$PASSWORD' $NEXUS_URL"
                }
                script {
                    sh "docker build -t $REPOSITORY_TAG_DEV . --build-arg NODE_ENV=$ENV_DEV"
                    sh 'docker images'
                }
            }
        }

        stage("Push DEV docker image") {
            agent any
            steps {
                script {
                    sh "docker push $REPOSITORY_TAG_DEV"
                }
            }
        }

        stage('Deploy to DEV environment') {
            steps{
                sshagent(credentials : ['4226fbcf-30d9-46d8-883c-df7776ba5e4a']) {

                   echo 'Setting credential'
                   sh '''#! /bin/bash
                       ssh -o StrictHostKeyChecking=no SERVER_DEPLOY_DEV
                       echo 'connecting'
                       ssh -v SERVER_DEPLOY_DEV
                       echo 'Access'
                   '''
                   withCredentials([
                                  [
                                    $class: 'UsernamePasswordMultiBinding',
                                    credentialsId: REGISTRY_CREDENTIAL,
                                    usernameVariable: 'DOCKERUSER',
                                    passwordVariable: 'DOCKERPASS'
                                  ]
                                ]){
                                    sh '''#! /bin/bash
                                       echo 'start docker daemon'
                                       ssh -o StrictHostKeyChecking=no $SERVER_DEPLOY_DEV sudo dockerd &> dockerd-logfile &
                                       echo 'Login Docker hub'
                                       ssh -o StrictHostKeyChecking=no $SERVER_DEPLOY_DEV sudo docker login -u $DOCKERUSER -p $DOCKERPASS
                                    '''
                                    script {
                                        container = sh( script: "ssh -o StrictHostKeyChecking=no $SERVER_DEPLOY_DEV sudo docker ps -a --filter 'name=${CONTAINER_NAME}'", returnStdout: true).trim()
                                        echo container
                                        if(container.contains(REPOSITORY)) {
                                           sh '''
                                           echo 'Stop and Delete Docker'
                                           ssh -o StrictHostKeyChecking=no $SERVER_DEPLOY_DEV sudo docker stop $CONTAINER_NAME
                                           ssh -o StrictHostKeyChecking=no $SERVER_DEPLOY_DEV sudo docker container rm $CONTAINER_NAME
                                            '''
                                        }
                                        sh '''
                                           echo 'Pull Docker'
                                           ssh -o StrictHostKeyChecking=no $SERVER_DEPLOY_DEV sudo docker pull $REPOSITORY_TAG_DEV
                                        
                                           echo $REPOSITORY
                                           echo $REPOSITORY_TAG_DEV
                                           echo 'Run Docker'
                                           ssh -o StrictHostKeyChecking=no $SERVER_DEPLOY_DEV sudo cat
                                           ssh -o StrictHostKeyChecking=no $SERVER_DEPLOY_DEV sudo docker run -d --name $CONTAINER_NAME -p 80:80 $REPOSITORY_TAG_DEV
                                        '''
                                    }

                                     sh '''#! /bin/bash
                                        echo 'Check image and process Docker'
                                        ssh $SERVER_DEPLOY_DEV sudo docker images
                                        ssh $SERVER_DEPLOY_DEV sudo docker ps
                                     '''
                                 } // End With credential
              } // end sshagent
            }// end steps
        } //End stage

        stage('Deploy QA environment approval') {
            agent none
            steps {
                input message: 'Approve deployment?'
            }
        }

        stage('Build QA docker image') {
            agent any
            steps {
                withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'nexus_admin',
                          usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {
                    sh "docker login --username $USERNAME --password '$PASSWORD' $NEXUS_URL"
                }
                script {
                    sh "docker build -t $REPOSITORY_TAG_QA . --build-arg NODE_ENV=$ENV_QA"
                    sh 'docker images'
                }
            }
        }

        stage("Push QA docker image") {
            agent any
            steps {
                script {
                    sh "docker push $REPOSITORY_TAG_QA"
                }
            }
        }

        stage('Deploy to QA environment') {
            steps{
                sshagent(credentials : ['4226fbcf-30d9-46d8-883c-df7776ba5e4a']) {
                   echo 'Setting credential'
                   sh '''#! /bin/bash
                       ssh -o StrictHostKeyChecking=no SERVER_DEPLOY_QA
                       echo 'connecting'
                       ssh -v SERVER_DEPLOY_QA
                       echo 'Access'
                   '''
                   withCredentials([
                                  [
                                    $class: 'UsernamePasswordMultiBinding',
                                    credentialsId: REGISTRY_CREDENTIAL,
                                    usernameVariable: 'DOCKERUSER',
                                    passwordVariable: 'DOCKERPASS'
                                  ]
                                ]){
                                    sh '''#! /bin/bash
                                       echo 'start docker daemon'
                                       ssh -o StrictHostKeyChecking=no $SERVER_DEPLOY_QA sudo dockerd &> dockerd-logfile &
                                       echo 'Login Docker hub'
                                       ssh -o StrictHostKeyChecking=no $SERVER_DEPLOY_QA sudo docker login -u $DOCKERUSER -p $DOCKERPASS
                                    '''
                                    script {
                                        container = sh( script: "ssh -o StrictHostKeyChecking=no $SERVER_DEPLOY_QA sudo docker ps -a --filter 'name=${CONTAINER_NAME}'", returnStdout: true).trim()
                                        echo container
                                        if(container.contains(REPOSITORY)) {
                                           sh '''
                                           echo 'Stop and Delete Docker'
                                           ssh -o StrictHostKeyChecking=no $SERVER_DEPLOY_QA sudo docker stop $CONTAINER_NAME
                                           ssh -o StrictHostKeyChecking=no $SERVER_DEPLOY_QA sudo docker container rm $CONTAINER_NAME
                                            '''
                                        }
                                        sh '''
                                           echo 'Pull Docker'
                                           ssh -o StrictHostKeyChecking=no $SERVER_DEPLOY_QA sudo docker pull $REPOSITORY_TAG_QA

                                           echo $REPOSITORY
                                           echo $REPOSITORY_TAG_QA
                                           echo 'Run Docker'
                                           ssh -o StrictHostKeyChecking=no $SERVER_DEPLOY_QA sudo docker run -d --name $CONTAINER_NAME -p 80:80 $REPOSITORY_TAG_QA
                                        '''
                                    }
                                  
                                     sh '''#! /bin/bash
                                        echo 'Check image and process Docker'
                                        ssh $SERVER_DEPLOY_QA sudo docker images
                                        ssh $SERVER_DEPLOY_QA sudo docker ps
                                     '''
                                 } // End With credential
              } // end sshagent
            }// end steps
        } //End stage

        stage('Deploy STG environment approval') {
            agent none
            steps {
                input message: 'Approve build?'
            }
        }

        stage('Build STG docker image') {
            agent any
            steps {
                withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'nexus_admin',
                          usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {
                    sh "docker login --username $USERNAME --password '$PASSWORD' $NEXUS_URL"
                }
                script {
                    sh "docker build -t $REPOSITORY_TAG_STG . --build-arg NODE_ENV=$ENV_STG"
                    sh 'docker images'
                }
            }
        }

        stage("Push STG docker image") {
            agent any
            steps {
                script {
                    sh "docker push $REPOSITORY_TAG_STG"
                }
            }
        }

        stage('Deploy to STG dnvironment') {
            steps{
                sshagent(credentials : ['4226fbcf-30d9-46d8-883c-df7776ba5e4a']) {
                   echo 'Setting credential'
                   sh '''#! /bin/bash
                       ssh -o StrictHostKeyChecking=no SERVER_DEPLOY_STG
                       echo 'connecting'
                       ssh -v SERVER_DEPLOY_STG
                       echo 'Access'
                   '''
                   withCredentials([
                                  [
                                    $class: 'UsernamePasswordMultiBinding',
                                    credentialsId: REGISTRY_CREDENTIAL,
                                    usernameVariable: 'DOCKERUSER',
                                    passwordVariable: 'DOCKERPASS'
                                  ]
                                ]){
                                    sh '''#! /bin/bash
                                       echo 'start docker daemon'
                                       ssh -o StrictHostKeyChecking=no $SERVER_DEPLOY_STG sudo dockerd &> dockerd-logfile &
                                       echo 'Login Docker hub'
                                       ssh -o StrictHostKeyChecking=no $SERVER_DEPLOY_STG sudo docker login -u $DOCKERUSER -p $DOCKERPASS
                                    '''
                                    script {
                                        container = sh( script: "ssh -o StrictHostKeyChecking=no $SERVER_DEPLOY_STG sudo docker ps -a --filter 'name=${CONTAINER_NAME}'", returnStdout: true).trim()
                                        echo container
                                        if(container.contains(REPOSITORY)) {
                                           sh '''
                                           echo 'Stop and Delete Docker'
                                           ssh -o StrictHostKeyChecking=no $SERVER_DEPLOY_STG sudo docker stop $CONTAINER_NAME
                                           ssh -o StrictHostKeyChecking=no $SERVER_DEPLOY_STG sudo docker container rm $CONTAINER_NAME
                                            '''
                                        }
                                        sh '''
                                           echo 'Pull Docker'
                                           ssh -o StrictHostKeyChecking=no $SERVER_DEPLOY_STG sudo docker pull $REPOSITORY_TAG_STG

                                           echo $REPOSITORY
                                           echo $REPOSITORY_TAG_STG
                                           echo 'Run Docker'
                                           ssh -o StrictHostKeyChecking=no $SERVER_DEPLOY_STG sudo docker run -d --name $CONTAINER_NAME -p 80:80 $REPOSITORY_TAG_STG
                                        '''
                                    }
                                  
                                     sh '''#! /bin/bash
                                        echo 'Check image and process Docker'
                                        ssh $SERVER_DEPLOY_STG sudo docker images
                                        ssh $SERVER_DEPLOY_STG sudo docker ps
                                     '''
                                 } // End With credential
              } // end sshagent
            }// end steps
        } //End stage
    } //End Stages

    post {
        always {
            script {
                EXECUTE_USER = wrap([$class: 'BuildUser']) {
                    sh 'echo ${BUILD_USER}'
                    return env.BUILD_USER
                }
            }
            discordSend(
                description:
                "FINISHED JOB \n Status: ${currentBuild.currentResult} \nJob:  ${env.JOB_NAME} \nBuild Number: ${env.BUILD_NUMBER} \nMore info at: \n${env.BUILD_URL}\n", 
                footer: "Build by : " + EXECUTE_USER,
                link: env.BUILD_URL, 
                result: currentBuild.currentResult, 
                unstable: false, 
                title: JOB_NAME, 
                webhookURL: env.DISCORD_HOOK
            )
        }
    }
}