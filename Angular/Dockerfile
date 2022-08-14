### STAGE 1: Build ###
FROM node:16-alpine3.15 AS build

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.23.1-alpine

COPY --from=build /usr/src/app/dist/angular /usr/share/nginx/html/