// import React from 'react'

// import IdleTimer from 'react-idle-timer'
// import ConfirmationModal from '../UI/ConfirmationModal'
// import { i18nHelper } from 'app/i18n/i18n'
// import { PageEnum } from 'app/utils'

// export namespace Timeout {
//     export interface TimeoutProps {
//     }

//     export interface TimeoutState {
//         timeout: number
//         showModal: boolean
//         isTimedOut: boolean
//     }
// }

// class Timeout extends React.Component<Timeout.TimeoutProps, Timeout.TimeoutState> {

//     constructor(props: Timeout.TimeoutProps, context?: any) {
//         super(props, context)
//         this.state = {
//             timeout: 60000,
//             showModal: false,
//             isTimedOut: false
//         }

//         this.onAction = this.onAction.bind(this)
//         this.onActive = this.onActive.bind(this)
//         this.onIdle = this.onIdle.bind(this)

//         this.handleClose = this.handleClose.bind(this)
//         this.handleLogout = this.handleLogout.bind(this)
//     }

//     onAction(e: any) {
//         this.setState({ isTimedOut: false })
//     }

//     onActive(e: any) {
//         this.setState({ isTimedOut: false })
//     }

//     onIdle(e: any) {

//         const { isTimedOut } = this.state
        
//         if (!isTimedOut) {
//             this.setState({
//                 showModal: true,
//                 isTimedOut: true
//             })
//         }
//     }

//     handleClose() {
//         this.setState({
//             showModal: false,
//             isTimedOut: false
//         })
//     }

//     handleLogout() {
//         this.setState({ showModal: false })
//         localStorage.clear();
//         sessionStorage.clear();
//         window.location.href = PageEnum.HOME
//     }


//     render() {
//         return (
//             <>
//                 <IdleTimer
//                     element={document}
//                     onActive={this.onActive}
//                     onIdle={this.onIdle}
//                     onAction={this.onAction}
//                     debounce={250}
//                     timeout={this.state.timeout} />

//                 <ConfirmationModal
//                     className={"modal-dialog"}
//                     title={i18nHelper.translate('Session timeout')}
//                     content={i18nHelper.translate('session timeout')}
//                     leftButtonValue={i18nHelper.translate('Stay this page')}
//                     onLeftButtonClick={this.handleClose}
//                     rightButtonValue={i18nHelper.translate('Log out')}
//                     onRightButtonClick={this.handleLogout}
//                     displayModal={this.state.showModal}
//                     rightButtonCSS={"btn btn-primary"}
//                 />
//             </>
//         )
//     }
// }

// export default Timeout;