FROM node:alpine AS backend-service

WORKDIR /app

ARG NODE_ENV=staging
ENV NODE_ENV=$NODE_ENV

COPY package*.json ./

RUN npm install -g pnpm
RUN pnpm install

RUN pnpm run build

EXPOSE 8080

CMD node dist/platform/index.js