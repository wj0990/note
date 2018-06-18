# Mysql 安装配置  


## 下载安装

(官网下载社区版dmg安装文件) [https://dev.mysql.com/downloads/mysql/]

1、执行安装文件，按步骤完成安装。

2、安装完成后终端输入：

```
mysql --version;
```

----显示版本号说明正常，若显示command not found，在终端输入如下，”/usr/local/mysql/bin/mysql”为mysql默认安装路径：

```
$ cd /usr/local/bin/
$ sudo ln -fs /usr/local/mysql/bin/mysql mysql
```

3、关闭mysql服务：

```
sudo /usr/local/mysql/support-files/mysql.server stop

```

## 环境变量配置

1. 打开终端，进入根目录。
```
cd ~
```

2. 进入配置文件
```js
touch .bash_profile
```

3. 打开配置文件
```
open -e .bash_profile
```
会在TextEdit中打开这个文件（如果以前没有配置过环境变量，那么这应该是一个空白文档）。如果有内容，请在结束符前输入，如果没有内容，请直接输入如下语句：

```js
export PATH=${PATH}:/usr/local/mysql/bin
```

然后，保存，退出TextEdit（一定是退出），关闭终端并退出。

## 修改root密码
1. 先关闭数据库 苹果->系统偏好设置->关闭mysql服务（点击stop mysql server）

2. 在终端输入：
```shell
cd /usr/local/mysql/bin/  # 进入binmu目录
sudo su  # 登录管理员权限
./mysqld_safe --skip-grant-tables &  # 禁止mysql验证功能

# 回车后mysql会自动重启（偏好设置中mysql的状态会变成running） 
```

3. 输入命令如下：
```shell
./mysql  # 输入后回车

FLUSH PRIVILEGES;  # 输入后回车

SET PASSWORD FOR 'root'@'localhost' = PASSWORD('123');  # 设置密码

# 至此修改结束，重启终端后，输入 mysql -u root -p 回车 再键入密码：123 就启动成功。

```

## 删除 停止MySql进程，控制台输入一下命令。

```shell
1、sudo rm /usr/local/mysql

2、sudo rm -rf /usr/local/mysql*

3、sudo rm -rf /Library/StartupItems/MySQLCOM

4、sudo rm -rf /Library/PreferencePanes/My*

5、vim /etc/hostconfig  (and removed the line MYSQLCOM=-YES-)

6、rm -rf ~/Library/PreferencePanes/My*

7、sudo rm -rf /Library/Receipts/mysql*

8、sudo rm -rf /Library/Receipts/MySQL*

9、sudo rm -rf /var/db/receipts/com.mysql.*
```

# 额外部分和MySQL学习


## 查看版本

1. 没有连接到MySQL服务器，就想查看MySQL的版本。打开cmd，切换至mysql的bin目录，运行下面的命令即可：

```shell
e:\mysql\bin>mysql -V

mysql  Ver 14.14 Distrib 5.6.32, for Win32 (AMD64)
（版本为 5.6.32）

或者：
e:\mysql\bin>mysql -v
# 这个命令可以查看到更为详细的信息，因为它会用账号 ODBC，连接上MySQL服务器，默认连接到localhost上的3306端口。

或者
e:\mysql\bin>mysql --help | find "Distrib"

mysql  Ver 14.14 Distrib 5.6.32, for Win32 (AMD64)

# 这种方式只有windows系统下才可用，因为windows中才用find命令查找字符串，且后面的字符串必须用双引号包裹起来，而linux系统下虽然也是用 | 作为管道符，却是使用grep命令查找字符串（如：mysql --help | grep Distrib）。
```

2. 如果已经连接到mysql服务器

```shell
mysql>  select version();
+-----------+
| version() |
+-----------+
| 5.7.22    |
+-----------+
1 row in set (0.00 sec)
# 或者

mysql> status;
# 或者

mysql> \s

```