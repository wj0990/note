es6使用笔记
---

## 目录

- [let和const命令](# let和const命令)
- [数组扩展](# 数组扩展)
  -[Array.from()](## Array.from)
- [函数扩展](# 函数扩展 )


# let和const命令
>ES6 新增了let命令，用来声明变量。

与Var的区别：所声明的变量，只在let命令所在的代码块内有效。

```js
{
  let a = 10;
  var b = 1;
}

a // ReferenceError: a is not defined.
b // 1
```

计数器for循环i在循环体里，循环体外就不能访问
for `循环体内`作用域为子级作用域，`循环体外部`

```js
  //循环体外部不能访问里面的变量,访问会报错（循环体的作用域在代码块里面）
for (let i = 0; i < 10; i++) {
  // ...
}

console.log(i);
// ReferenceError: i is not defined

//i是var声明的，在全局都有效，并且全局就一个变量，每一次循环i都会变，结果并且赋值到a内部并且指向同一个ℹ️，所以得到是10
var a =[];
for(var i = 0; i<10; i++){
  a[i] = function(){
    console.log(i);
  };
}
a[6](); //10

//用let声明，结果是6，我的理解是，当前i只在本次循环起作用，每次循环都是个新变量，6 =i+得到结果。传进来的是6所以啊a[i]的与传进来的相同，而循环是变量i声明的，到的结果是上次循环的结果，所以循环体内的[i]是上次的结果是 5
```


```js
if (true) {
  // TDZ开始
  tmp = 'abc'; // ReferenceError
  console.log(tmp); // ReferenceError

  let tmp; // TDZ结束
  console.log(tmp); // undefined

  tmp = 123;
  console.log(tmp); // 123
}
```

>let声明没有“变量提升” ，使用前必须声明。

```js
// var ，值为的情况
var声明时foo变量已经存在值为undefined,所以不会发生变量提升
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;

```

## 暂时性死区

```js

//开始Var声明了局部变量，然后通过let变量绑定了（binding）这个区域 就成局部变量了
//由于let变量没有变量提升功能，所以在之前操作赋值会报错
//所以在代码块内let申明之前称之为‘暂时性死区’
var tmp = 123;

if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}


if (true) {
  // TDZ开始
在let申明变量之前，该变量不起作用
  tmp = 'abc'; // ReferenceError
  console.log(tmp); // ReferenceError

  let tmp; // TDZ结束
  console.log(tmp); // undefined

  tmp = 123;
  console.log(tmp); // 123
}

var x =x ;//不报错
let x = x  //报错  后面一个x  之前的变量x ,这是 x 变量没有申明完成

let不允许在相同作用域内，重复声明同一个变量。
function () {
  let a = 10;
  var a = 1; 或者 let a = 1  //都会报错
}
```

# 块级作用域
```js
es6使用块级作用域:
1:内层变量会覆盖外层变量

//if外层获取外部变量，内部获取内部变量，但f()执行时变量会提升覆盖外层变量
var tmp = new Date();

function f() {
  console.log(tmp);
  if (false) {    //个人理解时代码不执行时...  类似注视代码  下面才为undefined
    var tmp = 'hello world';
  }
}

f(); // undefined

2.计算循环变量泄漏为全局变量

//i用来控制循环的，但循环结束它没有消失，泄漏成全局变量
 //而let声明时有不同的内外部作用域，循环执行完成就消失,外部就不会获取到
var s = 'hello';
for (var i = 0; i < s.length; i++) {
  console.log(s[i]);
}
console.log(i); // 5

function f1(){
  let n = 5;   //作用域与consle同1一作用域
  f(true){
    let n = 10; 
  }
  console.log(n) //5
}

块级作用域出现，函数立即执行的表达式（IIFE）就不需要了 
//可以省略函数自己调用自己时的（），ES5
(function(){
  var tmp = ...;
  ...
}());
ES6  //块级作用域写法
{
  let tmp = ...;
  ...
}

块级作用域与函数声明
//ES5规定函数不能在块级作用域下声明，但下面写法在浏览器不会报错，（浏览器兼容老版本和新版本）
//{} 这里面就是代码块
if(true){
  function f(){}
}

try {
  function f(){}
}catch(e){
  // ...
}
//ES6引入块级作用域，并允许在里面声明，但let申明的不能被外部引用
//在ES5中
function f(){console.log('I am outside')}(
(function (){
  if(false){
    //重复申明一次函数f
    function f(){console.log('I am inside');}
  }
  f();
  })());  //函数立即执行
//得出结果为'I am inside' 声明的内部函数F 会被提升到头部，实际运行代码

function f(){console.log('I am outside');}
(funciton(){
  function f(){consle.log('I,am inside');}
  if(false){
  }
  f();
  }());

  如果在ES6里理论上代码只能在当前作用域起作用，出来结果应该是"I am inside ",但是代码运行会报错，如果改变块作用域sheng
```


















# 数组解构赋值

ES6 允许按照一定模式，`从数组和对象中提取值`，对`变量进行赋值`，这被称为`解构`

本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。
```js
let [foo, [[bar], baz]] = [1, [[2], 3]];
foo // 1
bar // 2
baz // 3

let [ , , third] = ["foo", "bar", "baz"];
third // "baz"

let [x, , y] = [1, 2, 3];
x // 1
y // 3

let [head, ...tail] = [1, 2, 3, 4];
head // 1
tail // [2, 3, 4]

let [x, y, ...z] = ['a'];
x // "a"
y // undefined
z // []

部分匹配就是不完全解构

let [x, y] = [1, 2, 3];
x // 1
y // 2

let [a, [b], d] = [1, [2, 3], 4];
a // 1
b // 2
d // 4

```

##对象的解构赋值

>解构不仅可以用于数组，还可以用于对象。

```js
let { foo, bar } = { foo: "aaa", bar: "bbb" };
foo // "aaa"
bar // "bbb"
```


# Set和Map数据结构
基本用法：
Set数据结构类似数组，Set本身是构造函数，用来生成 Set 数据结构。

1.结构成员唯一性
```js
const s = new Set();
[2,3,2,4,2].forEach(x =>s.add(x));//将数组循环出来的结果通过add方法添加到中。
for (let i of s){
  console.log(i)
}
// 2 3 4
```

Set 方法接受数组或中（数组类的对象作为参数）用来初始化。

```js

const set = new Set([1,2,3,4,4,5])
[...set] //...调用函数set将其转换成用“，”分割的参数序列
// [1, 2, 3, 4, 5]
set.size  //返回数组Set对象长度
// 5

function divs (){
  return [.../document.querySelectorAll('div')];  //遍历windows对象所有的div,得到的是node型数组 与普通数组类型不一样，所以不能直接用forEach。
}
const set = new Set(divs());
set.size  //返回数组Set对象长度
//56
//

divs().forEach(div => set.add(div));
set.size // 56



```

向Set加入值的时候，不会发生类型转换

```js

实例用来判断两个值是否相同，类似于精准运算符“===”但与其不同的是精准运算符 NaN ！=== NaN
let set = new Set();
let a = NaN;
let b = NaN;
set.add(a);  //将变量a添加到set中。
set.add(b);
set // Set {NaN}
Set(1) {NaN}  //只添加了一个NAN对象，说明在set函数中NaN相等。同理得出空对象不相等
```

Set 
Set 结构的实例有以下属性。
 - `Set.prototype.constructor`：构造函数，默认就是`Set`函数。
 - `Set.prototype.size`：返回`Set`实例的成员总数。


实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。下面先介绍四个操作方法。

1.add(value)：添加某个值，返回Set结构本身。
2.delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
3.has(value)：返回一个布尔值，表示该值是否为Set的成员。
4.clear()：清除所有成员，没有返回值。
```js
s.add(1).add(2).add(2);
// 注意2被加入了两次

s.size // 2

s.has(1) // true
s.has(2) // true
s.has(3) // false

s.delete(2);
s.has(2) // false
```

判断一个键是否存在，Object结构和Set结构的写法不同
```js
// 对象的写法
const properties = {
  'width': 1,
  'height': 1
};

if (properties[someName]) {
  // do something
}

    // 对象的写法
const properties = new Set();

properties.add('width');
properties.add('height');

if (properties.has('width')) {
 console.log('添加数据成功')
  // do something
}
VM78:7 添加数据成功
undefined
```

## Array.from

Array.from方法可以将 Set两类对象 转为真正数组。
`实际操作`中类似数组的对象是DOM操作返回的`NodeList集合`或函数内部的参数对象argument

```js
  //Nodelist对象
let ps = document.querySelectorAll('p');
Array.from(ps).forEach(function(p){
    console.log(p);
    });
# querySelectorAll方法返回的是一个类似数组的对象，可以将这个对象转为真正的数组，再使用forEach方法。


    //arguments对象
function foo(){
    var args = Array.from(arguments)
}   
```

只要部署迭代器(Iterator)的数据接口，就可以用Array.from转化为数组。

```js
var a = Array.from('Hello')
a
(5) ["H", "e", "l", "l", "o"]

let nameSet = new Set(['a','b'])
Array.from(nameSet)

(2) ["a", "b"]

```

扩展运算符（...）也可以将某些数据结构转为数组。扩展符背后调用了遍历器接口

```js
 //函数内参数对象arguments
function foo(){
    var arg = [...arguments]  
}
//DOM操作返回的NodeList 对象
[...doucument.querySelectorAll('div')]
```

```js 
const items = new Set([1,2,3,4,5]);
const array = Array.from(items);   //es6方法
const array = []/slice.call(items); //es5方法
array
//(5) [1, 2, 3, 4, 5]
items
//Set(5) {1, 2, 3, 4, 5}
```

拥有length属性的对象都可以用Array.from进行转换。下例子扩展符无法转换

```js
Array.from({length:3});
// [ undefined, undefined, undefined ]

```

Array.from可以接受第二个参数，类似map 用来对每个参数进行处理将处理后的参数返回数组
`Array.from(array1, (item, idx) => [item, array2[idx]])`

```js
Array.from(arrayLike, x => x * x);
// 等同于
Array.from(arrayLike).map(x => x * x);

Array.from([1, 2, 3], (x) => x * x)
// [1, 4, 9]

DOM节点文本。
let spans = document.querySelectorAll('span.name');

// map()
let names1 = Array.prototype.map.call(spans, s => s.textContent);

// Array.from()
let names2 = Array.from(spans, s => s.textContent)

```
删除数组重复数据成员的的方法

```js
function dedupe(array){
  return Array.from(new set(array));  
}
dedupe([1,1,2,3])   //[1,2,3]
```

将数组中布尔值为false转化为0
```js
Array.from([1,,2,,3],(n) => n || 0)
```

回各种数据的类型。

```js
function typeOf (){
    return Array.from(arguments, Value => typeOf value)
}
typeOf(null, [], NaN)
// ['object', 'object', 'number']

```

Array.from的第一个参数指定了第二个参数运行的次数

```JS
Array.from({length:2},()=> 'jack')
```

Array.from 将字符串转化为数组，然后返回长度，因为它能正确处理各种Unicode字符，可以避免JavaScript将大于\uFFFF的Unicode字符，算作两个字符的bug。

```js
function countSymbols(string){
    return Array.from(string).length;
}
```


## Array.of()

Array.of方法用于将一组值，转换为数组。

```js
Array.of(3,11,8) //[3,11,8]
Array.of(3).length //1
```

上面为弥补构数组构造函数不足Array(),Array()行为差异
参数为一个的时候是指定参数个数
```js
Array() // []
Array(3) // [, , ,]
Array(3, 11, 8) // [3, 11, 8]

//Array.of基本上可以用来替代Array()或new Array()，并且不存在由于参数不同而导致的重载。它的行为非常统一。

Array.of() // []
Array.of(undefined) // [undefined]
Array.of(1) // [1]
Array.of(1, 2) // [1, 2]

```

Array.of方法可以用代码模拟来实现。
```js
function ArrayOf(){
  return [].slice.call(arguments);
}
```

3.数组实例copyWithin()

将指定位置的数组成员复制到另外一数组位置里替换原来数值，相当于修改数组
`Array.prototype.copyWithin(target, start = 0, end = this.length)``

target（必需）：从该位置开始替换数据。
start（可选）：从该位置开始读取数据，默认为0。如果为负值，表示倒数。
end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。
```js
[1, 2, 3, 4, 5].copyWithin(0, 3) //数组从三位置开始到结束的数组成员替换从0为开始的成员位置上替换
// [4, 5, 3, 4, 5]

```

## 遍历操作
Set 结构实例有四种4的方法：
- key(): 返回键名的遍历器
- value(): 返回值名的遍历器
— entries(): 返回键值对的遍历器
- forEach():使用回调函数遍历每个成员

Set的遍历顺序就是插入顺序。这个特性有时非常有用，比如使用Set保存一个回调函数列表，调用时就能保证按照添加顺序调用。

keys方法、values方法、entries方法返回的都是遍历器对象（详见《Iterator 对象》一章）。由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以keys方法和values方法的行为完全一致。

```js
let set = new Set(['red', 'green', 'blue']);

for (let item of set.keys()) {
  console.log(item);
} //set.values遍历其键名
// red
// green
// blue

for (let item of set.values()) {
  console.log(item);
}   set.values //遍历其值
// red
// green
// blue

for (let item of set.entries()) {
  console.log(item); //遍历其键和值返回数组
}
// ["red", "red"]
// ["green", "green"]
// ["blue", "blue"]

Set.proto[Symbol.iterator] === Set.prottype.values //Set实例默认遍历方法，遍历是values值。
for (let item of set){
  console.log(item);
}
// red
// green
// blue
 
```


### forFach()
>Set结合forEach方法，用于对每个人操作，没有返回值，所以用到箭头函数

```js
let set = new set([1,2,3]);
set.forEach((value,key)=> console.log(value*2))
//2
//4
//6
```

### 遍历应用

+ 扩展运算（...）符部用for ...in 循环，可用于去重对象。
+ 扩展运算（...）与Set结合，其去重作用
```js
let set = new Set(['red', 'green', 'blue']);
let arr =[... set];
arr
/// [3] ['red', 'green', 'blue']

let arr= [2,3,3,4];
let unique = [...new Set(arr)];
// 2,3,4

```

# Promise

`Promise` 是`异步编程`的一种解决方案：将`异步操作`以`同步操作`的流程表达出来，对象`提供统一的接口`，使得`控制异步操作`更加容易。
+ 比传统的解决方案——`回调函数和事件`——更合理和更强大.避免了`层层嵌套的回调函数`。
+ 当两个或多个异步事件执行时，由于执行的时间的有长短，造成返回执行结果不完成(有些函数执行完成返回了，其它函数还没执行完成)

+ 对象的`状态`不受外界影响。Promise对象代表一个`异步操作`，有三种状态：`Pending`（进行中）、`Resolved`（已完成，又称 `Fulfilled`）和`Rejected`（已失败）

只有异步操作的结果（执行完成之后），可以决定当前是哪一种状态，任何其他操作都`无法改变`这个状态。这也是Promise这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。

+ `一旦状态改变，就不会再变`，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从Pending（未决定）变为Resolved（成功）和从Pending变为Rejected（失败）。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果。如果改变已经发生了，你再对Promise对象添加回调函数，也会立即得到这个结果。这与事件（Event）完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。

## 2.基本用法

ES6 规定，Promise对象是一个构造函数，用来生成Promise实例。


```js
//构造函数接受了一个函数作为参数，函数里有两个参数resolve和reject函数，由 JavaScript 引擎提供，不用自己部署。
var promise = new Promise(function(resolve, reject){
  if(/*异步操作成功*/){
    resolve(value);
  }else{
    reject(error);
  }
});
//异步操作成功调用resolve函数将Promise对象的状态从“ Pending未完成”变为“Resolved成功
//异步操作失败调用reject函数将Promise对象的状态从“ Pending未完成”变为“Reject失败”
//并将异步操作的结果，作为参数传递出去

//then方法可以接受两个回调函数作为参数。分别在执行结果resolved或rejected时调用／
（执行失败时调用的回调函数是可选的不一定要提供）
promise.then(function(value){
  //sussess 
  }),function(error){
  //failure
  }

```

Promise实例生成以后，可以用then方法分别指定Resolved状态和Reject状态的回调函数
```js
function timeout(ms){
  return new Promise((resolve,reject) => {
    setTimeout(resolve, ms ,'done'); //timeout方法返回一个Promise实例,表示一时间后执行的结果
  });
}
//过了传入的时间100时，
//Promise实例的状态变为Resolved
//并出发.then绑定的回调函数
timeout(100).then((value) => {
  console.log(value);
});
//Promise {[[PromiseStatus]]: "pending", [[PromiseValue]]: undefined}
// done
```

Promise 新建后就会立即执行,
```js
let promise = new Promise(function(resolve, reject){
  console.log('promise');
resolve();
});

promise.then(function(){
  console.log('Resolved');
});
console.log('Hi');
// promise
// Hi
// Resolved

//Promise 新建后立即执行，所以首先执行函数内部然后，then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行，所以Resolved最后输出。

```

下面是异步加载图片的例子。

```js
function loadImageAsync(url) {
  return new Promise(function(resolve, reject) {
    var image = new Image();

    image.onload = function() {
      resolve(image);
    };

    image.onerror = function() {
      reject(new Error('Could not load image at ' + url));
    };

    image.src = url;

  });
}
```

下面是一个用Promise对象实现的 Ajax 操作的例子。

```js
var getJSON = function(url) {
  var promise = new Promise(function(resolve, reject){
    var client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

    function handler() {
      if (this.readyState !== 4) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
  });

  return promise;
};

getJSON("/posts.json").then(function(json) {
  console.log('Contents: ' + json);
}, function(error) {
  console.error('出错了', error);
});
上面代码中，getJSON是对 XMLHttpRequest 对象的封装，用于发出一个针对 JSON 数据的 HTTP 请求，并且返回一个Promise对象。需要注意的是，在getJSON内部，resolve函数和reject函数调用时，都带有参数。


```

如果一个Promise实例调用resolve函数里带的参数是 另外一个Promise实例
则这个函数实例调用的是那个参数所对应的实例对象返回的结果

```js
var p1 = new Promise(function (resolve, reject) {
  // ...
});

var p2 = new Promise(function (resolve, reject) {
  // ...
  resolve(p1);
})
//p1和p2都是Promise的实例，但是p2的resolve方法将p1作为参数，即一个异步操作的结果是返回另一个异步操作
//p2的回调函数等待p1执行完成转变状态成功或失败后才会执行

var p1 = new Promise(function (resolve, reject) {
  setTimeout(() => reject(new Error('fail')), 3000)
})

var p2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(p1), 1000)
})

p2
  .then(result => console.log(result))
  .catch(error => console.log(error))
// Error: fail
// Promise，导致p2自己的状态无效了，由p1的状态决定p2的状态。所以，后面的then语句都变成针对后者（p1）。又过了2秒，p1变为rejected，导致触发catch方法指定的回调函数。


```

Promise.prototype.then()

then方法定义在promise.prototype方法上的，

# 函数扩展

1.函数添加默认值
```js
之前写法
function log(x,y){
  y = y || 'world' //y存在则值为y，不存在时y值为‘world'
}

ES6新写法：默认值写在函数后面。
funciton log(x,y = 'world'){
  console.log(x,y);
}

log('Hello', 'China') // Hello China
log('Hello','') //Hello World
//当y赋值为false时，则复制不起作用
//就得加一条判断是否赋值
if (typeof y === 'undefined'){
  y = 'world'
}
//加上默认值优势在于后期如果优化不传数据时代码正常运行
function Point(x=0, y =0){
  this.x = x;
  this.y = y;
}
var p = new point()
p //{x:0,y:0}

//变量设置默认值时不能 用let或const再次声明
function foo(x = 5){
  let x = 1; //error
  const x = 2;  //error
}

//变量使用默认值时，函数不能用同名参数
function foo(x, x =5){
  //...
}
// SyntaxError: Duplicate parameter name not allowed in this context

//参数默认值是变量的时候，参数传值的时候就会表达式结果的值
let x = 99;
function foo(p = x+1){
  console.log(p);
}
foo()  //100
x = 100;
foo()  //101

//结构赋值结合默认值使用
function foo({x,y = 5}){
  console.log(x,y);
}
foo({}) //undefined, 5  //解构赋值
foo({x:1}) //1,5
foo() // 报错／ undefined

实例赋默认值例子 
function fetch(url,{body ="",method = "get", header ={}}){
  console.log(method);
}
fetch('http://example.com',{})
//'GET'
fetch('http://example.com')
//报错

//设置双
function fetch(url,{method = 'GET' }={}){
  console.log(method);
}
fetch('http://example.com')
// 'GET'
// 写法一
   //函数默认值是一个空对象，设置了对象解构赋值的默认值
function m1({x = 0, y =0}={}){
  return [x,y];
}
  //没有设置默认值，参数默认值时个具体对象的时候，相当于没有设置结构函数的默认值
// 写法二
function m2({x,y} ={x:0, y:0}){
  return [x,y];
}

// 函数没有参数的情况
m1() // [0, 0]
m2() // [0, 0]

// x和y都有值的情况
m1({x: 3, y: 8}) // [3, 8]
m2({x: 3, y: 8}) // [3, 8]

// x有值，y无值的情况
m1({x: 3}) // [3, 0]
m2({x: 3}) // [3, undefined]

// x和y都无值的情况
m1({}) // [0, 0];
m2({}) // [undefined, undefined]   //当对象结构的时候没有设置时，函数值为空

m1({z: 3}) // [0, 0]
m2({z: 3}) // [undefined, undefined]

//函数默认值参数，应该是尾参数(就是最后面一个参数)如果不是尾部参数则无法省略
function(x = 1, y = 5 ,z){
  return [x ,y, z];
}
f() // [1, 5, undefined]
f(1) // [1, 5, undefined]
f(1, , 2) // 报错   第二个值设置初始状态时第三个才能省略
f(1, undefined, 2) // [1, 5, 2] 不是尾数不能省略只有输入undefined
foo(1, null, 2)  //[1, null, 2] 传null就不行

函数默认length属性 
//有默认值的参数不会计入lenth属性
(function (a){}).length         //1 
(function (a =5){}.length)      //0
(function (a,b,c=5){}).length   //2

//默认值不是尾参，length不会记入后面的参数
（function(a = 0,b,c){}).length //0
 (function (a, b= 1,c){}).length //1

 //rest参数是传入进来躲雨的参数
(function(...args){}).length //0
```

# 作用域

```js
函数参数设置默认值，函数声明初始化时，参数形成单独作用域（context）初始化结束作用消失，不设置初始值时不会出现
var x =1;
function f(x,y=x){
  console.log(y);
}  f(2) //2
//调用函数，行参形成作用域，默认值指向第一个参数

函数调用时 y =x 形成作用域，作用域里，变量没有定义，所以指向外层变量，调用时内层不起作用，外部不存在就报错。
let x =1;
function f(y=x){
  let x = 2;
  console.log(y);
}

x=x作用域小，实际执行let x = x; 形成暂时性死区 
f() //1
var x =1;
function foo(x=x){
  //...
}
foo() //报错

默认值为函数时，也遵行以上规则
let foo ='oither';
function bar(fun = x => foo){ //bar 参数是匿名函数，返回变量foo,foo没定义所以指向外层变量foo
  let foo = 'inner';
  console.log(func());
}
bar(); //other
外层没有声明变量
function bar(func = () => foo) {
  let foo = 'inner';
  console.log(func());
}

bar() // ReferenceError: foo is not defined
由于x定义,形成作用域并指向外部变量，
申明过的y变量的匿名函数里的x未申明，指向同一内部
var x = 1;
function foo(x,y =function(){x=2}){
  var x =3;  //不在同一作用域
  y(); //内部调用y()作用域指向函数内部  x= 3
  console.log(x);
}
foo() //3
x //1  

var x = 1;
function foo(x,y =function(){x=2}){
  x =3;   不是很明白
  y(); //内部调用y()作用域指向函数内部  x= 3
  console.log(x);
}
foo() //2
x //1  

```

#应用
利用参数默认值，设置不可省略参数，如省略就抛错，
```js
function throwIfMissing(){
  throw new Error('Missing Parameter');
}
function foo(mustBeprovied = throwIfMissing()){
  //throwIfMissing() 后面加括号表示默认值在执行时执行

  return mustBeProvided
}
foo()
// Error: Missing parameter

将参数默认值设为undefined，表明这个参数是可以省略的。
function foo(opitionl =undefined){...}


```

## 2.rest 参数
```js
  rest参数(形式为‘...变量名’)，用于获取函数的多余参数，
  rest搭配变量时一数组，变量将多余参数放数组中
  function add(...value){
    let sum = 0;
    for (var val of values){
      sum+=val
    }
    return sum
  } 
  add(2,5,3)  //10

  
  // arguments变量的写法
  function sortNumbers(){
    return Array.prototype.slice.call(arguments).sort();
  }  //sort排序  call 调用对象替换替换
  //rest参数的写法
  const sortNumbers = (...numbers) => numbers.sort();
 
 //rest 作为变量代表一个数组，所以数组特有方法都可用。
 functionpush（array，...items）{
  itens.forEach(function(item){
    array.push(item);
    consloe.log(item)
    })
 }
 var a =[];
 push(a,1,2,3)

函数length属性，不包括rest参数
 function f(a,...b,c){} // 错误，rest参数后面不能跟参数
 (function(...a){}).length //0
 (function(a,...b){}).length //1
```
 
 ## 3.h扩展运算符
```js
//扩展运算符（spread）是三个点（...）,类似rest逆运算
将字符串转换成用逗号隔开的
console.log(1,...[2,3,4].5) //1 2 3 4 5
[...document.querySelectorAll('div')] //[<div>,<div>,<div>]

用于函数调用
array.push(...itmes)和add(...numbers)
function push(array, ...items){
  array.push(...items);
}
function add(x, y){
  return x+y;
}
var number =[4,20];
add(...number) //42

//array
function f(a,b,c){}
  var args = [0,1;]
  f(-1,...args,2,...[3]);


  function f(v, w ,x,y,z){}
var args =[0,1];
f(-1, ...args, 2, ...[3]);

```

##替代数组的apply方法
扩展字符可展开数组，就不需要用apply方法，将数组转换成函数参数
```js
function f(x, y ,z){    
  //...
}
var args = [0,1,2]; f.apply(null, args);//es5
或者
var args = [0,1,2];  f(...args)   //es6

被扩展符取代apply方法，应用Math.max方法，简化求出一个数组大元素的写法。
Math.max.apply(null,[14, 3, 77]) //ES5写法
Math.max(...[14,3,77])           // ES6的写法
Math.max(14,3,77)                //等同于
  //apply将数组转化为参数系列，   有了展开符就直接可用了

push函数添加数组到另一数组尾部,push方法传不能时数组，则用apply转化
//es5 写法
var arr1 = [0,1,2],arr2 = [3,4,5]
Array.prototype.push.apply(arr1,arr2); 返回//6
//es6
arr.push(...arr2);   返回//6

new (Date.bind.apply(Date, [null,2015,1,1])) //ES5
new Date(...[2015,1,1]);

```

扩展运算符应用
(1)合并数组
扩展符何必数组新写法
```js
(1).合并数组
[1,2].concat(more) //es5
[1,2, ...more]  //es6

var arr1 = ['a','b'];
var arr2 = ['c'];
var arr3 = ['d','e']

arr1.contcat(arr1,arr2);  //es5
//['a','b','c','d','e']
[...arr1,...arr2,...arr3] //es5
//['a','b','c','d','e']


```

(2)于结构赋值结合
扩展字符，结构子符结合，生成数组
```js
a =list[0],rest = list.slice(1)  //ES5
[a, ...rest] = list   //ES6

const [first, ...rest] =[1,2,3,4,5];
first //1
rest  // [2,3,4,5]

const [first, ...rest] =[];
first //undefined
rest  //[]

const [first, ...rest] =['foo'];
first //'foo'
rest  //[]

// 如果将扩展运算符用于数组赋值，只能放在参数的最后一位，否则会报错。

const [...butlast,last] = [1,2,3,4,5];       // 报错
const [first, ...middle, last] =[1,2,3,4,5]; //报错

```

(4) 字符串
扩展符还可以将字符串转化为真正数组
```js
[...'Hello']
//['H','e','l','l',o]

//这种写法正确识别32位的Unicode字符

function length(str) {
  return [...str].length;
}

length('x\uD83D\uDE80y') // 3


```

# 4.严格模式
```js
functiondoSomething(a,b){     //es5
  'use strict';  
  //code
}

//es6 一下几种不能用严格模式 否则会报错
  //es6 设默认值
function doSomething(a,b = a){    
  'use strict';
}
  //结构赋值
const doSomething = function({a,b}){
  'use strict';
}
    //扩展运算
const doSomething = (...a) =>{
  'use strict';
}
//这样规定原因在于，严格模式同时适用函数体和参数。但函数先执行参数，然后再执行函数体
//如此问题在于只有在函数体内才能执行严格模式。
```


## 中见后期再

# 5 .name 属性 ，返回函数名
函数name属性，返回函数名
```js
function foo(){}
foo.name // 'foo'
```

匿名函数赋给变量时.  `ES5`name属性返回空，ES6  返回实际变量名
```js
var f =function(){};
// es5 f.name //''    ES6 f.name // 'f'
```

如果是具名函数则返回具体的函数名，
```js 
var f = function baz(){}
// es5 || es6  返回 f.name //'baz'
```

function构造函数，返回的函数实例name属性值为anonymous(匿名)
```js
(new function).name //'anonymous'
```

bind返回的函数，name属性值会加上bound前缀
```js
function foo(){};
foo.bind({}).name  //bound foo
(function(){}).bind({}).name //'bound'
```

6.箭头函数（=>）定义函数
```js
var f = v =>v;
等同于
var f = function(v){
  return v;
};

箭头函数传多个参或不传，使用（）代表参数部分。
var f =() =>5; 等同于 var f = function(){return 5}
var sum = (num1,num2) => num1 + num2;
等同于
var sum = function(num1, num2){return unm1 + num2;}

如果代码块部分多一条语句，就得在对象外加{}
var sum =(num1,num2) =>{return num1 +num2;}

大括号被解释成代码块，如果箭头函数返回的是一个对象，必须在对象外加（）
var getempItem = id => ({id;id,name:'Temp'});
等同于
 function getempItem(id){
   return ({id:id,name:'Temp'})
 }

箭头函数与变量解构结合使用
const full =({first,last}) =>first + '' +last;
//等同
function full(person){
  return person.first + '' +person.last;
}

箭头函数使得表达式更简洁
const isEven = n =>n%2 == 0;
const square = n => n*n;

箭头函数简化回调函数
//正常写法
[1,2,3].map(function(x){
  return x*x;
  });
  //箭头函数的写法
[1,2,3].map(x => x*x);

箭头函数与rest结合的例子
const numbers = (...nums) =>nums;
numbers(1,2,3,4,5,) //[1,2,3,4,5]

const headAndTalil =(head, ...tail)=>[head,tail];
headAndTail(1,2,3,4,5) //[1,[2,3,4,5]]


```

# 使用箭头函数得注意
```
+ this在函数体内，是定义时所在的对象，而不是使用时所在对象
+ 不能当作构造函数，也就不谁使用new命令，
+ argument对象在函数体内不存在的，使用时可选rest代替
+ 箭头函数不能用做Ceneratorhan函数，不能使用yield命令
```

```
this对象的指向在箭头函数中是固定的
function foo(){
  setTimeout(()=:)
}
```




























# 对象扩展

# 1.属性的简洁表示法 

将`变量`和`函数`写入对象作为属性和方法。
```js
对象属性简写:
var foo = 'bar';
var baz = {foo}; //省去写后面的属性，属性为对象属性
baz // {foo: "bar"}
//等同于
var baz = {foo: foo};

//实例：在对象中写入变量，得到对象属性名为变量名，属性值为变量值
function f(x,y){
  return{x,y}
}
//等同
function f(x,y){
  return {x:x,y:y}
}

对象方法简写:
var o = {
  method(){return:'hello'};
};

var o = {
  method:function(){
    return "hello"
  }
};

 实际例子：
 var birth = '2000/01/01';

var Person = {

  name: '张三',

  //等同于birth: birth
  birth,

  // 等同于hello: function ()...
  hello() { console.log('我的名字是', this.name); }

};

//实际函数返回值
function getPoint() {
  var x = 1;
  var y = 10;
  return {x, y};
}

getPoint()
// {x:1, y:10}


CommonJS模块输出变量，就非常合适使用简洁写法，前端应用。
var ms = {};
function getItem(key){
  return key in ms ? ms[key]:null;
}
function setItem (key, value){
  ms[key] = value;
}
function clear(){
  ms = {}
}

module.exports = {getItem,setItem, clear};

module.exports = {
  getItem:getItem,
  setItem:setItem,
  claer:clear
}

属性的赋值器（setter）和取值器（getter），事实上也是采用这种写法。
var cart = {
  _wheels: 4,

  get wheels () {
    return this._wheels;
  },

  set wheels (value) {
    if (value < this._wheels) {
      throw new Error('数值太小了！');
    }
    this._wheels = value;
  }
}

多线程调用代码（Generator），前面加
var obj ={
  *m(){
    yield 'hello wrold';
  }
};
```

# 2. 属性名和表达式
```js
定义对象属性
方法1
obj.foo = true; //标示符定义属性名为foo，如字面量定义则用大括号用
方法2
obj['a' + 'bc'] = 123;  //表达式定义属性名  abc

//表达式定义方法名
let obj ={
  ['h'+ 'ello'](){
    return 'hi';
  }
};
obj.hello() // hi

//ES5 定义方法
 var obj = {
foo:true ;
abc:123; 
 }

 //字面量定义 用值定义
 let proKey = 'foo';
 let obj = {
  [proKey]:true;
  ['a'+'bc']:123
 };

 var lastword = 'last word';
 var a ={
  'first word':'hello',
  [lastword]:'world' //字面量定义
 };
 a['first word'] //'hello'
 a[lastword] //'world'
 a['last word'] //world 
// 属性名表达式与简洁表达式不能同时用
// 报错
var foo = 'bar';
var bar = 'abc';
var baz = { [foo] };

// 正确
var foo = 'bar';
var baz = { [foo]: 'abc'};

```

注意如果属性名是个对象，默认情况会将对象转换成字符串。
```js
const keyA ={a:1};
const keyB ={b:2};

const myObject={
  [keyA]:'valueA'
  [keyB]:'valueB'
};
myObject //Object {[object Object]: "valueB"}
```

# 方法name属性

当对象方法是函数时，拥有name属性，返回函数名（方法名）
```js
const person ={
  sayName(){
    console.log('hello');
  },
};
person.sayName.name //'sayName'
```

函数用取值函数(getter)和存值函数(setter),name属性在描述对象set或get上。
```js
const obj = {
  get foo(){},
  set foo(x){}
};
obj.foo.name  //报错

const descriptor = Object.getOwnPertyDescriptor(Obj,'foo');
descriptor.get.name //''get foo
descripttor.get.name // 'set foo'
```

bind方法创建的函数，与function构造函数创建的函数name返回值不一样。
```js
(new Function()).name //'anonynous'
var doSomething = function(){};
doSomething.bind().name //'bound doSthing'
```

对象方法时Symbol值时，name返回时这个Symbol描述。
```js
const key1 = Symbol('description');
const key2 = Symbol();
let obj = {
  [key1](){},
  [key2](){}
};
obj[key1].name //[descripttion]
obj[key2].name //'' key没有描述
```

4.Object.is()  同值运算法 与“严格比较运算符（===）的行为基本一致。”
区别于之前的js `{} 不等于 {}` ,`-0不等于+0`,`NaN相等`
```js
+0 === -0 //true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true

ES5部署
Object.defineProperty(Object, 'is', {
  value: function(x, y) {
    if (x === y) {
      // 针对+0 不等于 -0的情况
      return x !== 0 || 1 / x === 1 / y;
    }
    // 针对NaN的情况
    return x !== x && y !== y;
  },
  configurable: true,
  enumerable: false,
  writable: true
});
```
 
# 5. Object.assign

将原文件所有枚举对象复制到目标文件（source）到（target）
```js
var target ={a:1,b:1};   //后面b:1与原文件同名所以被覆盖
var source1 ={b:2};
var source2 ={c:3};
Object.assign(target, source1, source2) //原文件放前面，目标文件放后面。
target //{a:1, b:2, c:3}

Object.assign(source1)  //一个对象则返回本身。{b:2}

typeof Object.assign(2)  //'object' 不是对象则转化为对象

Object.assign(undefined) // 报错
Object.assign(null) // 报错

//只有可枚举对象才能合并,属性字符串有这个
var v1 ='abc', v2 = true, v3 = 10;
var obj = Object.assign({}, v1,v2,v3);
console.log(obj);//{"0":"a","1":"b","2":"c"}

//只拷贝源对象的自身属性（不拷贝继承属性），也不拷贝不可枚举的属性（enumerable: false）。
Object.assign({b: 'c'},
  Object.defineProperty({}, 'invisible', {
    enumerable: false,
    value: 'hello'
  })
)
// { b: 'c' 

//属性名为Symbol值的属性，也会被Object.assign拷贝。
Object.assign({ a: 'b' }, { [Symbol('c')]: 'd' })
// { a: 'b', Symbol(c): 'd' }

//数字作对象，会把数组视为对象
Object.assign([1, 2, 3], [4, 5])
// [4, 5, 3]
// 数组属性名为0,1,2  所以前两位会被覆盖。

```

## 常见用途和方法
1.为对象添加属性
```js
class point{
  constructor(x,y){
    Object.assign(this,{x,y});
  }
}   //Object.assign 将x, y属性添加到point对象实例
```

2.对象方法
```js
//将对象的两个方法写在大括号中然后通过Object.assign方法添加到对象，
Object.assign(SomeClass.prototype,{
  someMethod(arg1,arg2){
    ...
  },
  anotherMethod(){
    ...
  }
  });
  //等同于 通过原型添加属性
  SomeClass.prototype.someMethod =function(arg1,arg2){...};
  SomeClass.prototype.antherMethod = function(){...}
```

3.克隆对象

```js
//将对象拷贝到空对象
function clone(origin){
  return Object.assign({},origin)
}   //这种方法只能克隆自身值,不能克隆继承值

function clone(origin){
  let originProto = Object.getPrototypeOf(origin);
  return Object.assign(Object.create(originProto),origin)
}
}//首先获取对象的继承属性，赋值给变量，然后进行后面合并
```

4.合并多个对象
```js
const merge = (target,...sources) =>Object.assign(target,sources); //将多个对象合并到某一个对象
const merge = )(...sources) =>Object.assign({},...sources);//合并后返回一个新对象

