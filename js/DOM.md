DOM
---
**Document Object Model(文档对象模型)，是针对HTML和XML文档的一个API。**

####节点类型（共9种，常用3种）
+ 检测节点类型 node.nodeType
+ 标签节点:1 常用
+ 属性节点:2 常用
+ 文本节点:3 常用
+ 注释节点:8
+ 文档节点:9


####节点获取方式
1. document.getElementById();
    //通过ID获取节点元素，返回一个节点元素，获取元素速度最快
2. (document或其他类型的节点).getlementsByTagName();
    //通过标签名获取一组节点元素，返回一个类数组。
3. (document或其他类型的节点)getElementsByName();
    //通过标签name属性获取节点元素，类似TagName，常用于form表单
4. (document或其他类型的节点)getElementsClassName();
    //通过标签的class属性获取节点元素，类似TagName，低版本的浏览器不支持此用法 






####节点的属性
+ nodeType 获得节点的类型
+ nodeName 获得节点的名称/标签名，返回大写标签名
+ nodeValue 设置或返回节点的值，只针对文本节点
+ innerHTML 
+ className:节点class属性的修改/添加/删除 
    node.className='fixed' 为元素node添加类名：fixed;
    node.className="" 删除元素node的类名

####节点的修改
1. 内容的修改(增加)：innerHTML=
2. 属性的修改(增加)：
    list[i]["属性"]="内容" || list[i].属性="内容"
3. 节点的添加：
    parent.appendChild() 向节点的子节点尾部添加一个新的子节点
    parent.insertBefore(new,node) 在指定的子节点node前插入新的子节点new

4. 节点的新建：
    document.createElement("节点名/标签名"):创建一个元素节点
5. 删除子节点：
    element.removeChild(指定的节点) 

####获取节点关系
+ 获取子节点
    e.firstChild  获取第一个子节点
    e.lastChild   获取最后一个子节点
    e.childNodes  获取所有子节点   
+ 获取父节点
    e.parentNode  当前对象的父元素
+ 获取兄弟节点 
    e.nextSibling 获得e元素的下一个兄弟节点
    e.previousSibling 获得e元素的上一个兄弟节点

####元素节点操作（仅针对HTML，更实用）
1. 元素属性
    + children 得到的仅只有hmtl元素节点
2. 方法 
    + element.getAttribute(属性名) 获取元素某个属性值 
    + element.setAttribute(属性名,属性值)= 设置。。。可添加html原不存在的属性


####事件


####方法 
+ focus():让输入框得到焦点事件(方法),适用能获得焦点的任何元素
+ e.stopPropagation();阻止事件传播(阻止冒泡)
+ 获取外部样式 ：
    标准:getComputedStyle(element,:伪类) 获取外部样式
    IE8-:currentStyle（IE特有）element.currentStyle.样式属性名
    **兼容写法：**
    var eleStyle = window.getComputedStyle ? getComputedStyle(element): element.currentStyle;
    获取某属性名：eleStyle.属性名

####扩展

+ this表示当前对象
+ **自定义属性**
  若要在标签中添加html原来不存在的属性，可使用data-属性名(必须以data-开头)
+ return false可阻止事件冒泡