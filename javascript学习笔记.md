# 学习JavaScript语法

JavaScript 是属于网络轻量级·功能强大。的脚本语言

### 输出方式

JavaScript没有任何打印或者输出的函数。但有传输数据方式：

```shell 
document.write("<h1>this is a demo</h1>");              # 写入HTML，修改内容
doument.getElementById("demo").innerHTML="Hello world"  # 写入HTML元素.
window.alert()        # 弹出警告框   
console.log()         # 浏览器的debug工具输出日志
```

### 字面量

**数字(number):** 一个字面量是一个常量

```js
1    3.14  1323f5 
```

**字符串(string):** 单双引号都行。

```js
"hello"    'love' 
```

**表达式:**

```js
4+5    4*5
```

**数组（Array）**

```js
[20, 100, 29]
```

**对象**

```js
{
  name:"wJ",
  age:"39",
  job:23
}
```

**函数：**

```js
function  myFunction(a,b){return:a*b;}
```

### 变量

变量用 `var 声名 = 赋值`， 用来储存数据。(变量以字母开头，区分大小写）

```js
var a = 5 ;     // a是名称， 5是字面值。语句分号隔开。
var y = a * 8;
var length = 16;          // Number  通过数字字面量赋值 
var points = x * 10;      // Number 通过表达式字面量赋值
var lastName = "Johnson"; // String 通过字符串字面量赋值
var cars = ["Saab", "Volvo", "BMW"];              // Array  通过数组字面量赋值
var person = {firstName:"John", lastName:"Doe"};  // Object #通过对象字面量赋值
var lastname ="jim", age=30,job="carpenter";      // 一条语句多条变量    
var carname;       // 声名无值变量结果为undefined；
```

声明变量类型用new，例子：

```js
var carname=new String;   // 字符串
var x=      new Number;   // 数字
var y=      new Boolean;  // 布尔值  
var cars=   new Array;    // 数组
var person= new Object;   // 对象乎所有的事物都是对象。
```

变量的作用域，在函数内申明的属于局部变量，作用在函数内，函数执行完就结束，反正就属全局变量，作用全局，例子：

```js
var carName = "Volvo";
function myfunction(){        // 在函数外作用全局             
     var carName = "Volvo";   // 作用在函数内
     carName = "Volvo";       // 没用用var声明作用全局
}
```

expample:   

```js
function myFunction(){
  var y=5;
  var x=y+2;
  var demoP=document.getElementById("demo")
  demoP.innerHTML="x=" + x;
}
```

### 函数

引用函数（执行函数内语句）可重复调用。

```js
function myFunction(a,b){
    return a-b;    // 返回a乘b结果。    
}
```

javascript 分大小写

```js
函数 getElementById != getElementbyID
变量 myVariable != myvariable
```

### 数组 

数字的三种写法

```js
// 第一种
var cars=new Array(); // 数组下标是基于零的，所以第一个项目是 [0]，第二个是 [1]，
cars[0]="saab";
cars[1]="volvo";
cars[2]="BMW";
// 第二种
var cars=new Array("saab","volvo","BMw");
// 第三种
var cars=["saab","volvo","bmw"];
```

### 对象

```js
//对象的属性以名称和值对的形式 (name : value) 来定义。
var person={firstname:"Jim",lastname:"deo",id:33};
```










### 字符串

javascript 字符串储存和处理文本。

1. 可索引位置访问字符串，`var character = carname[7];`
1. 字符圈中符号不能与字符串符号相同或者用转意符合
    - `var answer = "It's alright";`
    - `var y = "He is called \"Johnny";`
1. 字符串长度计算
    - `var txt = "abcd";`
    - `var sln = txt.length;`


### 字符串属性

| 属性 | 描述 |
| ---- | ---- |
| constructor | 返回创建字符串属性的函数 |
| length | 返回字符串的长度 |
| prototype | 允许您向对象添加属性和方法 |

### 字符串方法

| 方法 | 描述 |
| ---- | ---- |
| charAt()   | 返回指定索引位置的字符  |
| charCodeAt()   | 返回指定索引位置字符的 Unicode 值  |
| concat()   | 连接两个或多个字符串，返回连接后的字符串  |
| fromCharCode()   | 将 Unicode 转换为字符串  |
| indexOf()   | 返回字符串中检索指定字符第一次出现的位置  |
| lastIndexOf()   | 返回字符串中检索指定字符最后一次出现的位置  |
| localeCompare()   | 用本地特定的顺序来比较两个字符串  |
| match()   | 找到一个或多个正则表达式的匹配  |
| replace()   | 替换与正则表达式匹配的子串  |
| search()   | 检索与正则表达式相匹配的值  |
| slice()   | 提取字符串的片断，并在新的字符串中返回被提取的部分  |
| split()   | 把字符串分割为子字符串数组  |
| substr()   | 从起始索引号提取字符串中指定数目的字符  |
| substring()   | 提取字符串中两个指定的索引号之间的字符  |
| toLocaleLowerCase()   | 根据主机的语言环境把字符串转换成小写  |
| toLocaleUpperCase()   | 根据主机的语言环境把字符串转换成小写   |
| toLowerCase()   | 把字符串转换为小写  |
| toString()   | 返回字符串对象值  |
| toUpperCase()   | 把字符串转换为大写  |
| trim()   | 移除字符串首尾空白  |
| valueOf()   | 返回某个字符串对象的原始值  |

### 运算符

运算符：（`+`）加法，（`-`）减法，（`*`）乘法，（`／`）除法， （`%`）取模“取”，（`++`）自增，（`--`）自减。  
难以记住的是：（++）和（--）。  

example:

`y=5;z=2;`  
自减：`x=--y;`与`x=y--`  结果：`x=4,y=4;`与`x=4,y=4;`  
自增：`x=++y;`与`x=y++`  结果：`x=6,y=6;`与`x=6,y=5;`  

个人理解运算符在前面的这个值会跟随递增／递减，在后面的话就不会跟随递减。

###  算术运算符


运算符：（+）加法，（-）减法，（*）乘法，（／）除法， （%）取模“取”，（++）自增，（--）自减。  
expample:  

`x+=y` 等同于`x = x+y`

### 运算符应用

```js
var text1 ="hallo"; 
var text2 = "world";
var text3 = text1+""+text2; // 字符串相加并加空值。
var z = "hello"+5;    // 得到值hello5， #字符串于数字；
```

### 比较运算
比较运算符在逻辑语句中使用，以测定变量或值是否相等

- `==` 和 `!==` 等于和不等于（值相等或不等）
- `===`、 `!===` 绝对等于和不等于（值和类型相等或不等）
- `>`, `<`, `>=` ,`<=` 与数学运算一样。

条件运算example：

```js
if (age<18) x="Too young";
```

### 逻辑运算符 

```js
&&   // and
||   // or
!    // not
```

Example:

```js
(x==5 || y==5) 为 false
```

### 条件运算

JavaScript 还包含了基于某些条件对变量进行赋值的条件运算符

语法:

```js
variablename=(condition)?valuel:value2
```

Example:

```js
voteable=(age<18)?"年龄太小":"年龄已达到";
```

### If...Else 语句

条件语句用于基于不同的条件来执行不同的动作。

1. `if`:(只有当指定条件为 true 时，使用该语句来执行代码)

```js
if (time<20){x="Good Boy"}
```

2. `if...else`: 条件为true或else时执行不同代码

example:

```
if (time>20){
    x="Good Boy"
}else{
    Y="Good girl"
}
```


3. `if...else if....else`:多个条件判断其中一条来执行

example:

```js
if(time<10){
  document.write("<b>早上好</b>");
}else if (time>=10 && time<16){
  document.write("<b>今天好</b>");
}else{
  document.write("<b>晚上好!</b>");
}
```


4. `switch`: 选择多个代码块依次判断之一来执行，设置表达式 n（通常是一个变量）。随后依次与每个 case 的值做比较。存在匹配就执行与其相关代码，否则依次判断下去

```js
var d=new Date().getDay(); 
switch (d) { 
  case 0:
    x="今天是星期日"; break; 
  case 1:
    x="今天是星期一"; break; 
  case 2:
    x="今天是星期二"; break; 
  case 3:
    x="今天是星期三"; break; 
  case 4:
    x="今天是星期四"; break; 
  case 5:
    x="今天是星期五"; break; 
  case 6:
    x="今天是星期六"; break; 
}
```

### default关键字

default匹配不存在做的事情。

```js
var x; 
var d=new Date().getDay();
switch(d){
  case 6: x="周六";break;
  case 0: x="周末";break;   //中断
  default; x="期待周末";
}
document.getElementById("demo").innerHTML=x;
```

### 循环

循环可以将代码块执行指定的次数。

example:

```js
cars=["BMW","Volvo","Saab","Ford"];
for (var i=0;i<cars.length;i++){
    document.write(cars[i] + "<br>");
}

cars=["BMW","Volvo","Saab","Ford"];
for (var i=0,l=cars.length; i<l; i++){
    document.write(cars[i] + "<br>");
}

// 排除前面  后面循环
cars=["BMW","Volvo","Saab","Ford"];
var i=2,len=cars.length;
for (; i<len; i++){
    document.write(cars[i] + "<br>");
}

// 
cars=["BMW","Volvo","Saab","Ford"];
var i=0,len=cars.length;
for (; i<len; ){
    document.write(cars[i] + "<br>");
    i++;
}
```

### for/in循环

JavaScript for/in 语句循环读取所有属性：

```js
function myFunction(){
    var x;
    var txt="";
    var person={fname:"Bill",lname:"Gates",age:56}; 
    for (x in person){
        txt=txt + person[x];
    }
    document.getElementById("demo").innerHTML=txt;
}
```

### while循环

while 循环会在指定条件为真时循环执行代码块

```js
function myFunction(){
    var x="",i=0;
    while (i<5){
        x=x + "该数字为 " + i + "<br>";
        i++;
    }
    document.getElementById("demo").innerHTML=x;
}
```

### do/while循环：

do/while循环在条件还没判断之前读取一次代码。

```js
function myFunction(){
    var x="",i=0;
    do {x = x + "该数字" +i;
        i++;
    }
    while(i<5)
}
```

### break：跳出循环

符合break负载的条件，循环就会跳出；

```js
function myFunction(){
    var x = "",i=0:
    for(i=0;i<10;i++){
        if (i==3){
            break;
        }                            //if 语句就一句所以打括号可以不用。
        x=x+"数字为" + i + "<br>";
    }
    console.log("------>",x);   //打印x
};
myFunction();     //执行fanction
```

### Continue 语句:

continue 语句中断循环中的迭代， 跳过指定条件执行后面的跌代。

```js
function myFunction(){
    var x ="",i=0;
    for (i=0;i<10;i++){
        if (i==3){
            continue;
        }
        x=x + "数字" + i +"<br>"; 
    }
}
```

### typeof 操作符：

typeof 操作符来检测变量的数据类型。

```js
typeof "John"                 //返回  string
typeof "3.14"                 //返回  number    
typeof "false"                //返回  boolean  
typeof [1,2,3]                //返回  object
typeof {name:'john', age:34}  //返回  object

```

### Null

null 表示 "什么都没有"是个空值

```js
var person;                    //值为空
person = unfined;              //通过unfined清空   
typeof undefined               // undefined
typeof null                    // object
null === undefined             // false
null == undefined              // true

```

### js数据类型（以及查看类型类型）

Number() 转换为数字， String() 转换为字符串， Boolean() 转化为布尔值。

```
| 转换符|数据 | 返回结果 |
| ---- | ---- |
|typeof |John     | string|
|       |3.14     |number|
|       |NaN     |boolean|
|       |False     |object|
|       |[1,2,3]     |object|
|       |{name:'Jone', age:34;}|object|
|       |function(){}  |object|
|       |myCar    |nuderfined| //(没有申明)
|       |null     |object|
|        |   |function|
```

### constructor 属性

constructor 属性返回所有 JavaScript 变量的构造函数。
  写法 "John".constructor
```js
| 转换符|数据 | 返回结果 |
| ---- | ---- |
|constructor|"John"     | String(){ [native code] }|
|           |(3.14)     |Number()  { [native code] }|
|            |false     |Boolean() { [native code] }|
|            |[1,2,3]   | Array()   { [native code] }|
|            |{name:'Jone', age:34;}|Object(){ [native code] }|
|            |function(){}  |Function(){ [native code] }|
|            |new Date()   |Date(){ [native code] }
```

#### 例子：1

```js
var myDate = new Date();
document.getElementById("demo").innerHTML = isDate(myDate);
function isDate(myDate) {
    return myDate.constructor.toString().indexOf("Date") > -1;
}
// indexOF(); 返回字符串到首次出现的地方并返回字母所在的位置。
// isDate();  判断函数是否是时间
// constructor  返回变量的函数构造
// toString();  可把一个逻辑值转换为字符串,并返回结果
// 结果为true
```

#### 例子：2

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = isArray(fruits);
function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
}