```

5.为属性指定默认值
```js
//默认值为DEFAULTS，iotions是用户提供参数，有重复的对象名直接合并以option为准
const DEFAULTS ={loglevel:0,
outputFromat:'html'
};
function processContent(options){
  options = Object.assign({},DEFAULTS,options);
  console.log(options);
}


```

6.属性可枚举
对象的每个属性都有一个描述对象（Descriptor），用来控制该属性的行为。Object.getOwnPropertyDescriptor方法可以获取该属性的描述对象。


```js
let obj ={foo:123};
Object.getOwnropertyDesctiptor(obj,'foo')
 //{
//    value: 123,
//    writable: true,
//    enumerable: true,    //对象的可枚举性,false 为忽略。
//    configurable: true
//  }
```

ES5三个操作忽略enumerable属性：为false的对象属性。

- for...in循环：只遍历对象自身的和继承的可枚举的属性
- Object.keys()：返回对象自身的所有可枚举的属性的键名
- JSON.stringify()：只串行化对象自身的可枚举的属性

```js
Object.getOwnPropertyDescriptor(Object.prototype, 'toString').enumerable
// false

Object.getOwnPropertyDescriptor([], 'length').enumerable
// false
//面代码中，toString和length属性的enumerable都是false，因此for...in不会遍历到这两个继承自原型的属性。

