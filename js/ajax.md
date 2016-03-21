ajax
---

####概念
+ 全称：Asynchronous Javascript And Xml
+ 核心技术：XMLHttpRequest对象(简称XHR)
+ 最时出现在google的下拉提示
+ 异步:与其他操作同时执行，也叫并发
+ 同步:按步骤顺序执行，前面的代码执行完后，后面的代码才能执行

####事件
var ele=new XMLHttpRequest();
+ ele.onreadystatechange 当对象的状态改变时执行此事件

+ ele.open(type,url,true)
    配置请求方式路径，建立客户端和服务端的连接
    + get:请求的类型，常用get/post;
        get请求会将信息显示在路径的后面
    + url:请求的地址(只能请求同域URL)
        同域：请求的路径协议、域名、端口必须一至
    + async:是否异步发送请求（true表示为异步请求，false表示同步请求/阻塞）
+ ele.send(data)发送ajax请求
    data:可选参数,表示发请求时传送的数据字符串,（在某些浏览器中，如果不需要通过请求主体发送数据，则必须传入null）


####属性
+ ele.readyState：请求状态
    * 0 (未初始化),尚未使用open方法 
    * 1 (启动)已经调用open()方法，但未调用send方法
    * 2 (发送)已经执行send()方法，但尚未接收到响应
    * 3 (接收)已经接收到部分响应数据
    * 4 (完成)响应内容解析完成，可以在客户端调用了。
    * 整个过程是与服务器连接的过程，所有状态完成后，请求关闭。
只要readyState 属性的值由一个值变成另一个值，都会触发一次readystatechange 事件。必须在调用open()之前指定onreadystatechange事件处理程序才能确保跨浏览器兼容性。

+ responseText:作为响应主体被返回的文本
   ele.responseText
+ status：响应的HTTP状态
    ele.status 返回两个状态码 ：
    * 404 
    * 200-299都是成功状态
    * 304：数据已经存储在缓存中

####ajax请求的特点
1. 局部刷新

####json数据转换方法
1. eval(重新运算求出参数的内容,功能太强大)
    它的作用是，将一个普通的json格式的字符串，转换成Json格式的对象
    使用方法：eval("("+json字符串+")")
2. JSON.parse()代替方法把JSON字符串转成JSON对象
    格式要求:
    * 对象中所有的键名必须用双引号
    * 对象必须用单引号包括
3. JSON.stringify(); 把JSON对象转成JSON字符串
    与JSON.parse()互为反操作,一般用于将数据传递到后端
   
####跨域