//isArray()  判断函数是否是数组
```

### to string()

   将数字，字母，变量布尔值，表达式：，日期 等 转换为字符串：
   Number方法有类似效果

```js
x.toString()      = string(x)           //变量转换为字符圈 x 并返回
(123).toString()  = string(123)         //数字转换为字符串 123  并反回
(100 + 23).toString() = string(100+23)  //数字表达式转换为字符串
false toString() = String(false)        //返回false
ture toString() = String(true)          //返回 "ture" 
Date().toString() = string(Date)        //返回"Thu Mar 23 2017 22:01:49 GMT+0800 (CST)"
```

#### 更多讲数字转换为字符串

```js
|方法|描述|
| -------- | ----------- |
|toExponential()|把对象的值转换为指数计数法。|  //没有明白
|toFixed()|把数字转换为字符串，结果的小数点后有指定位数的数字|
|toPrecision()|把数字格式化为指定的长度|
```

### Date方法 将日期转换为字符串的函数：

``` js
|方法|描述|
| ----------- | ------------ |
|getDate()|从 Date 对象返回一个月中的某一天 (1 ~ 31)|
|getDay()|从 Date 对象返回一周中的某一天 (0 ~ 6)|
|getFullYear()| Date 对象以四位数字返回年份|
|getHours()| 返回 Date 对象的小时 (0 ~ 23)。|
|getMilliseconds()|返回 Date 对象的小时 (0 ~ 23)|
|getMinutes()|返回 Date 对象的分钟 (0 ~ 59)。|
|getMonth()|从 Date 对象返回月份 (0 ~ 11)。|
|getSeconds()|返回 Date 对象的秒数 (0 ~ 59)。|
|getDTime()|返回 1970 年 1 月 1 日至今的毫秒数。|
```

### Number方法：
将自符串转换为数字,其他的字符串会转换为 NaN (不是个数字)
```js
|方法|描述|
|Number("3.14")|3.14|
|Number(" ")|0|
|Number("")|0|
|Number("11 12")|NaN|
```

#### 其它转换数字的方法

```js

