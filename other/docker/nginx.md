# Nginx

Nginx 是一款面向性能设计的 HTTP 服务器，能反向代理 HTTP，HTTPS 和邮件相关(SMTP，POP3，IMAP)的协议链接。并且提供了负载均衡以及 HTTP 缓存。它的设计充分使用异步事件模型，削减上下文调度的开销，提高服务器并发能力。采用了模块化设计，提供了丰富模块的第三方模块。

所以关于 Nginx，有这些标签：「异步」「事件」「模块化」「高性能」「高并发」「反向代理」「负载均衡」

下面是 nginx 在 Docker 中的应用，这里还有 nginx入门教程 供你参考

## 了解docker中默认路径

### conf

```shell
/etc/nginx/nginx.conf
```

### html

```
/usr/share/nginx/html
```

### log

```
/var/log/nginx
```

### 启动临时容器

```
docker run --name nginx -d nginx
```

### 新建本地目录

```
mkdir -p /docker/nginx/
```

### 拷贝临时容器默认路径到默认路径

```shell
docker cp nginx:/etc/nginx/nginx.conf $HOME/docker/nginx/nginx.conf
docker cp -a nginx:/usr/share/nginx/html $HOME/docker/nginx
docker cp -a nginx:/etc/nginx/conf.d $HOME/docker/nginx
```

### 删除临时容器

```shell
docker rm -f tmp-nginx-container
```

### 重新映射容器启动

```shell
docker run -d --name nignx \
  --restart always \
  -p 443:443 -p 80:80 \
  -v $HOME/docker/nginx/html:/usr/share/nginx/html \
  -v $HOME/docker/nginx/nginx.conf:/etc/nginx/nginx.conf \
  -v $HOME/docker/nginx/conf.d:/etc/nginx/conf.d \
  -v $HOME/docker/nginx/logs:/var/log/nginx \
  -d \
  nginx
```