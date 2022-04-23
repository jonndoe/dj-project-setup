FROM nginx:1.17.6-alpine

#RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf


CMD ["nginx", "-g", "daemon off;", "-c", "/etc/nginx/nginx.conf"]