Object.getOwnPropertyDescriptor(class {foo() {}}.prototype, 'foo').enumerable
// false
//总的来说，操作中引入继承的属性会让问题复杂化，大多数时候，我们只关心对象自身的属性。所以，尽量不要用for...in循环，而用Object.keys()代替。

```

7.属性的遍历
```shell
（1）for...in

for...in循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。

（2）Object.keys(obj)

Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）。

（3）Object.getOwnPropertyNames(obj)

Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）。

（4）Object.getOwnPropertySymbols(obj)

Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有 Symbol 属性。

（5）Reflect.ownKeys(obj)

Reflect.ownKeys返回一个数组，包含对象自身的所有属性，不管属性名是 Symbol 或字符串，也不管是否可枚举


遍历属性遵循顺序  首先‘number’ --> 'string'-->'Symnol()属性'
reflect.ownKeys({[Symbol()]:0,10:0,2:0,a:})
```

8._proto_ 属性，Object.setPrototypeOf(),和Object.getPrototypeOf()

_proto_属性用来`读取`或`设置`当前对象的prototype对象

```js
//es6写法
var obj ={
  method:function(){...}
};
obj._proto_= someOtherObj;  //_proto_是内部属性，不是正式API。
//es5写法
var obj =Object.create(someOtherObj);
obj.method = function(){...};
该属性没有写入 ES6 的正文，而是写入了附录，原因是__proto__前后的双下划线，说明它本质上是一个内部属性，而不是一个正式的对外的 API，只是由于浏览器广泛支持，才被加入了 ES6。标准明确规定，只有浏览器必须部署这个属性，其他运行环境不一定需要部署，而且新的代码最好认为这个属性是不存在的。因此，无论从语义的角度，还是从兼容性的角度，都不要使用这个属性，而是使用下面的Object.setPrototypeOf()（写操作）、Object.getPrototypeOf()（读操作）、Object.create()（生成操作）代替。

