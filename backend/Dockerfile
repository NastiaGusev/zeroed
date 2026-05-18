FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build 2>&1 || true
RUN ls -la dist/ || echo "dist is empty"
RUN ls -la dist/src/ || echo "no src folder in dist"

CMD ["node", "dist/src/main"]