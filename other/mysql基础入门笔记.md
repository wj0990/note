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

## 创建表之后进行修改

>语法： alter table 表名 add 列名 列数据类型 [after 插入位置];

```sql
  -- 在表students 后增加一列    在网页里站住60个字符。
alter table students add address char(60);

  -- 在表students的后增加一列在date列后面
alter table students add birthday date after age;

  --在表students的后增加一列为week的咧，表能够放5个字符，非null值，可以为空。
alter table students add column `weeks` varchar(5) not null default "" after `number_people`;
```


## 修改列

> 语法：alter table 表名 change 列名称 列新名称 新数据类型;

```sql

-- 将表 tel 列改名为 telphone: 
alter table students change tel telphone char(13) default "-";
-- 将 name 列的数据类型改为 char(16):
alter table students change name name char(16) not null;
    -- 修改 COMMENT 前面必须得有类型属性
alter table students change name name char(16) COMMENT '这里是名字';
-- 修改列属性的时候 建议使用modify,不需要重建表(没有明白)。
-- change用于修改列名字，这个需要重建表
alter table meeting modify `weeks` varchar(20) NOT NULL DEFAULT "" COMMENT "开放"
```

## 删除列alter .....drop

>语法：alter table 表名 drop 列名称;

```sql

-- 删除表user1中的 reset_password; 列:(列名包括数据都被删除) 
alter table user1 drop reset_password;

```


## 重命名表

>语法：`alter table 表名 `rename` 新表名;

```sql 
-- 重命名 students 表为 workmates: 
alter table students rename workmates;
```

## 清空表数据

```sql
方法一：delete from 表名;
方法二：truncate from "表名";
```

+ `DELETE`:1. DML语言;2. 可以回退;3. 可以有条件的删除;
+ `TRUNCATE`:1. DDL语言;2. 无法回退;3. 默认所有的表内容都删除;4. 删除速度比delete快。

## 删除整张表

> 语法：drop table 表名;

```sql
-- 删除 workmates 表: 
drop table workmates;
```

## 删除整个数据库

>语法：drop database 数据库名;

```sql
-- 删除 samp_db 数据库: 
drop database samp_db;
```

# 增删改查

## SELECT 查

SELECT 语句用于从表中选取数据。

语法：`SELECT 列名称 FROM 表名称` 
语法：`SELECT * FROM 表名称`      

SELECT + 表字段名 + FROM +数据表名+ WHERE + 筛选条件

```sql
-- 表station取个别名叫s，表station中不包含 字段id=13或者14 的，并且user_id不等于4的 查询出来，只显示id
SELECT s.id from station s WHERE id in (13,14) and user_id not in (4);

-- 从表 Persons 选取 LastName 列的数据
SELECT LastName FROM Persons

-- 结果集中会自动去重复数据  Company 列里的所有数据都拉出来，并且去掉重复的。在Orders列表里。
SELECT DISTINCT Company FROM Orders 
-- 表 Persons 字段 Id_P 等于 Orders 字段 Id_P 的值，
-- 结果集显示 Persons表的 LastName、FirstName字段，Orders表的OrderNo字段 的集合
SELECT p.LastName, p.FirstName, o.OrderNo FROM Persons p, Orders o WHERE p.Id_P = o.Id_P 

-- gbk 和 utf8 中英文混合排序最简单的办法 
-- ci是 case insensitive, 即 “大小写不敏感”   
SELECT tag, COUNT(tag) from news GROUP BY tag order by convert(tag using gbk) collate gbk_chinese_ci;
SELECT tag, COUNT(tag) from news GROUP BY tag order by convert(tag using utf8) collate utf8_unicode_ci;

```

## UPDATE 更新（改）

>Update 语句用于修改表中的数据。 
>语法：`UPDATE 表名称 SET 列名称 = 新值 WHERE 列名称 = 某值`

```sql
-- update语句设置字段值为另一个结果取出来的字段(更新user)

-- 更新表user中id = user2表中相对应name 字段为‘小苏’的id，的相对应位置的name的字段。
-- name字段来自于 user2表中id为1的相对应name的的字段。