```

事实_proto_调用的是Object.prototype._proto_
```js
Object.defineProperty(Object.prototype,'_proto_',{
  get(){
    let _thisObj = Object(this);
  },
  set(proto){
    if(this === underfind || this === null){
      throw new TypeError();
    }
    if(!isObject(this)){
      return undefined;
    }
    let status = Reflect.setPrototypeOf(this,proto);
    if(!status){
      throw new TypeError();
    }
   },
  });
  function isObject(value){
    return Object(value) === value;
  }
}
```

如果一个对象本身部署了__proto__属性，则该属性的值就是对象的原型。
```js
Object.getPrototypeOf({ __proto__: null }) //null
```

## Object.setProrotypeOf()
Object.setProrotypeOf作用于_proto_相同，用来设置prototype对象返回对象本身。，
它是 ES6 正式推荐的设置原型对象的方法

```js
Object.setProrotypeOf(Object,prototype)
var 0 = Object.setPrototypeOf({},null);   //设置空对象的属性为null
//等同于
function (obj, proto){
  obj._proto_ = proto;
  return obj;
}

实例
let proto = {};
let obj ={x:10};
Object.setPrototypeOf(Obj,proto);
proto.y = 20;
proto.z =40;
obj.x  // 10,  
obj.y // 40
```

如果第一个参数不是对象，会自动转为对象。但是由于返回的还是第一个参数，所以这个操作不会产生任何效果
```js
Object.setPrototypeOf(undefined,{})
Object.setPrototypeOf(null,{}) //undefined和null无法转为对象，
```

## Object.getPrototypeOf()

该方法与Object.setPrototypeOf方法配套，用于读取一个对象的原型对象。

Object.getPrototypeOf(obj);
```js
# 9 .Object.key(),Object.Value(), Object.entries()

