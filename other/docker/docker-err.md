

#### mac docker 修改 daemon.json 

点击docker图标 -> preference -> Daemon ->Advenced

```shell
{
  "registry-mirrors" : [
    "https://docker.mirrors.ustc.edu.cn",
    "http://hub-mirror.c.163.com"
  ],
  "insecure-registries" : [
    "docker.xxxxxxxx.cn"
  ],
  "debug" : true,
  "experimental" : true
}
```

Docker中国官方镜像加速

--registry-mirror=https://registry.docker-cn.com

网易163镜像加速

--registry-mirror=http://hub-mirror.c.163.com

中科大镜像加速

--registry-mirror=https://docker.mirrors.ustc.edu.cn

阿里云镜像加速

--registry-mirror=https://{your_id}.mirror.aliyuncs.com

daocloud镜像加速

--registry-mirror=http://{your_id}.m.daocloud.io


