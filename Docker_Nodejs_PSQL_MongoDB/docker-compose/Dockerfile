FROM node:latest
WORKDIR /src
RUN npm init -y
RUN npm i express
RUN npm i -g nodemon
RUN npm i
ADD ./src/ /src/
CMD ["node", "/src/index.js"]
