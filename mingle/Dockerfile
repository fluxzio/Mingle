FROM node:alpine 

WORKDIR /Mingle/mingle/

COPY package*.json ./

RUN npm install
COPY . .

CMD npm run dev



