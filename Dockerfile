# stage1 - build react app first 
FROM node:12.14-alpine as build
ARG NODE_ENV=development
WORKDIR /app
COPY . /app
RUN npm install
RUN npm rebuild node-sass
RUN npm run deploy

# Build app and start server from script
FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

WORKDIR /usr/share/nginx/html/

# Add bash
RUN apk add --no-cache bash

CMD ["/bin/bash", "-c", "nginx -g \"daemon off;\""]