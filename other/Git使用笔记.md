Git使用笔记
---

## 目录

- [克隆仓库](#克隆仓库)
- [基本使用命令](#基本使用命令)
- [解决中文乱码](#解决中文乱码)

## 克隆仓库

```shell
git clone https://github.com/wangchuxi/note.git
```


## 基本使用命令

远程建好仓库

```shell
git status       # 查看状态
git add 文件目录   # 添加需要提交的文件
git add .        # 添加所有的文件
git commit -m "添加我的Markdown笔记"  # 提交说明
git push        # 提交到远程仓库
```


## 解决中文乱码

解决问题参考[git 中文文件名乱码](http://blog.csdn.net/zhanlanmg/article/details/49862779)

```
git config --global core.quotepath false
```

