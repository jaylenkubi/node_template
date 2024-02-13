FROM node:alpine AS backend-service

WORKDIR /app

ARG NODE_ENV=staging
ENV NODE_ENV=$NODE_ENV

COPY package*.json ./

COPY . .

RUN npm install -g pnpm
RUN pnpm install

# Compile TS to ./dist/
RUN pnpm tsc -p tsconfig.json -outDir dist/

EXPOSE 8080

CMD node dist/platform/index.js