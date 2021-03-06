函数
---
> var a=10,b=20;  //全局变量
  function  sum(){
    var a=30; //局部变量
    alert(a+b);
  }

**就近原则** 
函数里的变量会提前（即一层一层地往外找，直到找到变量）。
没有赋值的变量默认为undefined

######变量的查找方式

1. 先查找当前函数内部是否存在，如果存在则直接使用这个变量。
2. 如果当前函数没有变个变量，就会向上查找到为止
3. 如果到达最顶层（window）还没找到，就会报错(not defined)


**匿名函数**
没有名字的函数变叫匿名函数

**局部变量 与 全局变量**
作用域(使用范围)：局部能访问全局；全局不能访问局部。

* 函数内部能访问函数的外部变量；
* 函数外部不能访问函数的内部变量。
**例:**
>var k=0;
> function getNum(){
>   var j=20;
>   alert(j+k);  ==>30
> }
> alert(j+k); ==>报错！

* window.onload: 在页面所有元素加载后完成，才会执行；
**用法**
>window.onload=function(){}

**函数的声明方式**
1. 通过关键字：function 函数名(){} //调用可提前
2. 通过变量方式声明 //调用不可提前  

   >var add=function(){expresion}
   >add();//调用函数，需放在声明变量add的语句后面
   >*此处add为一个对象*

**函数的其他用法**

* element.onclick=function(){函数1}（点击该项目时可触发函数1;函数1需要定义。）
此做法是为了HTML、CSS、JS文件三者分离，方便进行维护。
* 函数的声明会提前
  例：
  var a=10;
  function test(){
    alert(a)  ==>undefined
    var a=11; =>相当于在函数开始先声明var a
    alert(a)
  }

 
**函数参数**
1. 形参：在函数定义时圆括号内的参数。
2. 实参：函数执行/调用时传的参数。
3. 适用就近原则
4. 形参与实参的个数可以不同：
    * 实参>形参：多余的实参被忽略；
    * 实参<形参：多余的开参值为undefined；

**arguments**

* 隐藏在函数内部的对象，用于保存实参，只能在函数内部用。
* 含属性length,arguments.length代表传进函数的实参个数。
* 函数名.lenth:形参的长度。
* 如sum(a,b,c,d)将会生成[a,b,c,d]//类数组。
* 可实现函数：不管实参有多少个，都可以进行运算，利用for循环。
    **例： 可实现不管传入多少参数，均可算出参数的和**
    
    > function test(){
       var res
       for(var i=0;i< arguments.length;i++){
           res += arguments[i]
      }  
        alert(res);
    }
    test(1,2,3,4,5,6,32)；
* callee：代表函数本身(递归调用可用到)
    arguments.callee();//将会调用函数本身

**递归调用**
斐波拉契数列
1,1,2,3,5,8,13,21......
f(n)=f(n-1)+f(n-2);


**return**

1. 终止当前函数的执行
2. 如果return后有值，则将这个值返回函数执行的地方。
  函数执行完成后，如果没有返回值，将会返回undefined.
3. 将内容输出在控制台console.log(语句)


**扩展**
* JS执行为单线程，运算速度比较慢
* function test(){
      var a=b=c=10;
      console.log(a,b,c)
    }
    test();//
    console.log(a,b,c)//a is not defined
    console.log(b,c)  //b、c此时为全局变量
* 调试台进入某个函数里，按F11


    