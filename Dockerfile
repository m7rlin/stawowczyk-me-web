# Build stage
FROM node:20-alpine as build-stage

RUN npm install -g corepack@latest
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable


# Set working directory
WORKDIR /app

COPY package*.json pnpm-lock.yaml* ./
RUN pnpm install --shamefully-hoist

# Copy project files
COPY . .

# Generate static site
RUN pnpm run generate

# Production stage with Nginx
FROM nginx:alpine as production-stage

# Copy built static files to nginx
COPY --from=build-stage /app/.output/public /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]