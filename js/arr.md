数组
---

####概念

* 一系列数据的集合

####创建方式

+ 方法1:var arr=[];//常用、**直观**
+ 方法2:var arr=new Array();
    arr[0]=1;arr[1]="true";.....
+ 方法3:var arr=new Array("html","h5","1601")


####访问

+ 下标：通过下标（索引）取数组里的数据,从0开始 。
+ arr[1]

####数组方法

+ push():往数组最后加入内容；arr.push(内容) 返回加入的内容 
+ unShift():往数组最前面加入内容；返回加入的内容
+ pop():删除数组最后面一个元素；返回新数组的长度
+ shift():删除数组第一个元素；返回新数组的长度
+ splice(start,deleteNum,items)：添加、删除
    + star:从哪个索引开始
    + deleteNum: 删除个数
    + items:添加的内容
    + var b=a.splice(4,1);//返回被删除的元素。b也会变化 
+ slcie(start,end):返回数组的片段或子数组。从start开始，到end( 
  不包括end对应的元素)
+ join("隔开符"):把数组转换成字符串
   arr.join("字符") 每个元素中间都会链接'字符'
   "字符"+arr  //与上join类型，都会将arr转换成字符串。隐式转换：arr.toString();
   即 arr+""  与 arr.join("") 实现在的效果一样
+ sort():对数组进行排序//默认数组里的元素全为字符串，并根据ASCII码排序
    用法：
    arr.sort(函数)
+ reverse()：将数组进行倒序 arr.reverse()
+ concat()返回一个新数组，这个数组是由两个数组合并而成的
    arr.concat(arr1)
+ **ES5新方法//IE8及以下浏览器不支持**
    + forEach(val,idx,arr): 遍历数组
      var arr=[1,2,3,4,5];
      arr.forEach(function(val,i){
         console.log(val);
      })
    + map 会生成一个新的数组 
      var arr2=arr.map(function(val,i){
         return val*val
      });
    + filter 过滤数组，会返回一个数组
      var arr3=arr.filter(function(val,i){
        return val<4;
      })
    + indexOf() 从头开始查找字符对的索引值
      arr.indexOf(3) ==>2 
      arr.indexOf(8) ==>-1 //查找不存在的元素返回-1
    + lastIndexOf()从最后开始查找字符
    + Array.isArray()//判断是否为数组
      Array.isArray(arr) 返回布尔值


####冒泡排序 (面试问题)
function sort(elements){
 for(var i=0;i< elements.length-1;i++){
  for(var j = 0; j< elements.length-i-1;j++){
   if(elements[j]>elements[j+1]){
      var swap=elements[j];
      elements[j]=elements[j+1];
      elements[j+1]=swap;
   }
  }
 }
}

####快速排序(面试问题)
var a=[85, 24, 63, 45, 17, 31, 96, 50]
 function quickSort(arr){
  
  if(arr.length<=1){
    return arr;
  }
  else{
    var pivotIndex=Math.floor(arr.length/2);
    var pivot=arr.splice(pivotIndex,1)[0];
    var left =[];
    var right=[];
    for(var i=0;i<arr.length;i++){
      if(arr[i]<pivot){
        left.push(arr[i]);
      }
      else{
        right.push(arr[i])
      }
    }
  }
  return arguments.callee(left).concat([pivot], arguments.callee(right));
}



*以上仅属于数组的方法*



####数组的遍历

1. for(var i=0;i < arr,length;i++){
        console.log(arr[i])
    }//多用于数组的遍历

2. for(var i in arr){
        console.log(arr[i])
    }//多用于对象的遍历



对象(键/值)
---

####形式
var data={name:"小明",age:18,sex:"男"}
+ name,age,sex叫做对象的属性，也可叫做键；
+ '小明',18,'男'叫做属性值；

####创建方法
1. 直接创建
    var data={name:"小明",age:18,sex:"男"}
2. var school="XX中学"
   var data={name:"小明",age:18,sex:"男",xuexiao:school}
3. var data=new Object();类似 new Array();
4. 更标准的写法：
    var data={"name":"小明","age":18,sex:"男","xuexiao":school,
        "line-height":180}
    键名使用引号可允许写入任何字符。//"-"原本是不规范的写法
 

####对象的属性操作
1. 添加/修改属性
    data["married"]=false;
    data.weight="80Kg"
2. 删除属性
    delete data.name;

####对象属性的访问
1. 点语法：data.name //已经固定死，不可变
2. data['name'] //方括号里的属性名可变
3. 访问不存在的属性，返回undefined;

####对象的遍历
for(var i in data){
    console.log(data[i]);
}  //只可使用方括号语法，不可使用点语法

####对象与数组的类型判断
*typeof 不能区别数组与对象类型，均返回object*
**indtanceof 对象类型检测，返回布尔值**
* 检测是否为数组
    arr instanceof Array;
* 检测是否为对象
    data instanceof Object;
* 检测基本数据类型用typeof

**数据类型**
基础类型(字符串、布尔类型、数值类型)
引用类型(对象、数组)
+ 数据的索引存储在栈中，数据实际存储在堆中
+ var arr=[1,2,3]
  var arr1=arr
  console.log



####注意
+ 对象里的属性没有顺序之分，即没有索引，只有键名；
