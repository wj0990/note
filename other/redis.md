# resdis 学习笔记

## redis安装

```shell
$ wget http://download.redis.io/releases/redis-4.0.0.tar.gz  #redis下载
$ tar xzvf redis-4.0.0.tar.gz -C /usr/local/   # tar -xjvf解压redis 到C:/Progrem Files/
$ cd /usr/local/redis-4.0.0  ## 进入解压文件
$ make # 编译
$ make test
$ make install # 安装 
# 程序会自动执行:
# mkdir -p /usr/local/bin
# cp -pf redis-server /usr/local/bin
# cp -pf redis-benchmark /usr/local/bin
# cp -pf redis-cli /usr/local/bin
# cp -pf redis-check-dump /usr/local/bin
# cp -pf redis-check-aof /usr/local/bin
```

 make 的时候会提示报错，缺少gcc，tcl之类的错误，直接安装就可以了。

```shell
$ make test
You need tcl 8.5 or newer in order to run the Redis test
make: *** [test] Error 1
```

```shell
yum  install  gcc # 就把gcc当成c语言编译器, g++当成c++语言编译器用就是了.(知乎) 查看版本 gcc -v
wget http://downloads.sourceforge.net/tcl/tcl8.6.1-src.tar.gz
sudo tar xzvf tcl8.6.1-src.tar.gz -C /usr/local/  # 你的linux装了tcl解释器了吗，一般是 /usr/bin/tclsh，如果确认你装了 （确认方法是在命令行下执行 tclsh）然后直接运行 ./test.tcl 即可
cd /usr/local/tcl8.6.1/unix/
sudo ./configure # 执行 configure 后会生成 Makefile，Makefile 规定了用什么编译器、编译参数等信息。
sudo make # 生成的可执行文件放在当前目录或某个子目录
sudo make install # 将 make 生成的文件安装到系统目录中
```

## Redis升级
首先，确保安装了以下repos，EPEL和REMI：

```shell
sudo rpm -Uvh http://download.fedoraproject.org/pub/epel/6/x86_64/epel-release-6-8.noarch.rpm
sudo rpm -Uvh http://rpms.remirepo.net/enterprise/remi-release-6.rpm
```

通过`--enablerepo=epel`参数查看指定源Redis版本，检查REMI repo中的Redis版本：

```shell
yum --enablerepo=epel info redis
# Loaded plugins: fastestmirror
# Loading mirror speeds from cached hostfile
#  * base: centos.ustc.edu.cn
#  * epel: mirrors.tuna.tsinghua.edu.cn
#  * extras: centos.ustc.edu.cn
#  * updates: mirrors.zju.edu.cn
# Available Packages
# Name        : redis
# Arch        : x86_64
# Version     : 2.4.10
# Release     : 1.el6
# Size        : 213 k
# Repo        : epel/x86_64
# Summary     : A persistent key-value database
# URL         : http://redis.io
# License     : BSD
# Description : Redis is an advanced key-value store. It is similar to memcached but the data
#             : set is not volatile, and values can be strings, exactly like in memcached, but
#             : also lists, sets, and ordered sets. All this data types can be manipulated with
#             : atomic operations to push/pop elements, add/remove elements, perform server
#             : side union, intersection, difference between sets, and so forth. Redis supports
#             : different kind of sorting abilities.
```

然后从EPEL repo安装相关的依赖关系（jemalloc）：

```shell
yum --enablerepo=epel install jemalloc
```

在安装之前，您应该停止旧的Redis守护进程：

```shell
service redis stop
```

然后安装更新版本的Redis：

```shell
sudo yum --enablerepo=remi install redis
```