|方法|描述|
|parseFloat()|解析一个字符串，并返回一个浮点数|
|parselnt()|解析一个字符串，并返回一个整数。|
```

### 正则表达式

正则表达式由一个字符系列形成的搜索模式，它可以是个字符也可以是复杂的模式
可以用搜索模式来描述要查询内容，可用于所有文本搜索和替换操作。
   类似于路径。邮箱可用于正表达式来规定用户输入。

#### 修饰符

```js
 例如：/microsoft/i

i     //匹配大小写不敏感
g    //全局匹配  找到所有匹配的。
m    //执行多个匹配
```

#### 正则表达式查找范围
[]查找某范围字符
```js
|表达式|描述|
|--------|---------|
|[abc]|查找[]之间任何数字|
|[0-9]|查找任何0-9的数字|
|(x/y)|查找以|分割对象|
```

#### 元字符

```js
|元字符|描述|
|-----|------|
|\d|查找数字|
|\s|查找空白字符|
|\b|匹配单词边界|
|\uxxxx|查找16进制XXXX规定的Unicode|
//后面三个不懂
```

#### 量词

```
|量词|描述|
|-----|------|
|n+|匹配至少一个n字符串|
|n*|匹配0个或多个n字符串|
|n?|匹配匹配0个或一个n的字符串|
```

#### search()方法使用字符串

```js
function myFunction(){
  var str = "visit Runoob!";
  var n = str.serach("Runoob");
  document.getElementById("demo".innerHTML = n)
}
// 返回结果为6   str变量里的字符串从0开始，到第六位出现。
```

#### replace()方法使用正则表达式和字符串。

```js
//HTML部分省略
//<p id="demo">Microsoft!</p>

