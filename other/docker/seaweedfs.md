# seaweedfs

## seaweedfs 用docker快速布署及测试

```shell
docker run -p 9333:9333 --name master chrislusf/seaweedfs:2.8.9 master
```

+ --name master：容器名字为  master
+ -p 9333:9333：将容器的 3306(右侧) 端口映射到主机的 3306（左侧）端口  
+ chrislusf/seaweedfs:2.8.9 远程镜像文件  
+ -v $HOME/_docker/mysql/data：将主机当前目录下的 data 目录挂载到容器的 /var/lib/mysqs，为数据文件存放路径  
+ -e MYSQL_ROOT_PASSWORD=123456：初始化root用户的密码  


拉取官方的镜像，标签为5.7，[Docker官方资料](https://hub.docker.com/_/mysql/)、[MySQL 官方资料](https://dev.mysql.com/doc/refman/8.0/en/docker-mysql-more-topics.html)，[MySQL镜像](https://docs.docker.com/docker-hub/official_images/)  

```shell
docker pull mysql:5.7.23
# Trying to pull repository docker.io/library/mysql ...
# 5.7: Pulling from docker.io/library/mysql
# 85b1f47fba49: Already exists
# f34057997f40: Pull complete
# ....
# Digest: sha256:bfb22e93ee87c6aab6c1c9a4e70f28fa289f9ffae9fe8e173
```
## 运行容器

```shell
docker run --name mysql \
  -p 3306:3306 \
  -v $HOME/_docker/mysql/conf.d:/etc/mysql/conf.d \
  -v $HOME/_docker/mysql/data:/var/lib/mysql \
  -v /etc/localtime:/etc/localtime:ro \ # 文件存在不存在一直报错 暂未解决直接删掉了
  -e MYSQL_ROOT_PASSWORD=123456 \
  -d mysql:5.7.23
```
+ --name mysql：容器名字为 mysql  
+ -p 3306:3306：将容器的 3306 端口映射到主机的 3306 端口  
+ -v $HOME/_docker/mysql/conf.d：将主机当前目录下的 ~/_docker/mysql/conf.d 挂载到容器的 /etc/mysql/conf.d，这个是挂载配置目录  
+ -v $HOME/_docker/mysql/data：将主机当前目录下的 data 目录挂载到容器的 /var/lib/mysqs，为数据文件存放路径  
+ -e MYSQL_ROOT_PASSWORD=123456：初始化root用户的密码  

## 安装报错问题

1. docker挂载mysql数据卷启动失败问题(Only one log file found)  

主要是因为我修改了虚拟机的内存分配, 导致mysql 8写日志的大小计算出了问题.
删除文件让mysql重新生成OK, 或者可以把虚拟机设置为原来分配的内存大小

删除以下文件(建议删除前备份):

```shell
data/ib_logfile0
data/ib_logfile1