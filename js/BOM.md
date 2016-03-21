BOW
---
**Browser Object Model:浏览器对象模型，各种浏览器不兼容的根源所在。**

---

###window对象
+ window具有双重角色，即是js访问浏览器窗口的一个接口，也是ECMAScript中规定的Global对象。
+ 定义在全局环境中的变量都会成为window对象的属性。
+ 把变量定义在函数本里，可以有效减少全局环境下的命名冲突;
+ window对象可以在代码中省略；如window.alert()可写成alert()
+ 通过var 在全局作用域中声明的变量，无法删除。

###window属性
+ screenLeft(谷歌) || screenX(火狐):返回浏览器在电脑屏幕中的位置(距离左侧);
    兼容写法：var scrLeft=screenLeft || screenX;
+ screenTop(谷歌) || screenY(火狐):返回浏览器在电脑屏幕中的位置(距离顶部);
+ innerHeight||innerWidth:网页的可视区域尺寸
+ outerHeight||outerWidth:整个浏览器窗口的可视区域尺寸



###window方法
+ moveTo(x,y):把当前窗口移动到X,Y;很多浏览器都限制此方法。IE支持
+ moveBy(x,y):移动窗口位置，支持负数，在原来的基础上加x,y
+ resizeTo(x,y):改变窗口大小
+ resizeBy(x,y):在原来的窗口大小上改变窗口大小，支持负数
+ close():关闭窗口
+ window.onbeforeunload(fn)关闭执行
+ window.onunload():页面未加载时执行。
+ window.open(url,""):打开一个新的窗口
    用法：window.open("http:/www.baidu.com","baidu",
    "width=500,height=300",location)


###window系统对话框
+ confirm("内容"):有确认与取消两个按键
    确认：返回true;取消：返回false
+ prompt("问题",默认值):弹出输入框，输入框上显示默认值
    若输入框无内容，则返回null；若有内容，则返回消息。

###window对象常用事件
+ onload :页面资源全部加载完后触发这个方法
    防止window.onload覆盖，先取值，后赋值
    var windowLoad = window.onload;
    window.onload=function(){
        //如果原来有绑定window.onload事件，则先执行
        if(typeof window.onload==="function")
            windowLoad();
    }
+ onscroll:滚动窗口滚动条时触发 
    window.onscroll=document.onscroll=函数(滚动条条触发时执行函数)
+ scrollTop//scrollLeft
    标准：document.documentElement.scrollTop
    chrome:document.body.scrollTop
    **兼容写法**
    var scrolltop=document.documentElement.scrollTop || document.body.scrollTop
    设置返回滚动条滚动到的垂直位置（像素），若不支持则返回0 
    返回顶部：document.documentElement.scrollTop=0 || document.body.scrollTop=0 
+ window.onresize  窗口大小改变时
 
###location

####location 属性与方法
+ hash 设置或返回#开始的URL(锚);
+ host 设置或返回主机名和当前URL的端口号
+ hostname 设置或返回主机名
+ href 设置或返回完整的URL
+ pathname 设置或返回当前URL的路径（除了域名后的路径）
+ port 设置或返回当前URL的端口号
+ protocal 设置或返回当前URL的协议
    主要：http https ftp
+ search 设置或返回从?开始的UR部分
+ reload():让页面刷新

####history 方法与属性
+ back() 加载history列表中的前一个URL
+ forward()加载history列表中的后一个URL
+ go() 加载history列表中的某个具体页面
+ length 返回history列表中的URL数量

####navigator对象
**通常用于浏览器的检测
+ appName 浏览器名称
+ appVersion 浏览器版本
+ platform 操作系统
+ userAgent 用户代理信息
+ geoloaction 定位