function myFunction(){
  var str = document.getElementById("demo")
  var txt = str.replace(/microsoft/i,"Runoob");  
                         //表达式主体 i 为后缀修饰起不分大小写 
document.getElementById("demo").innerHTML = txt;
}

//例子2替换

function myfunction(){
  var str = document.getElementById("demo").innerHTML;
  var txt = str.replace("Microsoft","runoob");
  docunemt.getElementById("demo").innerHTML = txt;
}

```

#### test()

test()是正则表达式的方法
用来检测一个字符串是否匹配某种模式，如果字符串中含有匹配的文本，则返回true否则返回eles。

```js
/e/.test("The best things in life are free!") //搜索字符串中的e 返回为ture
```

#### exec()

exec()用来检索字符串中正则表达式的匹配，函数返回一个数组，用来存放匹配结果，如果不匹配
则返回null

```js
/e/.exec("The best things in life are free!");  //返回字符串e。
```

#### RegExp对象

RegExp 对象是一个预定义了属性和方法的正则表达式对象

```js
var patt1=new RegExp("e");   =  var patt1= /e/;
```

### js错误 — throw，try,catch
try语句测试代码块错误
catch 语句处理错误
throw语句创建自定义错误

#### try和catch
try语句允许我们定义在执行错误测试的代码块。
catch语句允许我们定义当try代码块发生错误时，所执行的代码块。
catch 和try同时出现

```js
function message()
{
  try{
    addalert("Welcome guest!");
  }catch(err){
    txt="本页一个错。\n\n;"
    txt="错误描述：+err.message + "\n\n";
    txt+="点击确定继续。\n\n";
    alert(txt);
  }
}
```

#### Throw语句

throw语句允许我们创建自定义错误。
术语：创建抛出异常（excepition）。
throw与try和catch一起使用，能够控制程序流，并生成自定义错误。

```js
function myFunction(){
  try
  {
    var x=document.getElementById("demo").value;
    if(x=="") throw "值为空";
    if(isNaN(x)) throw "不是数字";
    if(x>10) throw "太大";
    if(x<5) throw "太小";
  }
  catch(err)
  {
    var y=document.getElementById("mess");
    y.innerHTML="错误:" +err +"。";
  }
}
```

### 调试工具

对代码`错误`,`逻辑错误`，用console.log()方法进行打日志。

```js
function(c){
  a=5;
  b=6;
  c=a+b;
  console.log(c);
}

