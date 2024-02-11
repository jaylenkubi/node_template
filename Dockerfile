FROM node:alpine AS backend-service

WORKDIR /app

ARG NODE_ENV=staging
ENV NODE_ENV=$NODE_ENV

ARG GCP_CREDENTIALS
RUN echo $GCP_CREDENTIALS | base64 -d > /creds.json
ENV GOOGLE_APPLICATION_CREDENTIALS=/creds.json

COPY package*.json ./

RUN npm install -g pnpm
RUN pnpm install

COPY . .

RUN pnpm run client-gen


# Add Cloud Shell
FROM gcr.io/cloud-sdk/cloud-sdk:slim AS cloudshell


# Add the cloud_sql_proxy as a second stage
FROM gcr.io/cloudsql-docker/gce-proxy:latest AS cloud-sql-proxy-sidecar

# Copy shell from Cloud Shell stage
COPY --from=cloudshell /bin/bash /bin/bash

# Copy the node_modules from the first stage
COPY --from=backend-service /app/node_modules ./node_modules

# Copy the backend app code
COPY --from=backend-service /app .

# Expose port for proxy
EXPOSE 3306

# Start proxy and backend
CMD /cloud_sql_proxy -instances=scenic-foundry-413622=tcp:3306 & \
    ["pnpm", "run", "start"]