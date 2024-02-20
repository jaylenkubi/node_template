FROM node:alpine AS build

WORKDIR /app

COPY package*.json .

RUN npm install -g pnpm
RUN pnpm install

COPY . .

RUN pnpm run build


FROM node:alpine as production

ARG NODE_ENV=production
ARG PROJECT_ID=417662226143
ENV NODE_ENV=${NODE_ENV}
ENV PROJECT_ID=${PROJECT_ID}

WORKDIR /app

COPY package*.json .

RUN npm install -g pnpm
RUN pnpm install --production

COPY --from=build /app/dist ./dist

CMD ["node", "dist/platform/index.js"]