```

### 设置断点
debugger关键字
对代码进行调试时可以对后面的代码进行打断，让代码不会往下运行。
如果没有开启调试工具则断点不起作用。

```js
//<p id="demo"></p>
var x = 100 * 4;
debugeer;
document.getElementById("demo").innerHTML = x;
```

### 变量提升

函数及变量的声明都将被提升到函数的最顶部。
变量可以在使用后声明，也就是变量可以先使用再声明。

```js
x = 5; // 变量 x 设置为 5
elem = document.getElementById("demo"); // 查找元素 
elem.innerHTML = x;                     // 在元素中显示 x
var x; // 声明 x

//得出结果为 5；
//变量必须在先  声明可以在前在后都一样
```

变量初始化的话就不会被提升  var x = 4; （初始化x）

```js
var x = 5; // 初始化 x
var y;     // 声明 y
elem = document.getElementById("demo"); // 查找元素
elem.innerHTML = x + " " + y;           // 显示 x 和 y
y = 7;    // 设置 y 为 7
```

#### 严格模式（use strict）

（strict mode）严谨模式下运行。

+ use strict  不是一条语句，但是是一个字面量表达式，严格模式下不能使用没申明的变量
+ js旧版本里备被忽略。
+ 支持的浏览器有 IE10+，chrome13+，Safari5.1+,Opera12+
+ js语法有漏洞，不合理，不严谨，得到怪异的结果，从而降低了编辑器效率。
+ 用于测试时，测试代码的严谨性。

```js
"use strict";
x = 3.14;       // 报错 (x 未定义)
```

#### js使用误区

> 赋值运算符应用错误

在 JavaScript 程序中如果你在 if 条件语句中使用赋值运算符的等号 (=) 将会产生一个错误结果, 正确的方法是使用比较运算符的两个等号 (==)。

if 条件语句返回 false (是我们预期的)因为 x 不等于 10:

#### 比较运算符常见出现的错误

#### js 表单


> html表单输入的数据可以通过js来验证，验证其正确性，确保数据有效。
+ 验证表单数据是否为空？
+ 验证输入是否是一个正确的email地址？
+ 验证日期是否输入正确？
+ 验证表单输入内容是否为数字型？

下面的例子对html部分省略掉。

##### js表单验证

```js
// 判断表单字段（fname）值是否存在，如果存的就弹消息，如不存在就阻止提交
funciton validateFrom(){
  var x = document.froms["myFrom"]["fname"].value;
  if (x == null || x ==""){
    alert("请输入名称");
    return false;
  }
}
//如下 函数在from表单提交时被调用。
```

`调用上面函数的方法`

```html
<form name="myForm" action="demo-form.php" onsubmit="return validateForm()" method="post">
姓: <input type="text" name="fname">
<input type="submit" value="提交">
</form>

```

##### E-mail 验证

>检查输入数据是否符合电子邮件地址的语法
数据必须包含@和（.）符号 并且@不能在首位，@后面必须有一个(.)字符。
例如：`379925517@qq.com`

```js
function validateFrom(){
  var x = document.froms["myFrom"]["email"].value;
  var atpos = x.indexOf("@");
  var dotpos=x.lastIndexof(".");
  if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
        return message(code:1; "邮箱格式错误")
  }
}
```

```html
<form name="myForm" action="demo-form.php" onsubmit="return validateForm();" method="post">
    Email: <input type="text" name="email">
    <input type="submit" value="提交">
</form>
```

```js
 // 对输入的数字进行判断。
function myFunction() {
    var x, text;

    // 获取 id="numb" 的值
    x = document.getElementById("numb").value;

    // 如果输入的值 x 不是数字或者小于 1 或者大于 10，则提示错误 Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
        text = "输入错误";
    } else {
        text = "输入正确";
    }
    document.getElementById("demo").innerHTML = text;
}
```


``` html
// HTML表单验证通过自行
 <form action="demo_form.php" method="post">
  <input type="text" name="fname" required>
  <input type="submit" value="提交">
</form>
```

##### 数据验证

> 为确保用户输入的数据有效。
 
 数据验证有：
+ 必要字段是否输入？
+ 数据是否合法？
+ 是数据字段是否输入了文本？

数据验证为确保用户输入正确数据。可以通过不同方法定义和不同方式调用。
`服务端验证`:数据提交到服务器上做验证。
`客户端验证`: `（·side validation）`数据在发送服务端之前，在浏览器上验证。

#### 验证API
##### HTML 约束验证
（后面补充）



#### JSON

 - JSON是一种轻量级数据转换格式
 - 用于储存和传输数据的格式。
 - 用于服务端向网页传送数据。
 - JSON的格式是文本，可被任何编程语言读取并作为数据传递。

##### JSON 格式化为js的对象

JSON语法跟 创建js对象代码相同。
所以js程序很容易将JSON数据转化为js的对象。
使用 JavaScript 内置函数 JSON.parse() 将字符串转换为 JavaScript 对象:

```json      
    //json数组   
