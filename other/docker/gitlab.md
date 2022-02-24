# gitlab

GitLab是一个利用Ruby on Rails开发的开源应用程序，实现一个自托管的Git项目仓库，可通过Web界面进行访问公开的或者私人项目。
它拥有与GitHub类似的功能，能够浏览源代码，管理缺陷和注释。可以管理团队对仓库的访问，它非常易于浏览提交过的版本并提供一个文件历史库。团队成员可以利用内置的简单聊天程序（Wall）进行交流。它还提供一个代码片段收集功能可以轻松实现代码复用，便于日后有需要的时候进行查找。


## Docker 部署 Gitlab

在 Docker 中安装 Gitlab 教程，官方文档，如果你想使用原生安装，教程在这里：CentOS7安装维护Gitlab

[参考文档](https://github.com/jaywcjlove/docker-tutorial/blob/master/docker/gitlab.md)

### 持续集成（Continuous Integration）
软件集成自动化部署

GitLab-CI

Gitlab-CI是GitLab Continuous Integration（Gitlab持续集成）的简称。
从Gitlab的8.0版本开始，gitlab就全面集成了Gitlab-CI,并且对所有项目默认开启。
只要在项目仓库的根目录添加.gitlab-ci.yml文件，并且配置了Runner（运行器），那么每一次合并请求（MR）或者push都会触发CI pipeline。

GitLab-Runner

Gitlab-runner是.gitlab-ci.yml脚本的运行器，Gitlab-runner是基于Gitlab-CI的API进行构建的相互隔离的机器（或虚拟机）。GitLab Runner 不需要和Gitlab安装在同一台机器上，但是考虑到GitLab Runner的资源消耗问题和安全问题，也不建议这两者安装在同一台机器上。

Gitlab Runner分为两种，Shared runners和Specific runners。

[####Runner](https://docs.gitlab.com/runner/install/docker.html)

1. 使用本地系统卷挂载来启动 Runner 容器  

```
   docker run -d --name gitlab-runner --restart always \
     -v /srv/gitlab-runner/config:/etc/gitlab-runner \
     -v /var/run/docker.sock:/var/run/docker.sock \
     gitlab/gitlab-runner:latest
```
> 在 macOS 上，使用/Users/Shared而不是/srv.

2. 使用 Docker 卷启动 Runner 容器

```
docker run -d --name gitlab-runner --restart always \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v gitlab-runner-config:/etc/gitlab-runner \
    gitlab/gitlab-runner:latest

docker run -d --name gitlab-runner --restart always \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v /home/www/gitlab/gitlab-runner/config:/etc/gitlab-runner \
  gitlab/gitlab-runner:latest
```

服务 gitlab-runner 跑起来之后可以注册对应的仓库

`
# docker run --rm -it -v /home/www/gitlab/gitlab-runner/config:/etc/# gitlab-runner gitlab/gitlab-runner register
# 
# Runtime platform                                    arch=amd64 os=linux # pid=8 revision=943fc252 version=13.7.0
# Running in system-mode.
# 
# Enter the GitLab instance URL (for example, https://gitlab.com/):
# https:/*.****.com/
# Enter the registration token:
# tQSc*******
# Enter a description for the runner:
# [eea8f38593b6]: ***系统
# Enter tags for the runner (comma-separated):
# web
# Registering runner... succeeded                     runner=tQScbZ72
# Enter an executor: docker-ssh, parallels, virtualbox, docker+machine, # custom, docker, shell, ssh, docker-ssh+machine, kubernetes:
# docker
# Enter the default Docker image (for example, ruby:2.6):
# node:14
# Runner registered successfully. Feel free to start it, but if it's running # already the config should be automatically reloaded!
`

Enter the GitLab instance URL： 注：URL可在gitlab项目的Setting->CI/CD->Runners Setting->Expand中查看 （gitleb访问地址）

token: 当前项目 setting -> CI/CD 页面runers菜单 -> Set up a specific runner manually栏上复制

Enter a description for the runner: #输入runner的描述（方便gitlab-runner/config配置文件里区分）

Enter tags for the runner (comma-separated): （runner的标签，用逗号分开）

Enter an executor: docker-ssh+machine, docker-ssh... :输入执行者如（服务在docker里运行就输入docker）

Enter the default Docker image (for example, ruby:2.6): 输入默认的 Docker 镜像 里运行环境 


可以看到runners，绿色为active可用。点击编辑，设置为runner job without tags，这样不受标签限制

> 如果需要其它配置可参考 [地址](https://www.sohu.com/a/438272303_99930294)

/home/www/gitlab/gitlab-runner/config:目录下会生成配置文件


```
[[runners]]
  name = "***系统"
  url = "https://*.****.com/"
  token = "VjM-"
  executor = "docker"
  [runners.custom_build_dir]
  [runners.cache]
    [runners.cache.s3]
    [runners.cache.gcs]
    [runners.cache.azure]
  [runners.docker]
    tls_verify = false
    image = "node:14"
    privileged = false
    disable_entrypoint_overwrite = false
    oom_kill_disable = false
    disable_cache = false
+    volumes = ["/cache", "/var/run/docker.sock:/var/run/docker.sock"]
+    pull_policy = "if-not-present"
    shm_size = 0
```

volumes: 是为了在容器中可以执行宿主机的docker命令  

> 创建pod的时候报错，显示container image is not present with pull policy of nerver

1.查看了创建pod的yml ，看到imagePullPolicy: Never  
2.看上图日志发现 pod调度到了work02节点，去work02上查看没有要用的image ，而  imagePullPolicy: Never 是只使用本地image所以 创建失败  
3.修改策略为 imagePullPolicy: IfNotPresent ，重新apply就好  

imagePullPolicy的用法总结如下：

Never	只使用本地image

Always	每次都下载镜像

IfNotPresent	优先使用本地image，本地没有再去下载

就是 image的 tag标签，如果省略标签 或者 为latest ，那么策略走的还是Always ，反之则为  IfNotPresent

#### 定义规则

在gitlab项目根目录创建.gitlab-ci.yml文件，填写runner规则，具体语法课参考[官方文档](https://docs.gitlab.com/ee/ci/yaml/)

```
# This file is a template, and might need editing before it works on your project.
# To contribute improvements to CI/CD templates, please follow the Development guide at:
# https://docs.gitlab.com/ee/development/cicd/templates.html
# This specific template is located at:
# https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/ci/templates/Getting-Started.gitlab-ci.yml

# This is a sample GitLab CI/CD configuration file that should run without any modifications.
# It demonstrates a basic 3 stage CI/CD pipeline. Instead of real tests or scripts,
# it uses echo commands to simulate the pipeline execution.
#
# A pipeline is composed of independent jobs that run scripts, grouped into stages.
# Stages run in sequential order, but jobs within stages run in parallel.
#
# For more information, see: https://docs.gitlab.com/ee/ci/yaml/README.html#stages



stages:  # List of stages for jobs, and their order of execution 作业的阶段列表，以及它们的执行顺序

  - deploy

services:
  - name: docker:19.03.13-dind
    command: 
      [
        "--registry-mirror=https://docker.mirrors.ustc.edu.cn",
        "--insecure-registry=192.168.188.222:5008"
      ]

docker-deploy:
  stage: deploy  # 定义作业阶段
  image: docker/compose:1.27.4  # 使用的 Docker 镜像
  only:
    # 分支
    - main  
    # 覆盖在作业之前执行的一组命令
  before_script: 
  # 查看docker系统信息。
    - docker info 
    # 查看docker-compose版本
    - docker-compose --version 
    # 登陆docker
    - docker login -u "$CI_REGISTRY_USER" -p "$CI_REGISTRY_PASSWORD" $CI_REGISTRY 
  script:
    # 停止当前服务
    - docker-compose -p jizha-dev -f docker-compose.dev.yml down --remove-orphans
    # 拉取docker-compose
    - docker-compose -f docker-compose.dev.yml pull
   # 启动指定的docker-cmpose yml文件
    - docker-compose -p jizha-dev -f docker-compose.dev.yml up -d
    - docker-compose -f docker-compose.dev.yml ps

```
