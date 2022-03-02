# seaweedfs

SeaweedFS是一种简单的、高度可扩展的分布式文件系统。SeaweedFS是一个非常优秀的由 go语言开发的分布式存储开源项目。它是用来存储文件的系统，并且与使用的语言无关，使得文件储存变得非常方便，它有两个优势:

1. 存储数十亿的文件!
2. 查看文件速度快!

SeaweedFS设计用来有效地存储处理小文件，较大文件可以分块拆分为小文件进行上传。所有文件的元数据不存储在Master节点，而是分散存储在Volume（逻辑卷，存储数据的逻辑结构）中，Master节点只保存卷 ID 到卷服务器的映射，这样一来，Master节点的查询压力就被分散到volume节点了。这些文件卷服务器各自管理各自的元数据，存储在卷服务器上的所有文件元信息都可以从内存中读取，而无需访问磁盘。所以这样在高并发的情况下减少了主节点的压力和网络通信，同时定位文件也更迅速。其主要应用场景是存储海量的图片信息并且可以快读定位。

weed是使用Go语言开发的，[官方文档](https://github.com/chrislusf/seaweedfs/)wiki [Github主页(https://github.com/chrislusf/)seaweedfs，使用weed可以通过源码编译，需要提前安装Go环境；也可以使用编译好的二进制包，不依赖Go环境直接执行

## seaweedfs 用docker快速布署及测试

开启master容器
```shell
docker run -p 9333:9333 --name master chrislusf/seaweedfs:2.8.9 master
```

开启 volume容器
```shell
docker run -p 8080:8080 -p 18080:18080 --name volume --link master chrislusf/seaweedfs volume -max=5 -mserver="master:9333" -port=8080
```

用浏览器访问，就能看到当前状态
http://localhost:9333/


### 上传文件测试

第一步：请求分配一个文件号
http://localhost:9333/dir/assign

```js
# callback
{
 "fid":"1,0166b36f3a",
 "url":"172.17.0.14:8080","publicUrl":"172.17.0.14:8080","count":1}
}
```
第二步：执行上传
在命令行中执行，注意ip地址，不要用172那个，因为它是容器内的。要使用宿主机的ip地址
curl -F file=/Users/home/logo.png http://192.168.31.187:8080/1,0166b36f3a

```js
# callback
{"size":42,"eTag":"fc11785c"}
```

第三步：访问文件查看结果

http://宿主机ip:8080/1,0166b36f3a

## 相关背景技术博客

seaweedfs源码解析：https://www.bbsmax.com/A/6pdDYXQKzw/

seaweedfs部署相关：https://www.bbsmax.com/A/n2d9Gw84JD/

http://www.wjhsh.net/quchunhui-p-14086075.html

http://www.diyhi.com/seaweedfs.html