var text = '{ "sites" : [' +
  '{ "name":"Runoob" , "url":"www.runoob.com" },' +
  '{ "name":"Google" , "url":"www.google.com" },' +
  '{ "name":"Taobao" , "url":"www.taobao.com" } ]}';
  
obj = JSON.parse(text);  //将json格式的字符串转化为js对象
document.getElementById("demo").innerHTML = obj.sites[1].name + " " + obj.sites[1].url;
```

##### JSON语法规则

>例子引用上面的那个例子

+ 数据为 键/值 对。
+ 数据由逗号分隔。
+ 大括号保存对象
+ 方括号保存数组

##### 相关函数

|函数|描述|
|-------|-------|
|JSON.parse()|JSON字符串转化为js|
|JSON.string()|js转化为json字符串|

#### js:void(0)含义

> void()操作符操指定要计算一个表达式但是不返回值。

```js
void func()
javascript:void func()

或者

void(func())
javascript:void(func())
```

### js代码规范

>代码规范增强代码可读性

+ `变量名`推荐使用驼峰式   `firstName = "john`;
+ `空格`与`运算符`（= + - * ／）前后加空格  `var x = y + z`
+ `代码缩进`  （如今软件都智能化了就不用解释了）
+ 语句规则  一条代码通常以`;`



#### 函数定义

+ 使用关键字function定义函数。
+ 函数通过声明定义，也可以是一个表达式。
+ 函数声明后需要调用才能够执行。
+ 
```js
function myFunction(a,b){
    return a*b;   
}
myFunction(2,5);
 //结果为10
```

函数可以储存在变量里，之后变量可做函数调用，通常不为匿名函数，通过变量调用
```js
var x = function(a,b){return a * b};
var z = x(3, 4);
z  //执行z函数
```

#### 构造函数

构造函数作用：要得到一个类的实例时，往往是要运行其构造函数的

　　构造函数创建的三个基本要求：函数名首字母大写；构造函数内部使用this关键字来指向即将生成的对象实例；使用new关键字来调用构造函数并返回对象实例。






初始化一个函数，构造方法，在类被初始化的时候自动加载，无需写代码调用。
函数如果用于创建新的对象，称之为对象的构造函数。
我们声明一个类后，为这个类声明一个方法，这个方法名和类名是一样的
```js
var myFunction = new Function("a", "b", "return a * b");

var x = myFunction(4, 3);
//结果等同于
var myFunction = function (a, b) {return a * b}

var x = myFunction(4, 3);

```

函数可以作为一个值来使用，或者一个表达式。

```js
function myFunction(a, b){
  return a * b;
}
var x = myFunction(4,5);
// 函数作为一个表达式使用

function myFunction(a, b) {
    return a * b;
}

var x = myFunction(4, 3) * 2;

```

#### 函数是对象

js函数有属性和方法，所以它还是一个对象，

```js
  //arguments.length属性返回函数调用是接受函数的个数。

function myFunction(a, b) {
    return arguments.length;
}
Function(3,4);
// 返回结果是2，
```

```js
// 将函数转换为字符串并返回。

unction myFunction(a, b) {
    return a * b;
}

var txt = myFunction.toString();

```

#### 函数传参数

+ 函数对参数值没有进行检查
+ 函数传参分为显式参数(`arameters`)和隐式传参(Arguments).
+ 前者在函数定义时就列出，后者是函数调用时直接给真正的值。
+ 显示传餐函数在定义时没有指定数据类型，隐式参数也没有对类型进行检测。
+ 隐式参数在调用时没有提供参数，则默认参数为nudefined
+ 
```js
function myFunction(x, y) {
    y = y || 0;
    return x * y;
}
myFunction(4);
//y值为nudefine 所以Y就为0.
```

#### Arguments 对象

当调用时设置参数过多，则无法找到相对应的参数名就无法引用了，只能使用 arguments 对象来调用。

```js
x = findMax(1, 123, 500, 115, 44, 88);
 
function findMax() {
    var i, max = arguments[0];//声明一个i 变量和max为数组里第一个
    //判断如参数个数为一个  则返回这个值为最大
    if(arguments.length < 2) return max;
     //用循环依次拉出所有对象
    for (i = 0; i < arguments.length; i++) {
      // 依次和第一个数进行比较，如果这个值大于第一个值，则赋值Max继续比较
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
500
```