ES5
function Retangle(){
  //...
}
var rec = new Reactangle();
Object.getPrototypeOf(rec) === Rectangle.prototype //ture
Object.getPrototypeOf(rec,Object.prototype);
Object.getPrototypeOf(rec) === Rectangle.prototype //false
```

参数不是对象则转换成对象：
```js
// 等同于 Object.getPrototypeOf(Number(1))
Object.getPrototypeOf(1)
// Number {[[PrimitiveValue]]: 0}

// 等同于 Object.getPrototypeOf(String('foo'))
Object.getPrototypeOf('foo')
// String {length: 0, [[PrimitiveValue]]: ""}

// 等同于 Object.getPrototypeOf(Boolean(true))
Object.getPrototypeOf(true)
// Boolean {[[PrimitiveValue]]: false}

Object.getPrototypeOf(1) === Number.prototype // true
Object.getPrototypeOf('foo') === String.prototype // true
Object.getPrototypeOf(true) === Boolean.prototype // true
```

# 9 .Object.key(),Object.Value(), Object.entries()

ES5ES5 引入了Object.keys方法，返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名。
```js    
var obj = {foo:'bar',baz:42};
Object.key(Obj)  //['foo', 'baz']
```

ES2017 引入了跟Object.keys配套的Object.values和Object.entries，作为遍历一个对象的补充手段，供for...of循环使用。

```js
let {keys, values, entries} =Object;
let = {a:1, b:2, c:3};
for (let key of keys(obj)){
  console.log(key); //'a','b','c'
}

