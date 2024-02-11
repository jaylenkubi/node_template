FROM node:alpine AS backend-service

WORKDIR /app

ARG NODE_ENV=staging
ENV NODE_ENV=$NODE_ENV

COPY package*.json ./

RUN npm install -g pnpm
RUN pnpm install

COPY . .

RUN pnpm run client-gen


# Add the cloud_sql_proxy as a second stage
FROM gcr.io/cloudsql-docker/gce-proxy:2.8.2 AS cloud-sql-proxy-sidecar

# Copy the node_modules from the first stage
COPY --from=backend-service /app/node_modules ./node_modules

# Copy the backend app code
COPY --from=backend-service /app .

# Expose port for proxy
EXPOSE 3306

# Start proxy and backend
CMD /cloud_sql_proxy -instances=scenic-foundry-413622=tcp:3306 & \
    ["pnpm", "run", "start"]