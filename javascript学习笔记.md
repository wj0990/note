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

**(number)数字: 一个字面量是一个常量**

```js
1    3.14  1323f5 
```

**(string)字符串:  (单双引号都行。)**

```js
"hello"    'love' 
```

**表达式:**

```js
4+5    4*5
```

**（Array）数组:**

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

1.可索引位置访问字符串

`var character = carname[7];`

2. 字符圈中符号不能与字符串符号相同或者用转意符合

`var answer = "It's alright";`
`var y = "He is called \"Johnny";`

3. 字符串长度计算

`var txt = "abcd";`
`var sln = txt.length;`


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