FROM node:10-alpine as builder

WORKDIR /usr/src/build

# ADD package.json /usr/src/build
RUN git clone https://github.com/missxiaolin/vue-admin.git && cd vue-admin && npm install -g cnpm --registry=https://registry.npm.taobao.org && cnpm install

# COPY . /usr/src/build
RUN npm run-script build

FROM node:10-alpine

COPY --from=builder /usr/src/build/vue-admin/dist /usr/src/app/dist
COPY --from=builder /usr/src/build/vue-admin/index.js /usr/src/app
COPY --from=builder /usr/src/build/vue-admin/package.server.json /usr/src/app/package.json

WORKDIR /usr/src/app

RUN npm install -g cnpm --registry=https://registry.npm.taobao.org && cnpm install

ENTRYPOINT ["node","index"] 
EXPOSE 3000

