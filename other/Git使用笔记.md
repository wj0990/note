Git使用笔记
---

## 目录

- [基本使用命令](#基本使用命令)
- [解决中文乱码](#解决中文乱码)


## 基本使用命令

远程建好仓库，基础命令提交到远程仓库

```shell
git clone https://github.com/wangchuxi/note.git  # 克隆 note 仓库
git status          # 查看状态
git add README.md   # 添加需要提交的文件 README.md 缓存到本地
git add .           # 添加所有的文件
git commit -m "添加我的Markdown笔记"  # 提交说明
git push        # 提交到远程仓库
```

Github官方基础教程

```shell
mkdir test                  # 1. 在当前目录下，创建一个 test 文件夹
cd test                     # 2. 创建好了之后，进入 test 文件夹
echo "# test" >> README.md  # 3. 将字符串 "# test" 写入 README.md，并生产 README.md
git init                    # 4. 初始化一个git项目，当前目录生产一个隐藏文件 .git
git add README.md           # 5. 添加需要提交的文件 README.md 缓存到本地
git commit -m "first commit" # 6. 提交说明

# 7. 添加远程仓库地址取名叫 origin，关联远程仓库，
git remote add origin https://github.com/wangchuxi/test.git  
git push -u origin master # 8. 提交代码到远程origin仓库 的 master 分支
```


## 解决中文乱码

解决问题参考[git 中文文件名乱码](http://blog.csdn.net/zhanlanmg/article/details/49862779)

```
git config --global core.quotepath false
```

