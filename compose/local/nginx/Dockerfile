FROM nginx:1.17.6-alpine

#RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf

#RUN mkdir /usr/src/media/
#RUN mkdir /etc/nginx/media/
RUN mkdir /usr/media/


CMD ["nginx", "-g", "daemon off;", "-c", "/etc/nginx/nginx.conf"]
