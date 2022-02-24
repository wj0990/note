# redis

## 下载镜像

```shell
docker pull redis:5.0.14
```

## 运行容器

```shell
docker run -d --rm -p  6379:6379 --name redis2 redis:5.0.14 redis-server --appendonly yes
```

--name="容器新名字": 为容器指定一个名称；  
	-d: 后台运行容器，并返回容器ID，也即启动守护式容器；  
	-i：以交互模式运行容器，通常与 -t 同时使用；  
	-t：为容器重新分配一个伪输入终端，通常与 -i 同时使用；  
	-P: 随机端口映射；  
	-p: 指定端口映射，有以下四种格式  
	      ip:hostPort:containerPort  
	      ip::containerPort  
	      hostPort:containerPort  
	      containerPort  

## 使用自己的配置
[Redis](https://hub.docker.com/_/redis/) 加载自己的配置文件，需要重新编译一个 images，通过复制官方Redis 配置。

```shell
FROM redis:4.0.11
RUN mkdir -p /etc/redis
# 设置时区
ENV TimeZone=Asia/Shanghai   
RUN ln -snf /usr/share/zoneinfo/$TimeZone /etc/localtime && echo $TimeZone > /etc/timezone

COPY ./redis.conf /etc/redis/redis.conf
CMD [ "redis-server", "/etc/redis/redis.conf" ]
EXPOSE 6379
```

如果你不需要更改配置，可以直接 docker pull redis:4.0.11 下载镜像。

# 先运行 redis
docker run -d --rm -p  6379:6379 --name redis2 redis:4.0.11 redis-server --appendonly yes
# docker 禁止用主机上不存在的文件挂载到 container 中已经存在的文件
docker container cp redis2:/etc/redis/redis.conf $HOME/_docker/redis/conf/redis.conf
# 完成拷贝文件，停止 redis 容器 --rm 参数表示停止删除 redis2 容器
docker stop redis2
# 这个时候，container 中已经存在的配置文件
docker run -d \
  -p 6389:6379 \
  --name redis2 \
  --restart always \
  -v $HOME/_docker/redis/data:/data \
  -v $HOME/_docker/redis/conf:/etc/redis \
  -v /etc/localtime:/etc/localtime:ro \
  redis:4.0.11 redis-server --appendonly yes
# redis-server --appendonly yes 数据持久化
