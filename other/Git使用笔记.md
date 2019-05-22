Git使用笔记
---

## 目录

- [配置ssh密钥](#配置ssh密钥)
- [基本使用命令](#基本使用命令)
- [解决中文乱码](#解决中文乱码)
- [关联远程仓库](#关联远程仓库)


## 配置ssh密钥

### 配置
首先是配置帐号信息 ssh -T git@github.com 测试。

### 修改项目中的个人信息

```shell
git help config                                    # 获取帮助信息，查看修改个人信息的参数  
git config --global user.name "小弟调调"             # 修改全局名字
git config --global user.email "wowohoo@qq.com"    # 修改全局邮箱
git config user.name “gitlab’s Name”               # 修改项目名字
git config user.email "gitlab@xx.com"              # 修改项目邮箱
git config --list                                  # 查看配置的信息  
git commit --amend --author “name <email>”         # 修改最近一条提交的用户名 、密码
```
###  创建SSH密钥 
这个密钥用来跟 github 通信，在本地终端里生成然后上传到 github

```shell
ssh-keygen -t rsa -C '12345@qq.com'                  # 生成密钥  
ssh-keygen -t rsa -C "12345@qq.com" -f ~/.ssh/ww_rsa # 指定生成目录文件名字
ssh -T git@github.com                                # 测试是否成功  
```

### 多账号ssh配置
多账号配置，密钥命名不同然后通过`config`配置文件里分别引入

1. 生成指定名称的密钥

```shell
ssh-keygen -t rsa -C "邮箱地址" -f ~/.ssh/github_rsa   # 会生成 github_rsa(私钥) 和 github_rsa.pub(公钥) 这两个文件。 如果想生成同名密钥替换原来的最好先删除原来的。本人踩好久坑
```
2. 密钥(公钥)复制到托管平台上
```shell
cat ~/.ssh/jslite_rsa.pub   #返回内容粘贴到github里settings->SSH anf GPG keys-->New SSH key 位置。个人建议不要用vim打开复制密钥。后面容易复制空格。
```
3. 修改config 配置文件  
vim ~/.ssh/config #修改config文件，如果没有创建 config

```shell
Host gitlab
    User git
    Hostname git.showgold.cn
    IdentityFile ~/.ssh/id_rsa

Host github
    User git
    Hostname github.com 
    IdentityFile ~/.ssh/github_rsa

# Host 这里是个别名可以随便命名
# HostName 一般是网站如：git@ss.github.com:username/repo.git 填写 github.com
# User 通常填写git
# IdentityFile 使用的公钥文件地址
```

4. 测试

```shell
ssh -T git@github.com         # `@`后面跟上定义的Host  
ssh -T work.github.com        # 通过别名测试
ssh -i ~/公钥文件地址 Host别名   # 如 ssh -i ~/.ssh/work_rsa work.github.com
```
5. 错误处理  

如果出现错误提示：`Permission denied (publickey)`.因为新生成的key不能加入ssh就会导致连接不上github。
 
先输入$ `ssh-agent`，再输入$ `ssh-add ~/.ssh/github_rsa`，这样就可以了。

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
git push -u origin master # 8. 提交代码到远程origin仓库 的 master 分支 在远程仓库里没有master分支时，创建一个master分支。
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

  第一次提交到自己的本地仓库

```

## 删除rm

``` shell
rm     #删除本地文件
       # 删除时候遇到本地无法删除的时候报错：is a directory（你删除的是一个目录）应用一下命令 
rm -d       # 后面加上该目录名称，就可删除该目录
rm r/R      # 删除子目录及文件。
mv test.js ../  # 将文件移到上级目录。 所有
mv * ~/.rncache  # 将当前文件里所有的文件移到顶层admin用户子文件夹rncahe里。
mv t1 t2 t3 -t home   #将 t1 t2 t3 (-t)移动到home里面


rm -rf test   删除关于test 
git rm -r --cached .  撤销上次add
git reset HEAD .  撤销上次add  
git push --delete origin wj05    # 删除远程分支
git branch -D wj05               # 删除本地分枝
git push origin :wj              # 删除本地分枝
```

## 查看

``` shell
git log --pretty         
git show     #查看查看某次提交文件作出了哪些修改
git diff     #查看更改内容。git
git checkout test.html  #f返回以前版本。
git branch -v:   #查看本地当前代码的状况（版本号）
git branch -av #查看所有分枝(版本号)其它功能后期再了解。

```

## 写入

```shell
mkdir test    #新建test 文件
echo "" >> README.md   #将空白字符写入 REAMDE.md 并新建它。也可以是文件移动。
touch test.html       #新建文本。
```

## 修改

```shell
git reset commit_id （回退到上一个 提交的节点 代码还是原来你修改的） 
git reset –hard commit_id （回退到上一个commit节点， 代码也发生了改变，变成上一次的）
```

## 创建

```shell
- reset HEAD 如果后面什么都不跟的话 就是上一次add 里面的全部撤销了 
git reset HEAD XXX/XXX/XXX.Java 就是对某个文件进行撤销了
```

```shell
sudo        # 给管理员权限。
```

## 当提交代码出现冲突的时候：

```shell
1. 将所有代码全部push 到库里去 git add.     #将全部代码上传到库里去。
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
# 然后git add ......
```

## 拉取远程代码到本地合并：

```shell
1. git remote -v     #查看远程仓库分枝。
2. git remote add upstream git@git.showgold.cn:wabg/wabg-server.git
                    #拉取远程项目到upstream分支上。
3.  #查看远程仓库分枝。
4.  git fetch upstream    #拉取upstream分支到本地。
5.  git status           #查看状态有么有没有提交的。
6.  ##如有不同就提交掉。如果不想提交并还原原来版本。
    git checkout api-doc/登录.md   git diff api-doc/登录.md
7.  git merge upsteam/dev-s       #将分支合并。
8.  git fetch upstream

9.  git remote

git pull origin wcx:wcx #拉取远程分枝到本地并创建分枝。
```


## 上传 并且加载新项目：

```shell
git remote -v           # 查看远程仓库    
git pull upstream       # 拉回上游分支    
git checkout dev        # 切换到分支到dev   
git merge upstream/dev  # (合并项目)  
git pull upstream       # 拉回上游分支   
git init                # 加载package.json 文件   
npm run dev             # 运行分支
```

## wabg-api 项目中更新代码 并合并上游代码（合并时候注意）

```shell 
git status               # 将确认无误的代码打包
git commit -m "更新"      # 描述更新内容。
git push origin wj       # 将wj分支推送到远程仓库
git pull origin master   # 将项目拉到本地
git push origin wj       # 将代码推到远程仓库完成合并。
```

```shell
git branch wj            # 创建wj分支
git checkout wj          # 切换到王捷分
git branch -av           # 查看所有分支
git pull origin master   # 拉去上游代码
git status 
git add 
git commmit -m ""
git push origin wj   #
#新建分支  拉取两条远程代码到本地


git branch -d wj123         #删除分支
```

## git 操作代码回滚

``` shell
git reflog                # 查看你的历史变更记录
git reset --hard HEAD@{n} #(n是你要回退到的引用位置）回退你要指定的那次操作。
```

## git fetch 和 git pull的区别：

> 1.Git fetch:只是从远程获取最新版本到本地,不会merge(合并)

```shell
1. $:git fetch origin master   #从远程的origin的master主分支上获取最新版本到origin/master分支上
2. $:git log -p master..origin/master #比较本地的master分支和origin/master分支的区别
3. $:git merge origin/master          #合并
```

> 2.Git fetch:从远程获取最新版本并merge(合并)到本地

```shell
$:git pull origin master  //相当于进行了 git fetch 和 git merge两部操作

```

> 合并导致报错:`error: You have not concluded your merge (MERGE_HEAD exists)` .的原因可能是在以前pull下来的代码自动合并失败

>解决办法一:保留本地的更改,中止合并->重新合并->重新拉取

```shell
$:git merge --abort
$:git reset --merge
$:git pull
```

>解决办法二:舍弃本地代码,远端版本覆盖本地版本(慎重)

```shell 
$:git fetch --all
$:git reset --hard origin/master
$:git fetch
```

>代码提交之后可以回滚到add 之前

```
git reset HEAD^  撤销上次commit
```
## git pull拉代码时弹出个选项，类似

>Please enter a commit message to explain why this merge is necessary.
提示代码都自动合并了 ，
解决方法：shift + z + z     //退出并且保存了

>解决方法二

```shell

1.按键盘字母 i 进入insert模式

2.修改最上面那行黄色合并信息,可以不修改

3.按键盘左上角"Esc"

4.输入":wq",注意是冒号+wq,按回车键即可 
 

```

## git 配置

```shell
git config --list                             # 查看git的所有配置

git config user.email                         # 查看git配置的邮箱和用户名
git config user.name

git config user.email "***@**.com"            # 只修改当前项目下的邮箱和用户名
git config user.name "你的用户名"

git config --global user.email "***@**.com"   # 修改全局的邮箱和用户名
git config --global user.name "你的用户名"

```

