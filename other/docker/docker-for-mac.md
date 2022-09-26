
# 在mac上安装docker

可以使用 Homebrew 来安装 Docker，Homebrew 的 Cask 已经支持 Docker for Mac。

## 安装brew

brew是一个软件包管理工具，类似于centos下的yum。
brew 是MacOS上的包管理工具，类似于centos下的yum， 可以简化 macOS 和 Linux 操作系统上软件的安装。

1.确认安装ruby

```
$ which ruby

$ruby --version
```

2.安装(较慢）
执行命令:

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

目前此命令可用，按提示选择下载源，我选的清华下载源

```
/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"
```

安装过程中需要输入一次用户密码

安装过程（不要着急）


3.确认
brew --version

测试是否已安装成功

which brew

安装成功则显示路径:

```
/opt/homebrew/bin/brew
```

## 安装 docker

```shell
 brew cask install docker
brew install docker --cask
```



## 镜像加速


鉴于国内网络问题，后续拉取 Docker 镜像十分缓慢，我们可以需要配置加速器来解决，我使用的是网易的镜像地址：http://hub-mirror.c.163.com。

在任务栏点击 Docker for mac 应用图标 -> Perferences... -> Docker Engine   在列表中填写加速器地址即可。修改完成之后，点击 Apply & Restart 按钮，Docker 就会重启并应用配置的镜像地址了。

```shell
{
  "builder": {
    "gc": {
      "defaultKeepStorage": "20GB",
      "enabled": true
    }
  },
  "experimental": false,
  "features": {
    "buildkit": true
  },
  "registry-mirrors":[
    "http://hub-mirror.c.163.com"
  ]
}

```

docker info 查看修改成功