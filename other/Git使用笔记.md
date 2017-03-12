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

## git 学习中常用的一些命令

```shell
mkdir Git                     # 1. 在此路径中创建Git文件夹
ls                            # 2. 查看当前目录
pwd                           # 3. 显示当前路径
cd Git                        # 4. 进入Git文件
echo “# test” >> README.md    # 5. 将字符串“#test”写入 README.md，并且生成REMADME.md
git init                      # 6. 把此路径通过“git init”转变成git可以管理的文件
git add README.md             # 7. 将文件添加到本地git仓库。
git commit -m “说明”         # 8. 对本r次提交做出说明，一遍日后很方便的找出此次提交的记录。
git status                    # 9. 查看这次提交的状态。
git diff README.md             # 10. 查看修改的文件，修改详细部分。
   # 11. 添加远程仓库的地址取名 origin关联远程仓库。
git remote add origin http://github.com/wangchuxi/test.git
git push -u orign master   # 11. 提交代码到远程仓库的 master 分支

```

## 关联远程仓库

``` shell
git remote -v                # 查看远程仓库地址
# 添加远程仓库地址取名叫origin 地址为：https://github.com/wangchuxi/test.git
git remote add origin https://github.com/wangchuxi/test.git
git remote remove origin # 删除名字为 origin 的远程仓库
# 或者下面方式删除，上面为下面的简写方式
git remote rm https://github.com/wangchuxi/test.git    #删除远程的仓库
```


## 删除rm

``` shell
rm                           #删除本地文件
        # 删除时候遇到本地无法删除的时候报错：is a directory（你删除的是一个目录）应用一下命令 
rm -d       #后面加上该目录名称，就可删除该目录
rm r/R      # 删除子目录及文件。
mv test.js ../    #将文件移到上级目录。 所有
mv t1 t2 t3 -t home   #将 t1 t2 t3 (-t)移动到home里面


rm -rf test   删除关于test 
git rm -r --cached .  撤销上次add      
```

# 查看
``` shell
git log --pretty         
git show     #查看查看某次提交文件作出了哪些修改

```

# 写入
```shell
mkdir test    #新建test 文件
echo "" >> README.md   #将空白字符写入 REAMDE.md 并新建它。也可以是文件移动。
touch test.html       #新建文本。
```
# 修改
```shell
git reset commit_id （回退到上一个 提交的节点 代码还是原来你修改的） 
git reset –hard commit_id （回退到上一个commit节点， 代码也发生了改变，变成上一次的）
```
#创建
```shell- reset HEAD 如果后面什么都不跟的话 就是上一次add 里面的全部撤销了 
git reset HEAD XXX/XXX/XXX.Java 就是对某个文件进行撤销了


```

```
sudo        给管理员权限。
```

# 当提交代码出现冲突的时候：
```shell
1. 将所有代码全部push 到库里去 git add.    #将全部代码上传到库里去。
2. git pull origin master               #将master分枝上面的内容pull到本地。
  # 爆出冲突及文件“The following untracked working tree files would be overwritten by merge:”，
3.  git pull origin master --allow-unrelated-histories 
  #拉取远程 能够看到冲突里的哪些细节的变化。然后进行铲除冲突。
4. rm -rf .git    #彻底删除.git.
5. git init  # 重新初始化一下。
6. git remote add origin git@git.showgold.cn:wangjie/webpack2.git 
      # 重新关联远程仓库。
7.git remote -v      #查看远程仓库 看在哪个分枝    
8.git pull origin master         # 将远程的拉到本地
然后git add ......
```
