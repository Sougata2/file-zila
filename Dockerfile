# Stage 1: Build the React app
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY vite.config.* ./
COPY index.html ./   
COPY .env .env
COPY src ./src
COPY public ./public

RUN npm install
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:stable-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
