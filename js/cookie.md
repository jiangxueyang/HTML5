cookie(会话存储)
---

####特点
1. 保存方式
    以文本文件保存，不能存放重要信息
2. 读取文件 
3. co


####cookie操作
1. 设置
    * document.cookie="属性名=属性值"
    * 每次只能保存一个cookie,只要名字不一样，就不会
2. 读取
    var cookie = document.cookie;得到字符串 "left:100;top:300"
    若为空，则返回空的字符串"";
3. 添加
    格式：<cookie名=cookie值> 
    完整格式： <cookie名>=<值>;expires=失效时间;domain=域名访问;
    失效时间与域名可选 
4. 限制
    + 每个cookie所存放的数据不能超过4kb,如果cookie字符长度超过，属性将返回空字符串；
    + chrome和safari没有对cookie个数的限制，一般浏览器限制50个。
    + 在同一路径下的网页
5.