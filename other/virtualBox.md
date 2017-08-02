# virtualBox 安装虚拟机Centos7步骤


1. 提前准备 `VirtualBox-5.1.26-117224-OSX.dmg`和系统文件`CentOS-7-x86_64-Minimal-1511.iso` 安装包

2. 安装好VirtualBox后进入点击`新建`如填写
名称：centos7;  类型：Linux  版本：Other Linux(64 -bit)
（内存如果本机配置高可以调大一点，我设置的时 内存：2048MB 存储：15G .
）
3. 设置完成点击`设置`进入设置界面点击`网络`
  在网卡1处设置：勾选启用网络选择`网络地址转换（NAT）`
  在网卡2处设置：勾选启用网络连接方式`仅主机（Host-Only）网络`

(注意：如果连接方式无法选择.在vim中 ifconfig 查看物理机，虚拟网卡是否启动
 没有启动 virtualbox > 偏好设置 > 网络设置 + 添加一个“”)

4.双击如图(7)启动程序 > 点击`start`进入界面等候安装点击continue.
注意:安装时创建用户名不是超级管理员。后面改配置的时候只有超级管理员才会有权限。
按照步骤一步步操作
用超级管理员账号登陆进去：
```shell
su        #切换账号
1. cd /etc/sysconfig/network-scripts/  #进入配置网络界面
2. ls                  # 查看当前目录
3. vi ifconfg-enp03    # 进入编辑配置
4 .将最后一项 `ONBOOT = yes` 改成`no`   # unix 快捷键 i:编辑 ; shift + : 退出编辑:wq保存
5 . /etc/init.d/network restart      # 启动网络 
```


