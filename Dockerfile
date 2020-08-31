FROM node:14 as builder

COPY package*.json ./

COPY .npmrc .npmrc

RUN npm install

COPY . .

RUN npm run build

# The instructions for second stage
FROM nginx

ARG GIT_COMMIT=
ARG BUILD_DATE=
ARG SOURCE=https://github.com/kedwards/socialize-client
ARG VERSION=0.0.0

LABEL com.kedwars.socialize-server.revision=$GIT_COMMIT
LABEL com.kedwars.socialize-server.created=$BUILD_DATE
LABEL com.kedwars.socialize-server.source=$SOURCE
LABEL com.kedwars.socialize-server.version=$VERSION
LABEL com.kedwars.socialize-server.vendor="LivITy Consulting"
LABEL com.kedwars.socialize-server.authors="Kevin Edwards <kedwards@kevinedwards.ca"

COPY --from=builder ./build /usr/share/nginx/html

COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf
