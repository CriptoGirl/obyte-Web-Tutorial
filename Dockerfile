FROM node:16 as base
WORKDIR /usr/src
ADD package.json package-lock.json .
RUN npm install
CMD ./node_modules/.bin/nodemon -L index.js

FROM base as prod
ADD . /usr/src
CMD ./node_modules/.bin/nodemon -L index.js
