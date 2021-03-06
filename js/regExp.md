正则表达式(Regula expression)
---
**描述字符模式的对象**
作用：模匹配和文本检索与替换。

####创建
+ var reg= /匹配字符/
+ var reg = new RegExp(匹配字符)

####支持正则表达式的字符串方法
1. search: 
    str.search(reg)
    返回第一次匹配时所在的索引值，如果匹配不成功，则返回-1
2. match 
    str.match(reg)
    默认匹配字符串，并返回一个数组
        0:所匹配的字符
        index:匹配第一个字符所在的索引
        input:对字符串的引用
    全局匹配(g)，返回一个匹配所有字符串的数组。 
3. replace 替换
    str.replace(reg) **原始值不会变化，需要赋值给新的变量**
4. split
5. exec()用法用match相似，不同之处在于，在全局匹配下，每进行一次匹配，均返回匹配到的字符所在字符串的索引。当匹配不到时，返回null

####匹配规则
1. 所有的字母和数字都是按照字面量进行匹配，和字符串匹配等效。
2. 字符类
    + \s :代表一个空格
    + \S :代表除空格以外所有的unicode字符 [^\s] 
    + .  :除换行符和其他unicode终止符以外的任意字符
    + \w :代表数字、字母和下划线组成的字符 [0-9a-zA-Z_]
    + \W :与\w相反，任何非数字、字母和下划线字符 
    + \d :代表数字
    + \D :非数字 [^0-9] 或 [^\d]
3. 特殊符号    
    **表示数量，对前一个字符计数**

    + *:代表0个或更多个sa
    + +:1个或以上
    + ?:代表0个或1个
    + {n}:代表n个
    + {n,m}:匹配n个到m个的数字
    + {n,}:匹配n个或更多
    
    **锚点定位**

    + ^:表示以什么开头
    + $:表示以什么结尾

    **其他** 

    + []:代表里面的任意单个字符
        -:代表范围,如[0-9],[a-zA-Z]
        ^:写在方括号里面,代表非。如：[^0-9]
    + ():表示分组，分组尽量少
        $1:表示第一个分组
        $n:表示第n个分组
        \n:在正则分组后面使用，表示对第n个分组的引用
       (?:exp)  匹配exp,不捕获匹配的文本，也不给此分组分配组号
        使用方法：
        + 在表达式之外：str.replace(/(\d+)[a-Z]+/,"$1")
        + 在表达式内：/(\d)\w\1/
        **分组顺序为左括号顺序，无关嵌套。**
        + | :表示或
        
    + \ :表示转义
    + / :正则外符号
    + <\/?\w+[^>]*>/gi:匹配所有的HTML标签 
   