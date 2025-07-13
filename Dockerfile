FROM node:20-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY src ./

CMD ["node", "src/private/index.js"]