update user set name = (select name from user1 where user1 .id = 1 )
where id = (select id from user2 where user2 .name='小苏');
-- 更新表 orders 中 id=1 的那一行数据更新它的 title 字段
UPDATE `orders` set title='这里是标题' WHERE id=1;
```

## INSERT 插入

> INSERT INTO 语句用于向表格中插入新的行。 
> 语法：INSERT INTO 表名称 VALUES (值1, 值2,....) 
> 语法：INSERT INTO 表名称 (列1, 列2,...) VALUES (值1, 值2,....)

```sql
-- 向表 Persons 插入一条字段 LastName = JSLite 字段 Address = shanghai
INSERT INTO Persons (LastName, Address) VALUES ('JSLite', 'shanghai');
-- 向表 meeting 插入 字段 a=1 和字段 b=2
INSERT INTO meeting SET a=1,b=2;
-- SQL实现将一个表的数据插入到另外一个表的代码
-- 如果只希望导入指定字段，可以用这种方法：
-- INSERT INTO 目标表 (字段1, 字段2, ...) SELECT 字段1, 字段2, ... FROM 来源表;
INSERT INTO orders (user_account_id, title) SELECT m.user_id, m.title FROM meeting m where m.id=1;
-- 给meeting表取别名 m  减少引用时的代码。
```

## DELETE

>DELETE 语句用于删除表中的行。(只删除数据不删除列名，可以指定哪一行来定位要删除那列的数据) 
>语法：`DELETE FROM 表名称 WHERE 列名称 = 值`

```sql
-- 清空user表但是不删除表(*)表示所有值。两种写法。
DELETE from user  ==  DELETE * from user
-- 删除表user 里title =1 的这一行。
DELETE from user WHERE title='women'
-- 删除user表中id为2和5的这两行行数据。    
    DELETE from user where id in (2，5)
```

## WHERE 

>WHERE 子句用于规定选择的标准,相当于条件。
 语法：`SELECT 列名称 FROM 表名称 WHERE 列 运算符 值` 

```sql 
-- 取出在user1表中 id字段大于12的所有数据集
SELECT id FROM user1  WHERE id>12
```

## AND 和 OR 

AND用法

```sql
-- 删除user_accounts表中 id为27,28或29中的 并且mobile = ‘的’这个字段（一行）
DELETE from user_accounts WHERE id in (27,28,29) and mobile in ('5');
```

OR用法

```sql
-- 使用 OR 来显示所有姓为 "Carter" 或者名为 "Thomas" 的人：
SELECT * FROM Persons WHERE firstname='Thomas' OR lastname='Carter'
```

## ORDER BY

>语句默认按照升序对记录进行排序。 
>`ORDER BY` - 语句用于根据指定的列对结果集进行排序。 
>`DESC` - 按照降序对记录进行排序。 
>`ASC` - 按照顺序对记录进行排序。

```sql

-- 拉取Company_information表中对应的两列数据进行排序，依照company，company里是字母名称
-- 所以以首字母排序，默认为顺序排，加DEsc为降序。
-- 最后 以company对象，company 正序 OederNumber 为序显示。
SElECT company, OrderNumber FROM  Company_information ORDER BY company
SElECT company, OrderNumber FROM  Company_information ORDER BY company DESC
SElECT company, OrderNumber FROM  Company_information ORDER BY company ASC,OrderNumber DESC 
```







 拉出user_accounts表中update_at所有数据
-- SELECT update_at FROM user_accounts;
-- 拉出user_accounts表  去处重复组成的数据组
-- SELECT DISTINCT password FROM user_accounts;
-- 拉出a表中update_at和create_at数据，和p表中mobile 数据，条件是ID相同的账号.
-- SELECT a.update_at,a.create_at,p.mobile FROM user_accounts a,user_profiles p WHERE p.id = a.id; 
-- update user_accounts set name = (select name from  where user1 .id = 1 )
-- where id = (user_profiles id from user2 where user2 .name='小苏');
 
-- INSERT INTO  () VALUES ('', , '13916221308', 'EEE',);

-- 向对应数据表demo1 响应的列里 插入数据
-- INSERT INTO demo1 (password, title ,mobile) VALUES ('3','' ,'3');
-- UPDATE `demo1` set title='标题sisisiis' WHERE id=14;



-- 更新user表中，name字段，name字段来自表user1里id为1的name里的字段，条件是id = 表user2里name为小eed
-- update user set name = (select name from user1 where user1 .id = 1)
-- where id = (select id from user2 where user2 .name='小eed');
-- INSERT INTO user1 (mobile, password,name) VALUES ('12343', '234343','小体')
-- INSERT INTO user2 (mobile,password,name) VALUES ('24dce4', 'wef3f','苏兄')
-- INSERT INTO user (id,mobile) VALUES ('4', '5')

-- INSERT INTO user (name ,mobile) SELECT u1.name, u1.mobile FROM user1 u1 where u1.id=2
-- DELETE from user where id in (2)

-- SELECT * FROM user WHERE mobile in ('4')
-- DELETE from user_accounts WHERE id in (27,28,29) and mobile in ('5');
-- SELECT * FROM user_accounts WHERE password in ('wewe') AND reset_password = 0;


-- INSERT INTO Company_information (company,discription,mobile,address) VALUE ('eed3eedneree3eewdwdf','信物流','138cefv','封疆大吏')
-- SELECT * FROM Company_information WHERE Company ='万沐达' and id = 1;
-- SELECT * FROM Company_information WHERE id>2;
-- SElECT company, OrderNumber FROM  Company_information ORDER BY company
-- SELECT password ,mobile FEOM user_porfiles WHERE NOT password = 'eeee12e23e23e' ORDER BY mobile; 
-- SELECT * FROM demo1 AS demo2,
-- SELECT t. create_at from (SELECT * FROM user_profiles) AS t;

 
 
 

