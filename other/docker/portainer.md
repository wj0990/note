

## portainer

Docker可视化工具Portainer

[参考地址](https://blog.csdn.net/jabony/article/details/90020939?utm_medium=distribute.pc_aggpage_search_result.none-task-blog-2~aggregatepage~first_rank_ecpm_v1~rank_v31_ecpm-7-90020939.pc_agg_new_rank&utm_term=portainer%E9%BB%98%E8%AE%A4%E8%B4%A6%E5%8F%B7%E5%AF%86%E7%A0%81&spm=1000.2123.3001.4430)

### 创建portainer 图形界面

查看 portainer

`
docker search portainer 
`

下载容器

`
docker pull portainer/portainer
`

基于镜像运行容器

```
 -d: 后台运行容器，并返回容器ID；
 -p: 指定端口映射，格式为：主机(宿主)端口:容器端口
 --volume , -v: 绑定一个卷

docker run -d -p 8000:8000 -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/Users/wangjie/docker/portainer/data portainer/portainer
```

本地访问 界面登陆地址 http://127.0.0.1:9001/
输入初始化密码 -> 选择local 点击 connect即可

### Portainer忘记密码，重置密码
[参考地址](https://www.jianshu.com/p/db13ab95e624)

1. 首先查看portainer 容器的挂在信息  

`
docker inspect [容器ID/容器名称]
`

2. 停掉porainer运行的容器

`
docker container stop [容器ID/容器名称]
`

3. 执行(详情上挂载信息 Hostconfig/binds/portainer_data:/data)

`
docker run --rm -v portainer_data:/data portainer/helper-reset-password
返回
2021/04/19 01:23:48 Password succesfully updated for user: admin
2021/04/19 01:23:48 Use the following password to login: Q?d\x)D{mH1b6wZOi05j^|a273Tso`9>
`
用上面的用户名和密码登录即可
用户名:admin
密码:Q?d\x)D{mH1b6wZOi05j^|a273Tso`9>

最后重启portainer容器，去UI界面修改密码(这密码记不住)!!!


