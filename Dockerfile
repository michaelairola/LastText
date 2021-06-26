
FROM node:latest 
WORKDIR /usr/src/app

COPY . .
RUN npm i

ENTRYPOINT [ "npm", "start" ];

EXPOSE 8080