FROM node:15.4 as build

WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
CMD npm run prod

FROM nginx:1.19

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/comedian-matching-front/ /usr/share/nginx/html