for (let value of values(obj)){
  console.log(value); //1,2,3
}
for(let [key, value] of enteries(obj)){
  console.log(value); //['a',1],['b',2],['c',3]
}
```

 Object.values()
```js

//方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值。

var obj = {foo:'bar', baz:42};
object.values(obj) //['bar',42]

var obj = {100:'a', 2:'b',7:'c'};
Object.values(obj)  //['b','c','a']
//返回的数据，属性名：num =>以数字排序， string =>以生成时间排序， 最后Symbol值的以生成时间排序

//Object.values只返回对象自身的可遍历属性。
var = Object.create({},{p:{value:42}});
Object.values(obj) //[]  p属性为添加属性所以不能遍历出来

var = Object.create({},p:{value:42}, enmerable:true) //42
//把enumerable改为ture  就可以遍历
Object.values([symbol()]:123,foo:'abc'});//['abc'] 有Symbol属性直接过滤
Object.values('foo') //['f','o','o'] 参数为string时返回分割字符组成数组
Object.values(42) //[]  参数不是对象时转换成字符串 当他们为数字或者布尔值时不会给实例添加继承属性所以为空
```

Object.entries
```js
//方法返回不含继承所有可遍历的属性的键值对数组
var obj = {foo:'bar',baz:42};
Object.entries(obj)
//[['foo','bar'],['baz',42]]

