COPY package*.json ./
RUN npm ci --only=production

COPY src ./src

CMD ["node", "src/private/index.js"]