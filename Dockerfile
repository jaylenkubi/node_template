FROM node:20 AS backend

WORKDIR /app

COPY package*.json ./
COPY .env.development ./
COPY .env.staging ./
RUN npm install -g pnpm
RUN pnpm install

COPY . .

RUN pnpm run client-gen

EXPOSE 8000

CMD ["pnpm", "run", "start"]


