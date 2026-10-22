# Stage 1: build the Vite site into /app/dist
FROM oven/bun:1 AS build
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

# Stage 2: serve only the built files with Caddy
FROM caddy:2.9

# Copy Caddyfile (configuration)
COPY Caddyfile /etc/caddy/Caddyfile

# Copy the built website to Caddy's web root
COPY --from=build /app/dist /usr/share/caddy

# Expose HTTP
EXPOSE 80
