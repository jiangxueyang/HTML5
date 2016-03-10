字符串
---

####新建字符串
+ var str="我" typeof str2 ==> string
+ var str2=new Sring("我")  typeof str2  ==>object
  **通过new 方式新建的变量，都是对象。
  str==str2 ==>true 内部会进行隐式转换

####字符串的属性
+ length:字符串的长度，只读，不能修改 **数组的可修改**


####方法
+ charAt(index):返回index对应的字符 str.charAt(index)
  **str[index]**与之等价，是ES5的方法，部分浏览器不支持。
+ charCodeAt(index):返回index对应的字符的编码
+ String.fromCharCode(unicode):charCodeAt(index)的反编译
    静态方法
+ Number.toString(2)==>转换为二进制数字；
+ split():字符分割，返回数组
    str.split(","):","逗号为分割符。
+ toLowerCase:转换成小写
+ toUpperCase:转换成大写
+ 字符串截取
    * substring(start,end):不支持负数。不包括end所在字符，下同
    * substr(start,length):支持负数。
    * slice(start,end)类似substring()相似，支持负数


####字符串查找
+ indexOf()/lastIndexOf()返回索引值
+ search() 返回索引值
+ match() 匹配字符，并返回数组
+ replace(被替换的字符，新字符)   替换



####正则表达式
+ 新建：var reg=/匹配字符/
+ g:global 匹配所有
+ i:ignore 忽略大小写。可与g一起使用






####注意

+ 只读的概念：不可修改，只显示。
    * 如form表单中，输入框不修改，可加上readonly
    * readonly 只读(输入框内的元素可选取)
    * disabled 禁用，背景变灰，输入框内的元素不可选取
+ < input type = "number" min="1" max="100"/>
  输入框只准输入整数,可设定最小值和最大值