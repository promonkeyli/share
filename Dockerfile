FROM nginx

# 使用deploy-docker.yml工作流时开启
#COPY build/ /usr/share/nginx/html/

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
