FROM node:12

ENV NODE_ENV=production

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn

COPY . .

RUN yarn prod:build
CMD yarn prod:serve
