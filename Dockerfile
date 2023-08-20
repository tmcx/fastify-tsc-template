FROM node:lts-alpine as build
RUN npm i -g typescript
COPY . .
RUN npm i
RUN npm run build


FROM node:lts-alpine as run
WORKDIR /app
COPY package.json .
RUN npm i --save-prod
COPY --from=build dist dist
CMD [ "npm","run","start:prod" ]