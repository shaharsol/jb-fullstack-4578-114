FROM node:22-alpine

# workdir = mkdir + cd
WORKDIR /app 

COPY ./package*.json ./

RUN npm install

COPY ./ ./

# the npm start command, will run "node dist/app.js" so the server runs efficiently and not
# via ts-node
CMD npm run dev