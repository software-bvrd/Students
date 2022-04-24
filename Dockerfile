#stage 1
FROM node:latest as node
WORKDIR /dist/apiusuarios
COPY . .
RUN npm install
RUN npm run build --prod
#stage 2
FROM nginx:1.17.1-alpine
COPY --from=node /dist/apiusuarios /usr/share/nginx/html