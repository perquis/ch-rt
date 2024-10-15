FROM node:20-alpine

WORKDIR /app

COPY package.json ./
RUN npm install
RUN npm install -g typescript tsc-alias

COPY . .
RUN npm run build

EXPOSE 8080

CMD ["npm", "start"]
