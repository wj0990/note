## 目录

- [init命令](#init命令)
 init一共分为7个级别，这7个级别的所代表的含义如下  

```shell  
0：停机或者关机（千万不能将initdefault设置为0）# 开机会执行的
两个进程是killall和halt，这两个都表示为终止进程。故init 0是用于表示关机的
1：单用户模式，只root用户进行维护 # 这个级别启动的服务有三个，udev、lvm相关的和single(单用户模式的服务)。故此级别是单用户模式，只有root能用，不支持其他用户。
2：多用户模式，不能使用NFS(Net File System)
# 这个级别启动的服务多了，NetworkManager/iptables/acpid/alsa都已经开启，但是nfs,smb,openvpn相关服务没有开启，这个级别不支持nfs。
3：完全多用户模式（标准的运行级别）
# 这个级别nfs服务是开启的，被成为完全多用户模式。

4：安全模式
5：图形化（即图形界面）
6：重启（千万不要把initdefault设置为6）  
# 这个级别里，只有两个服务，一个为killall，一个是reboot，即，关闭现在的系统，重启。故此级别是重启。
```

