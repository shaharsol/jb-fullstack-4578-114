FROM node:22-alpine

# workdir = mkdir + cd
WORKDIR /app 

COPY ./package*.json ./

RUN npm install

COPY ./ ./

# this will create a "dist" folder on the image, with all the .js files
RUN npm run build

# since we don't need typescript files anymore, we can get rid of them
RUN rm -rf ./src

# the npm start command, will run "node dist/app.js" so the server runs efficiently and not
# via ts-node
CMD npm start