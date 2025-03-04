# packaging a dev env:

# FROM node:22-alpine

# WORKDIR /app 

# COPY ./package*.json ./

# RUN npm install

# COPY ./ ./

# CMD npm run dev

# packaging form production:

FROM node:22-alpine as builder
WORKDIR /app 
COPY ./package*.json ./
RUN npm install
COPY ./ ./
RUN npm run build


FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=builder /app/dist ./
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]