```js
x = sumAll(1, 123, 500, 115, 44, 88);
 
function sumAll() {
    var i, sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
```
#### 通过值传递参数

+ 在函数中调用的参数是函数的隐式参数。
+ JavaScript 隐式参数通过值来传递：函数仅仅只是获取值。
+ 如果函数修改参数的值，不会修改显式参数的初始值（在函数外定义）。
+ 隐式参数的改变在函数外是不可见的。

#### 通过对象传递参数

+ 在JavaScript中，可以引用对象的值。
+ 因此我们在函数内部修改对象的属性就会修改其初始的值。
+ 修改对象属性可作用于函数外部（全局变量）。
+ 修改对象属性在函数外是可见的。


#### 函数调用

函数的四种调用方式不同  在于`this` 的初始化。

##### this关键字

this指向函数执行时的当前对象

#### 调用函数

> 函数中的代码在函数被调用后执行。

下面例子函数不属于任何对象，默认为全局对象。
在HTML中全局对象就是页面，全局对象就是（window）
调用时可以写成`window.myFunction()`
`这种调用是常用方法，但是作用是全局容易产生冲突。`

```js
function myFunction(a, b) {
    return a * b;
}
myFunction(10, 2);           // myFunction(10, 2) 返回 20
```

#### 作为函数方法调用函数

call() 和 apply() 是预定义的函数方法。 两个方法可用于调用函数，两个方法的第一个参数必须是对象本身。
`call`方法: 
语法：`call(thisObj，Object)`
定义：调用一个对象的一个方法，以另一个对象替换当前对象。
个人理解：a.call(b,arg1,arg2..)就是a对象的方法应用到b对象上。
说明：
call 方法可以用来代替另一个对象调用一个方法。call 方法可将一个函数的对象上下文从初始的上下文改变为由 thisObj 指定的新对象。 
如果没有提供 thisObj 参数，那么 Global 对象被用作 thisObj。 

apply方法： 
语法：apply(thisObj，[argArray])
定义：应用某一对象的一个方法，用另一个对象替换当前对象。 
说明： 
如果 argArray 不是一个有效的数组或者不是 arguments 对象，那么将导致一个 TypeError。 
如果没有提供 argArray 和 thisObj 任何一个参数，那么 Global 对象将被用作 thisObj， 并且无法被传递任何参数。

```js
function myFunction(a, b) {
    return a * b;
}   //将myFunction的方法应用到myObject上
myObject = myFunction.call(myObject, 10, 2);     // 返回 20

function myFunction(a, b) {
    return a * b;
}
myArray = [10, 2];
myObject = myFunction.apply(myObject, myArray);  // 返回 20
```

#### 闭包
 
##### 变量 

js变量可以是全局变量或局部变量。
`全局变量`：作用全局，在web上属于window，可作用全局所有脚本.
`局部变量`：作用所属函数内部，其它不影响。
变量如果不声明，则它就是全局变量。

###### 变量生命周期

    后面再补充
全局变量的作用域是全局性的，即在整个JavaScript程序中，全局变量处处都在。
而在函数内部声明的变量，只在函数内部起作用。这些变量是局部变量，作用域是局部性的；函数的参数也是局部性的，只在函数内部起作用。

##### 计数器困境

设想下如果你想统计一些数值，且该计数器在所有函数中都是可用的。
你可以使用全局变量，函数设置计数器递增：
```js
var counter = 0;   //页面上的任何脚本都能改变计数器，即便没有调用 add() 函数

function add() {
  //var counter = 0; 如果将上面的声明移到函数内部，
  //会是函数每次被调用计算器每次重置为1.

   return counter += 1;
}

add();
add();
add();

// 计数器现在为 3
```

#### 内嵌函数

+ 所有函数都能访问全局变量。  
+ js所有函数都能访问它们上一层的作用域。
Js支持嵌套函数。嵌套函数可以访问上一层的函数变量。
该实例中，内嵌函数 plus() 可以访问父函数的 counter 变量：

```js
function add() {
    var counter = 0;
    function plus() {counter += 1;}
    plus();    
    return counter; 
}
```

#### 闭包

闭包就是能够读取其他函数内部变量的函数。
闭包就是将函数内部和函数外部连接起来的一座桥梁。
闭包的用途:一个是前面提到的可以读取函数内部的变量，
另一个就是让这些变量的值始终保持在内存中。

```js
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

add();
add();
add();

// 计数器为 3
```

#### this关键字
函数运行时，自动生成的一个内部对象，只能在函数内部使用。
this关键字虽然会根据环境变化，但是它始终代表的是调用当前函数的那个对象。 

##### 方法调用模式

 当函数被保存为一个对象的属性时，它就可称为这个对象的方法。当一个方法被调用时，this被绑定到这个对象上。如果调用表达式包含一个提取属性的动作（. 或 []），那么它被称为方法调用。例如：

