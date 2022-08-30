# elasticSearch

​ Elaticsearch，简称为es， es是一个开源的高扩展的分布式全文检索引擎，它可以近乎实时的存储、检索数据；本身扩展性很好，可以扩展到上百台服务器，处理PB级别（大数据时代）的数据。es也使用Java开发并使用Lucene作为其核心来实现所有索引和搜索的功能，但是它的目的是通过简单的RESTful API来隐藏Lucene的复杂性，从而让全文搜索变得简单。[elasticSearch中文社区](https://elasticsearch.cn/article/)

```shell
docker pull docker.elastic.co/elasticsearch/elasticsearch:5.3.3
```

## ElasticSearch 6.4.2

```shell
# 最新版本
docker pull docker.elastic.co/elasticsearch/elasticsearch:6.4.2
# 运行容器
docker run \
  -d 
  --name es
  -p 9200:9200 -p 9300:9300 \
  -e "discovery.type=single-node" \
  -e ES_JAVA_OPTS="-Xms512m -Xmx512m"
  docker.elastic.co/elasticsearch/elasticsearch:6.4.2
```
- discovery.type=single-node        集群默认单个节点  
- ES_JAVA_OPTS="-Xms512m -Xmx512m" 设置最大最小堆  最大堆值不能超过物理内存50%  
- docker.elastic.co/elasticsearch/elasticsearch 镜像名称
- 默认的用户名密码: elastic/changeme

## ElasticSearch 5.3.3

ElasticSearch 5.3.3 docker 运行

```shell
# 下载老版本
docker pull docker.elastic.co/elasticsearch/elasticsearch:5.3.3
# 运行容器
docker run \
  --name es \
  -p 9200:9200 \
  -e "http.host=0.0.0.0" \
  -e "transport.host=127.0.0.1" \
  -v "$HOME/_docker/elasticsearch/data:/usr/share/elasticsearch/data"\
  -d docker.elastic.co/elasticsearch/elasticsearch:5.3.3
```

## 通过 docker-compose 安装使用

新建 docker-compose.yml 文件

```shell
version: '2'
services:
  elasticsearch1:
    image: docker.elastic.co/elasticsearch/elasticsearch:5.3.3
    container_name: elasticsearch1
    environment:
      - cluster.name=docker-cluster
      - bootstrap.memory_lock=true
      - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
    ulimits:
      memlock:
        soft: -1
        hard: -1
      nofile:
        soft: 65536
        hard: 65536
    mem_limit: 1g
    cap_add:
      - IPC_LOCK
    volumes:
      - esdata1:/usr/share/elasticsearch/data
    ports:
      - 9200:9200
    networks:
      - esnet
  elasticsearch2:
    image: docker.elastic.co/elasticsearch/elasticsearch:5.3.3
    environment:
      - cluster.name=docker-cluster
      - bootstrap.memory_lock=true
      - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
      - "discovery.zen.ping.unicast.hosts=elasticsearch1"
    ulimits:
      memlock:
        soft: -1
        hard: -1
      nofile:
        soft: 65536
        hard: 65536
    mem_limit: 1g
    cap_add:
      - IPC_LOCK
    volumes:
      - esdata2:/usr/share/elasticsearch/data
    networks:
      - esnet

volumes:
  esdata1:
    driver: local
  esdata2:
    driver: local

networks:
  esnet:
    driver: bridge
```

示例显示包含两个 Elasticsearch 节点的集群。 要打开群集，请使用 docker-compose.yml 并输入：

```shell
docker-compose up -d # 运行
docker-compose down    # 停止集群
docker-compose down -v # 销毁集群和数据卷
docker logs elasticsearch1 # 查看日志
```

elasticsearch1 监听 localhost:9200，而 elasticsearch2 通过 Docker 网络与 elasticsearch1 进行通信。

此示例还使用名为 esdata1 和 esdata2 的 Docker named volumes，如果尚未存在，将创建它们。

## 检查集群的状态

```shell
curl -u elastic http://127.0.0.1:9200/_cat/health
Enter host password for user 'elastic':
1472225929 15:38:49 docker-cluster green 2 2 4 2 0 0 0 0 - 100.0%
```

## 用户名密码

```shell
curl -XPUT -u elastic 'http://localhost:9200/_xpack/security/user/kibana/_password' -d '{
  "password" : "yourpasswd"
}'
```

## 挂载配置

创建自定义配置文件并将其挂载到映像的相应文件上。 例如，可以使用以下参数来完成使用 docker run 绑定安装custom_elasticsearch.yml

```shell
-v full_path_to/custom_elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml

```

其它配置修改项

```shell
# 避免出现跨域问题
http.cors.enabled: true
http.cors.allow-origin: "*"
# 在chorem中 当elasticsearch安装x-pack后还可以访问
http.cors.allow-headers: Authorization
# 启用审核以跟踪与您的Elasticsearch群集进行的尝试和成功的交互
xpack.security.audit.enabled: true
```

## 定义镜像

```shell
FROM docker.elastic.co/elasticsearch/elasticsearch:5.3.3
ADD elasticsearch.yml /usr/share/elasticsearch/config/
USER root
RUN chown elasticsearch:elasticsearch config/elasticsearch.yml
USER elasticsearch
```
然后，您可以使用以下内容构建和尝试运行镜像：

```shell
docker build --tag=elasticsearch-custom .
docker run -ti -v /usr/share/elasticsearch/data elasticsearch-custom
# 覆盖默认的 CMD 
docker run <各种参数> bin/elasticsearch -Ecluster.name=mynewclustername

```

## 生产的一些经验

+ 镜像公开 TCP 端口 9200 和 9300。对于群集，建议使用 --publish-all 随机化已发布的端口，除非您为每个主机固定一个容器。
+ 使用 ES_JAVA_OPTS 环境变量来设置堆大小，例如使用 16GB 通过使用 -e ES_JAVA_OPTS=-Xms16g -Xms16g" 和 dcker run 来运行。 还建议为容器设置内存限制。

linux 环境 添加 -value 片区 做配置、数据持久化时报错

```
Caused by: java.nio.file.AccessDeniedException: /usr/share/elasticsearch/data/nodes
```

用户没有挂载目录的权限,root用户登录宿主机添加文件权限，重启 elasticSearch 服务，然后重启关联的server服务接口

```shell
chmod -R 777 /gitlab-runner/data/wabg/wabg-api/elasticSearch/data
```

## 解决docker 跨域问题

1. docker命令进入elasticsearch对应的容器

docker exec -it [containerID] /bin/bash

2. 安装vim编辑器 或直接用vi
更改配置文件，需要使用到vim，已安装可以忽略

apt-get update
apt-get install vim

3. 进入到/config/elasticsearch.yml配置文件，添加以下配置代码：

```shell
http.cors.enabled: true
http.cors.allow-origin: "*"
http.cors.allow-headers: "*"
xpack.security.enabled: false

```
配置文件如下

```shell
cluster.name: "docker-cluster"
network.host: 0.0.0.0
http.cors.enabled: true
http.cors.allow-origin: "*"
http.cors.allow-headers: "*"
xpack.security.enabled: false

# minimum_master_nodes need to be explicitly set when bound on a public IP
# set to 1 to allow single node clusters
# Details: https://github.com/elastic/elasticsearch/pull/17288
discovery.zen.minimum_master_nodes: 1
```