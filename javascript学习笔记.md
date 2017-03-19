#学习JavaScript语法

#JavaScript 是属于网络轻量级·功能强大。的脚本语言

#### javascript输出方式：   
   JavaScript 没有任何打印或者输出的函数。但有传输数据方式：

```shell 
  document.write("<h1>this is a demo</h1>");              # 写入HTML，修改内容
  doument.getElementById("demo").innerHTML="Hello world"  # 写入HTML元素.
  window.alert()                                          # 弹出警告框   
  console.log()                                           #写入浏览器                                                 
```

#####JavaScript 字面量
```shell
                 #(一个字面量是一个常量)
1. (number)数字:
                  1    3.14  1323f5 
2. (string)字符串:  (单双引号都行。)
                "hello"    'love' 
3. 表达式:
                 4+5    4*5
4. （Array）数组:
                 [20, 100, 29]
5.  对象
    {name:       "wJ" age:"39" job:;}
6.函数：
    function  myFunction(a,b){return:a*b;}               
```

#### javascript 变量
    变量用 var 声名 =  赋值， 用来储存数据。(变量以字母开头，区分大小写）
```shell
     var a = 5 ;    a是名称， 5是字面值。语句分号隔开。
     var y = a * 8;
     var length = 16;                                  // Number 
     #通过数字字面量赋值 
     var points = x * 10;                              // Number #通过表达式字面量赋值
     var lastName = "Johnson";                         // String 
     #通过字符串字面量赋值
     var cars = ["Saab", "Volvo", "BMW"];              // Array  
     #通过数组字面量赋值
     var person = {firstName:"John", lastName:"Doe"};  // Object #通过对象字面量赋值
    var lastname ="jim", age=30,job="carpenter";  #一条语句多条变量    
    var carname;       #声名无值变量结果为undefined；

     声明变量类型用new：
expample:
    var carname=new String;   # 字符串
    var x=      new Number;   # 数字
    var y=      new Boolean;  # 布尔值  
    var cars=   new Array;    # 数组
    var person= new Object;   # 对象乎所有的事物都是对象。
- - - 
    变量的作用域：
     # 在函数内申明的属于局部变量，作用在函数内，函数执行完就结束，反正就属全局变量，作用全局 
 expample:
>  
>  var carName = "Volvo";
>       function myfunction(){        # 在函数外作用全局  
>           var carName = "Volvo";    # 作用在函数内
>           carName = "Volvo";        # 没用用var声明作用全局
>           
>             
>        }


expample:   
function myFunction(){
    var y=5;
    var x=y+2;
    var demoP=document.getElementById("demo")
    demoP.innerHTML="x=" + x;
}
``


```

#### Javascript 函数

```shell
   #引用函数（执行函数内语句）可重复调用。
    function myFunction(a,b){
        return a-b;        
    }                  # 返回a乘b结果。

```

#### javascript 分大小写
```shell
    函数 getElementById != getElementbyID
    变量 myVariable != myvariable
```

#### 数组 
数字的三种写法
```shell
 #第一种
var cars=new Array(); # 数组下标是基于零的，所以第一个项目是 [0]，第二个是 [1]，
cars[0]="saab";
cars[1]="volvo";
cars[2]="BMW";
#第二种
var cars=new Array("saab","volvo","BMw");
#第三种
var cars=["saab","volvo","bmw"];
```

#### 对象
```shell
  #对象的属性以名称和值对的形式 (name : value) 来定义。
  var person={firstname:"Jim",lastname:"deo",id:33};
```



#### javascript 语句标识符
    （标识符不能和变量同名）后面细研究
```shell
   
       语句          描述
    break          # 用于跳出循环。
    catch          # 语句块，在 try 语句块执行出错时执行 catch 语句块。
    continue       # 跳过循环中的一个迭代。
    do ... while   # 执行一个语句块，在条件语句为 true 时继续执行该语句块。
    for            # 在条件语句为 true 时，可以将代码块执行指定的次数。
    for ... in     # 用于遍历数组或者对象的属性（对数组或者对象的属性进行循环操作）。
    function       # 定义一个函数
    if ... else    # 用于基于不同的条件来执行不同的动作。
    return         # 退出函数
    switch         # 用于基于不同的条件来执行不同的动作。
    throw          # 抛出（生成）错误 。
    try            # 实现错误处理，与 catch 一同使用。



   





























































赋值，算术和位运算符  =  +  -  *  /   在 JS 运算符中描述
条件，比较及逻辑运算符 ==  != <  >     在 JS 比较运算符中描述





   对点击事件作出反应。
   <button type="button" onlick="alert('welcome to china')"></button> ;

   向HTML中写入javascript方法。
```shell
  <script type="text/javascript"> alert("ssss") </script>    //写在body/head 中,H5有script标签  不用加type。
   <script src="../index/index.js"></script>                     //外部引用   
  
```
    














3.javascript:改变HTML内容，图像
   `
    <!DOCTYPE html>
    <html>
    <head>
        <title></title>
    </head>
    <body>
        <p id="demo">改变内容</p>
        <script>
            function myFunction(){
                x=document.getElementById("demo");  //找到节点
                x.innerHTML="Hello  World!";   //写入内容
            }
           
        </script>
        <button type="button" onlick="myFuntion()"></button>
         <!--改变图片    -->
        <script>
            function changeImage(){
                element=document.getElementById('myimage')
                if (element.)
            }
        </script>    



    </body>
    </html>
    ` 
 4.   