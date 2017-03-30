# Mysql 基本入门语法

## 开始使用
  
我下面所有的SQL语句是基于MySQL 5.6+运行。

MySQL 为关系型数据库(Relational Database Management System)，一个关系型数据库由一个或数个表格组成, 如图所示的一个表格：

```

+ 表头(header): 每一列的名称;
+ 列(col): 具有相同数据类型的数据的集合;
+ 行(row): 每一行用来描述某个人/物的具体信息;
+ 值(value): 行的具体信息, 每个值必须与该列的数据类型相同;
+ 键(key): 表中用来识别某个特定的人物的方法, 键的值在当前列中具有唯一性。
```

## 登陆MySQL

  (这一块还没有详细研究，周末试一试)。

```sql
mysql -h 127.0.0.1 -u 用户名 -p
mysql -D 所选择的数据库名 -h 主机名 -u 用户名 -p
mysql> exit # 退出 使用 “quit;” 或 “\q;” 一样的效果
mysql> status;  # 显示当前mysql的version的各种信息
mysql> select version(); # 显示当前mysql的version信息
mysql> show global variables like 'port'; # 查看MySQL端口号

```

## 创建数据库表

(这一块还没有详细研究，周末试一试)。

> 使用 create table 语句可完成对表的创建, create table 的常见形式:语法：create table 表名称(列声明);

```sql
 


CREATE TABLE `user_accounts` (
         -- id 1- 100取整数 无符号，不为空值，自增长，            主键卫衣非空值
  `id`             int(100) unsigned NOT NULL AUTO_INCREMENT primary key,
                  -- varchar(32) 能存放32个字符。
  `password`       varchar(32)       NOT NULL DEFAULT '' COMMENT '用户密码',
                  -- 数据类型小数据  
  `reset_password` tinyint(32)       NOT NULL DEFAULT 0 COMMENT '用户类型：0－不需要重置密码；1-需要重置密码',
  `mobile`         varchar(20)       NOT NULL DEFAULT '' COMMENT '手机',
  `create_at`      timestamp(6)      NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `update_at`      timestamp(6)      NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), -- 时间
  -- 创建唯一索引，不允许重复(后期传数据时如有重复的数据库会报错)
  UNIQUE INDEX idx_user_mobile(`mobile`)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8
COMMENT='用户表信息';
```

#### 数据类型的属性解释

+ `NULL`：数据列可包含NULL值；
+ `NOT NULL`：数据列不允许包含NULL值；
+ `DEFAULT`：默认值；

#### 数据类型

`char`类型：

```
CHAR存储定长固定长度数据，比如定义char(10）固定长度就占去10个字节的空间。因为是固定长度，所以速度效率高。
    缺点：多余空间会用空格填满不利于处理，要用trim处理却掉空格。
    优点：便于引索，速度快。
    适用于：数字，字母
```

`VARCHAR`存储变长数据:

```
字段可能的值是不固定长度，只知道它不可能超过10个字符，把它定义为 VARCHAR(10)是最合算的。`VARCHAR类型的实际长度是它的值的实际长度+1。1用来保存实际用的长度。
变长型字符数据类型，存储最长长度为8,000 个字符 
       缺点：相对CHAR不利于引索，速度稍慢。
       优点：占用空间灵活。
       适用于：数字，字母 
```

`Nvarchar` 类型

```
为了多种字符的转换，如中文，音标等，对每个英文(ASCII)字符等所有的字符都占用2个字节。
.字节的存储大小是所输入字符个数的两倍，它是以双字节来占用存储空间的。
nvarchar(n):可变长度 Unicode 数据，其最大长度为 4,000 字符
        缺点：相比上两种，占用空间较大，索引相对慢些。
        优点：其中N表示Unicode常量，可以解决多语言字符集之间的转换问题。
        适用于：中文以及其它字符。
```



mysql的基本数据类型里几个int如下:

|类型|大小|范围（有符号）|范围（无符号）|用途|
| ------ | ------ | ----- | ------ |------|
|TINYINT|1字节|(-128，127)|(0,255)|小整数|
|SMALLINT|2字节|(-32 768，32 767)|大整数|
|MEDIUMINT|3字节|(-8 388 608，8 388 607)|大整数|
|INT或INTEGER|4字节|(-2 147 483 648，2 147 483 647)|大整数|
|BIGINT|8字节|-9 233 372 036 854 775 808，9 223 372 036 854 775 807) (0，18 446 744 073 709 551 615)| 极大整数|
||||||



```sql
SELECT 语句用于从表中选取数据。 
语法：SELECT 列名称 FROM 表名称 
语法：SELECT * FROM 表名称
```

```shell

```

