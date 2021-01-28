FROM node:latest
WORKDIR /src
RUN npm init -y
RUN npm i -g express
RUN npm i -g nodemon
RUN npm i
ADD ./src/ /src/
CMD ["nodemon", "/src/index.js"]
