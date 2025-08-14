

---
title: 'docker里如何执行sql'
description: '使用docker执行sql脚本'
heroImage: './docker-mongodb.webp'
tags: ['docker', 'mongodb']
pubDatetime: 2025-06-30T05:53:09.789Z
author:
  name: "author.name"
  description: "author.description"
  avatar: "../images/avatar.webp"
---




### docker 运行 数据库

这里就不详细说，网上教程很多

宿主机直接执行mysql命令行是无效的，它会报错

```bash
zsh: command not found: mysql

```

所以我们必须进入docker里去执行


```bash
docker exec -it mysql bash
```

此时我们进入mysql命令模式

如果直接执行宿主机的sql文件是不行的


新开一个终端
查看容器的文件目录
```bash
docker exec mysql ls
```
首先我们把文件复制到docker里来

执行   `docker cp <宿主机文件的绝对路径> 空格 <docker数据库container id>:<docker容器路径> `

```bash
docker cp /Users/xxx/xxx.sql 60dba8cdfc5e:/tmp   
```
容器id可以通过`docker ps`获取





回到我们之前进入mysql命令模式
选择数据库
```bash
use test;
```
执行sql文件
```bash
source /tmp/xxx.sql
```

即可