//如果原对象的属性名是一个 Symbol 值，该属性会被忽略。和value类似
Object.entries({[Symbol()]:123, foo:'abc'}); //[['foo','abc']]

letObj ={one:1, two:2};
for(let[k,v] of Object.entries(Obj)){
  consloe.log(`${JSON.stringify(k)}:${JSON.stringify(v)}}`);
}
// "one": 1 
// "two": 2
//将对象转化成真正的Map结构

Object.entries方法的另一个用处是，将对象转为真正的Map结构。
var obj ={ foo: 'bar',baz:42};
var map = new Map(Object.entries(obj));
map  //Map {foo:'bar',baz:42}
```

Object.entries方法
```js
//Genertor函数的版本
function* entries(obj){
  for (let key of Object.key(obj)){
    yield [key, obj[key]];
  }
}

// 非Generator函数的版本
function entries(obj){
  let arr = [];
  for(let key of Object.keys(obj)){
    arr.push([key,obj[key]])
  }
  return arr;
}

```

10.对象扩展运算。

对象结构：将所有可遍历尚未被读取的属性，键和值，分配到指定对象上面

```js
const [a, ...b] ={x:1,y:2, a:3,b:4};   //结构值b,必须在最右边
x//1,
y//2
z//{ a:3,b:4 }   //变量z是结构函数所在的对象 获取等号右边未读取的键和值拷贝过来

//下面例子应为结构函数等号右边必须是对象
let { x, y, ...z } = null; // 运行时错误
let { x, y, ...z } = undefined; // 运行时错误 

//解构函数是浅拷贝 当键值是符合函数的时候（数组，对象，函数），结构是值的应用，不是副本（不理解）
//例如下修改b对象值时，结构函数会改变

let Obj ={a:{b:1}};
let {..x} =Obj;
Obj.a.b = 2;
x.a.b //2 
// 

