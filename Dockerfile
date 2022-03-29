# 指定nginx镜像
FROM nginx

# 拷贝build项目文件到nginx容器
COPY build/ /usr/share/nginx/html/

# 拷贝项目nginx下的nginx.conf配置文件覆盖容器内部nginx.conf配置文件
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# 暴露nginx容器端口
EXPOSE 80