```js
var name = "window";
var obj = {
    name: "kxy",
    sayName: function() {
        console.log(this.name);
    }
};
obj.sayName();  //kxy
```


##### 函数模式调用

当一个函数并非一个对象的属性时，那么它就是被当做函数来调用的。在此种模式下，this被绑定为全局对象，在浏览器环境下就是window对象。例如：
```js
var name = "window";
function sayName() {
    console.log(this.name);
}
sayName();

// undifine
```

##### 构造函数模式

 如果在一个函数前面加上new关键字来调用，那么就会创建一个连接到该函数的prototype成员的新对象，同时，this会被绑定到这个新对象上。这种情况下，这个函数就可以成为此对象的构造函数。例如：

```js
function Obj() {
    this.name = "kxy";
}
var person = new Obj();
console.log(person.name);   //kxy
```

##### apply调用模式

 在JS中，函数也是对象，所有函数对象都有两个方法：apply和call，这两个方法可以让我们构建一个参数数组传递给调用函数，也允许我们改变this的值。例如：

```js
var name = "window";
var person = {
    name: "kxy"
};
function sayName() {
    console.log(this.name);
}
sayName();    //window
sayName.apply(person);   //kxy
sayName.apply();    //window
```


一个函数并非一个对象的属性时，那么它就是被当做函数来调用的。在此种模式下，this被绑定为全局对象，在浏览器环境下就是window对象。例如：



```js 
var name = "window";
var obj = {
    name: "kxy",
    sayName: function() {
        console.log(this.name);
    }
};
obj.sayName();  //kxy   sayName函数作为对象obj的方法调用，所以函数体中的this就代表obj对象。
```



 
#### 对象

+ 我对js面向对象编程的理解是，将需要调用或者修改的数据，封装成一个对象，会减少调用时候的一些不必要的麻烦，大概
+ js里所有的事物都是对象：字符串、数值、数组、函数，日期，正则表达式.....
+ 对象是一个特殊的数据，它拥有属性和方法，是特殊的数据类型。
 
 访问对象属性的语法： `objectName.propertyName`

```js
   // 使用了 String 对象的 length 属性来获得字符串的长度;
var message = "hello World!";
var x = message.length; 
```


访问对象的方法的语法： `objectName.methodName()`

```js 
  // 使用string上的toUpcase()方法来转换文本大小写。
var message = "Hello World!";
var x = message.toUpperCase()
```

#### 创建对象

js能够定义并创建自己的对象

创建对象方法有两种：
1. 定义并创建实例

```js
 创建一个新的实例并向其添加2个属性。
person new Object();
person.Firstname="john";
person.lastname="Doe";
```

替代语法（使用对象 literals）：

```js
person={firstname:"John",lastname:"Doe",age:50,eyecolor:"blue"};

```

2. 使用对象构造器
 使用函数来构造对象：

```js
function person(firstname,lastname,age,eyecolor)
{
this.firstname=firstname;
this.lastname=lastname;
this.age=age;
this.eyecolor=eyecolor;
}
//this指向正在执行的函数本身，或指向所属对象。
```

有了对象构造器可以创建新的实例

```js
var myFather=new person("John","doe","50","blue")
```

把属性添加到js对象，可以通过对象赋值来添加新的属性。

```js
person.firstname="John";
person.lastname="Doe";
person.age=30;
person.eyecolor="blue";

x=person.firstname;
```

#### 把方法添加到对象

方法就是附加在对象上面的函数
构造函数内部定义对象的方法：

```js
function person(firstname,lastname,age,eyecolor)
{
  this.firstname=firstname;
  this.lastname=lastname;
  this.age=age;
  this.eyecolor=eyecolor;

  this.changeName=changeName;
  function changeName(name)
  {
    this.lastname=name;
  }
} //changeName() 函数 name 的值赋给 person 的 lastname 属性
```

#### 类

JavaScript 是面向对象的语言，但 JavaScript 不使用类。
在 JavaScript 中，不会创建类，也不会通过类来创建对象（就像在其他面向对象的语言中那样）。
JavaScript 基于 prototype，而不是基于类的。

#### for in 循环

for...in 循环中的代码块将针对每个属性执行一次。

```js
function myFunction(){
  var x;
  var txt="";
  var person={fname:"Bill",lname:"Gates",age:56}; 
  for (x in person){
    txt=txt + person[x];
  }
  document.getElementById("demo").innerHTML=txt;
}
```

#### number 对象
js只有一种数字类型。
所有的数字都是浮点型类型。
可用小数点或不用小数点书写。
极大或者极小可用科学计数法书写。
整数最多15位。

```js
var pi = 123e5;   // 1230000
var z = 123e-5;   // 0.00123
```


要得到一个类的实例时，往往是要运行其构造函数的

