FROM nginx:latest
COPY ./default.conf /etc/nginx/conf.d/default.conf
RUN apt-get update
RUN apt-get install vim
EXPOSE 80 443