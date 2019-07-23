FROM node:10-alpine as builder

WORKDIR /usr/src/build

ADD package.json /usr/src/build
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org && cnpm install

COPY . /usr/src/build
RUN npm run-script build

FROM node:10-alpine

COPY --from=builder /usr/src/build/dist /usr/src/app/dist
COPY --from=builder /usr/src/build/index.js /usr/src/app
COPY --from=builder /usr/src/build/package.server.json /usr/src/app/package.json

WORKDIR /usr/src/app

RUN npm install -g cnpm --registry=https://registry.npm.taobao.org && cnpm install

ENTRYPOINT ["node","index"] 
EXPOSE 3000

