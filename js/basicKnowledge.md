一、JS变量命名知识
---

1. 驼峰命名法：var attributeName; | var attribute_name;
2. 变量的命名与函数的命名规则一样，共用一个存储。如：
    * var add;
    * function add();
    * 变量add将会被覆盖
  
二.数据类型
---
1. 基本数据类型：
    * 字符串(String)：用引号括起来的内容
    * 数字(Number):0-9
    * 布尔类型(Boolean)：true,false;
2. 引用数据类型
    * 对象(Object)
    * 数组(Array)
3. 特殊类型
    * 空对象(Null)
      未定义(Undefined)
    * NaN(not a number)不代表任何值，也不等于任何值，甚至自己都不等于，任何数据与它运算都返回NaN（运算只包括加减乘除）
      *isNaN()是否为非数字，返回布尔类型*
4. 数据类型判断
    * typeof
5. 数据类型的转换
    * String转Number：parseInt()，parseFloat，Number
      **parseInt()**可截取字符串前面的数字后面的字母或符号可忽略，如parseInt("434aa")，将会得到434。若以字母开头的字符串将会得到 NaN。
    * Number转Boolean：0和NaN对应false，其他为true
    * String 转Boolean：""空字符串对应false，其他为true
    * 隐式转换：逻辑运算、 关系运算、数学运算（如10+true  返回11）   
        **数学运算中，+偏向于进行字符串拼接，而减号（-）偏向于进行减法运算**

三、转义 
---
\r  换行  \t 制表符

四、自加减
---
++:自加1，只有变量才能实现自增;

--：自减1。

**例子：**
var num=10;
num++; ==>返回10（返回值为本身，并不为num）
num此时的值为11;

五、赋值
---
1. += num=num+1; num+=1; num++; 等价，但是返回值不一样。
2. /= 同+=
3. *= 同+=

六、关系运算（返回布尔值）     
---
* <、>、<=、>=、
* == 等于（会对数据类型进行隐式转换）；
* !=不等于
* === 恒等于（值与类型都相同）；
* !==不全等于

七、Math
---
* Math.random() 获取随机数
  得到一个0~1但不等于1的随机数
  得到一个1~100的随机数：parseInt(Math.random()*100)+1
* Math.round() 取整（四舍五入）
* Math.ceil() 向上取整
* Math.floor() 向下取整

八、switch语句
---
语法：
>switch(expresion){
    case 1:
      expresion1
      break;
    case 2:
      expresion2
      break;
    ...
    default:
      expresion N;  
  }

* case：当符合条件时，会从符合条件的那一条case语句开始，依次执行,每一个条件均用恒等于判断。
* break：语句可跳出switch语句或循环语句。
* default：当以上条件均不满足时，将会执行default中的语句


####扩展知识
* 用JS将一个div隐藏：<object data="" type="" class="style "\></object\>  display="none"
* 取整(把字符串转换成数字的常用方法)：parseInt( )或parseFloat( )
* 取小数点后一位 (Number).toFixed(1);
 .toFixed()取整；必须在Number数据类型后使用。(Number).toFixed(参数)；参数为    小数点位数，会自动四舍五入。
* lenght：字符串长度str.length
* **value与innerHTML的区别**
  value可以取输入框或下拉列表中的值，一般用于表单元素的获取；
  而innerHTML 则用于获取html中其他标签内的内容
* 执行函数：check() //check()为函数名。
* chrome浏览器中，F12→sources 展开文件，在行上**添加断点**（单击可添加） 。添加断点后，之后的代码在页面将不会执行。
* 获取当前的日期 var now = new Date();
