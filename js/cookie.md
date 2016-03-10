cookie(会话存储)
---

####特点
1. 保存方式
    以文本文件保存，不能存放重要信息
2. 读取文件 
3. co


####存储
1. 设置
    * document.cookie="属性名=属性值"
    * 每次只能保存一个cookie,只要名字不一样，就不会
2. 读取
    var cookie = document.cookie;得到字符串
    "left:100,top:300"