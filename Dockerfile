FROM public.ecr.aws/docker/library/node:20

WORKDIR /app

COPY package*.json ./
RUN node -e "const fs=require('fs');const p=require('./package.json');if(p.devDependencies && p.devDependencies['@web-bench/test-util']){delete p.devDependencies['@web-bench/test-util'];}fs.writeFileSync('package.json',JSON.stringify(p,null,2));" \
    && npm install \
    && npm install -g serve@14.2.4

COPY . .

EXPOSE 5173

CMD ["sh", "/app/docker-entrypoint.sh"]
