FROM node:alpine AS backend-service

WORKDIR /app

ARG NODE_ENV=staging
ENV NODE_ENV=$NODE_ENV

COPY package*.json ./

RUN npm install -g pnpm
RUN pnpm install

COPY . .

EXPOSE 8080

CMD node platform/index.js