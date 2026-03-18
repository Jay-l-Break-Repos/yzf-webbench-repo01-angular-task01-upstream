FROM node:20-bookworm

WORKDIR /app

RUN npm install -g serve@14.2.4

COPY . .

EXPOSE 5173

CMD ["sh", "/app/docker-entrypoint.sh"]