//解构函数不会拷贝来自原型的值
let o1 ={a:1};
let o2 = {b:2};
o2._proto_ = o1;
let{...o3} =o2;
o3 //{b:2} 
o3 //underfuned

//单纯的结构赋值是可以获取对象原型的属性
var o = Object.create({x:1,y:2})
o.z = 3;
let {x, ...{y,z}} =0
x // 1  单纯结构赋值是可以读取对象属性
y //undefined  y ,z 是双重结构只能获取对象自身属性
z // 3 

//结构赋值用处，扩展函数的参数
function baseFunction({a,b}){
  //...
}
function wrapperFunction({x,y, ...restConfig}){
//使用x，y参数赋值操作，其余属性传给原始参数
return baseFunction(restConfig);//其余属性传给原始参数保留原始参数
}
```

# 2.扩展运算符
扩展运算符（...）用于取出参数对象的所有可遍历属性，拷贝到当前对象之中。

```js
let z = {a:3,b:4};
let n = {...z};
n //{a:3,b:4}
等同于
let nClone =Object.assign({},z)

//合并两个对象
let ab = {...a,...b}
等同于
let ab =Object.assign({},a,b)

//name之外的被previdousVersion 的
用户自定义属性会被新对象拷贝进来后会覆盖。
et aWithOverrides = { ...a, x: 1, y: 2 };
// 等同于
let aWithOverrides = { ...a, ...{ x: 1, y: 2 } };
// 等同于
let x = 1, y = 2, aWithOverrides = { ...a, x, y };
// 等同于
let aWithOverrides = Object.assign({}, a, { x: 1, y: 2 });

//使用方法来修改对象部分属性就很方便
let newVersion ={ 
  ...previdousVersion,
  name:'New Name'
}对象覆盖

```
扩展符在前的属性是设置新对象属性默认值。
```js
let aWithDefaults = {x:1,y:2, ...a}; //等同于
let aWithDefaults = Object.assign({},{x:1,y:2},a);  //等同于
let SWithDefaults = Object.assign({x:1,y:2},a);  
```

扩展运算符的参数对象之中，如果有取值函数get，这个函数是会执行的。
```js
// x属性只是被定义，没执行所以不会抛错
let aWtihXGetter = {
  ...a,
  get x(){
    throws new Error('not thrown yet');
  }
}
//x属性被执行，错误会抛出
let tuntimeError = {
  ...a,
  ...{
    get x(){
      throws new Error('throw now');
    }
  }
}

//扩展运算符运算参数为null或undefined时值会被忽略。
let emptyObject = {...null,...undefined };// 不报错
```

11.Object.getOwnPropertyDescriptors()
```js
//11.ES里对象描述。 Object.getOwnPropertyDescriptor方法，返回某个对象的描述（descriptor）
var Obj ={p:'a'};
Object.getOwnpropertyDesscriptor(obj,'p')
// Object { value: "a",
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

//es2017里Object.getOwnpropertyDescriptor方法，返指定对象所有非继承属性的描述对象

const obj ={
  foo:123,
  get bar(){return 'abc'}
};
Object.getOwnpropertyDescriptors(Obj)
// { foo:
//    { value: 123,
//      writable: true,
//      enumerable: true,
//      configurable: true },
//   bar:
//    { get: [Function: bar],
//      set: undefined,
//      enumerable: true,
//      configurable: true } }
//
// 返回的属性名是该属性名，属性值就是该属性的描述对象
//实现例子
function getOwnpropertyDecsriptors(Obj){
  const result = {};
  for (let key of Reflect.ownKeys(obj)){
    result[key] =object.getOwnPropertyDescriptor(obj, key)
  }
   return result;
}
上面方法解决Object.assign()无法正确拷贝get set属性问题

const source ={
  set foo(value){
    console.log(value);
  }
};
//Object.assign方法总是拷贝一个属性的值，而不会拷贝它背后的赋值方法或取值方法。
//所以得到结果为undrfined
const target1 ={};
Object.assign(target1, source);
Object.getOwnPropertyDescriptor(target1,'foo')
// { value: undefined,
//   writable: true,
//   enumerable: true,
//   configurable: true }

//Object.assign方法总是拷贝一个属性的值，而不会拷贝它背后的赋值方法或取值方法。
const = tatget2 ={};
Object.defineProperties(target2,Object.getOwnPropertyDescripto(source))
Object.getOwnPeopertyDescriptor(target2,'foo')
// { get: undefined,
//   set: [Function: foo],
//   enumerable: true,
//   configurable: true }

//代码何并提炼逻辑出来的
const shallowMerge =(target,source) => Object.defineProperties(
  target,
  Object.getOwnPropertyDescriptors(source)
  );

Object.getOwnPropertyDescriptors方法另外用处。配合Object.create将对象属性克隆到新对象熟浅拷贝。

const clone = Object.create(Object.getPrototypeOf(Obj),
Object.getOwnPropertyDescriptors(obj));
//或者
const shallowClone =(obj) =>Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj)
  );
//获取对象的属性和对象属性的描述==》从而克隆了整个对象（不包括原属性）

Object.getOwnpropertyDescriptors实现对象的继承

const obj = {
  _proto_:prot,
  foo:123,
};
//规定__proto__只有浏览器要部署，其他环境不用部署。如果去除__proto__，上面代码就要改成下面这样。

const obj = Object.create(prot);
obj.foo = 123;
//或者
const obj = Object.assign(
Object.craete(prot),
{
  foo:123
}
);

//或者
const obj = Object.assign(
  object.create(prot),
  {
    foo:123,
  }
);

Object.getOwnPropertyDescriptors,另一种写法
const obj = Object.create(
prot,
Object.getOwnpropertyDescripttors({
  foo:123,
  })
);

Object.getOwnpropertyDescripts 实现 Mixin(混入)模式
 t mix = (object) => ({
  with: (...mixins) => mixins.reduce(
    (c, mixin) => Object.create(
      c, Object.getOwnPropertyDescriptors(mixin)
    ), object)
});

// multiple mixins example
let a = {a: 'a'};
let b = {b: 'b'};
let c = {c: 'c'};
let d = mix(c).with(a, b);

d.c // "c"
d.b // "b"
d.a // "a"。


```

## 12 Null 传到运算符

编程业务中要读取某个属性，首先判断他是否存在
```js
如读取：message.body.user.firstName  安全写法
const firstName =(message&&message.body&&message.body.user.message.body.user.firstName) ||'default'
NUll传导运算简单写法
const firstName = message?.body?.user?.firstName || 'default';
？.运算只要其中一个返回null或underfined，就返回这个结果并且不往下执行

'null传到运算'四种对象属性用法
- Obj？prop //读取对象属性
- Obj?.[expr] //同上
- func?.(...args) //函数或方法调用
- new C?.(...args) //构造函数的调用

传导运算符要写成Obj?.prop,  三元运算为Obj？prop:123
// 如果 a 是 null 或 undefined, 返回 undefined
// 否则返回 a.b.c().d
a?.b.c().d
```






