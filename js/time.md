时间/日期
---

####创建时间
+ var now=new Date();不带参数
+ var now=new Date('2016/3/20 8:00');带参数
+ var now=new Date(1456848000000)

####时间的方法
+ var now=Date.parse('2016/3/2');返回2016/3/2到1970/1/1零时的毫秒数
+ var now=Date.now();当前时间距1970/1/1零时的毫秒数
+ now.getFullYear():得到当前日期的年份;
+ now.getMonth():得到当前日期的月份;(返回0-11)
+ now.getDate():得到当前日期是几号;
+ now.getDay():得到当前日期是周几(返回0-6)
   **转换为星期日~星期六的方法：**
   新建一个数组,访问对应的索引
   var week=['星期日','星期一','星期二','星期三','星期四','星期五','星期六']

+ now.getHours():得到小时
+ now.getMinutes():得到分钟
+ now.getSeconds():得到秒数
+ now.getTime():获取某个日期自1970年1月1日以来的毫秒数
+ now.toDateString();星期、月、日、年
+ now.toTimeString();时分秒、时区
+ now.toLocaleDateString();
+ now.toLocaleTimeString();


####时间的设置
+ now.setFullYear(2015);将年份设置为2015年，日期与当前时间一样，星期随着年份的变化而变化;下同
+ now.setMoth(3);将月份设置为4月份
+ setDate(25)
+ setHours()、setMinute()、setSeconds()、setTime()
+ 星期不能设置


####定时器！important
**setInterval(fn,time)**

+ fn:为一个函数
+ time：每隔多长时间执行一次fn，单位为毫秒，无限执行,除非清除定时器
+ 清除定时器:clearInterval(timer)
    timer为setInterval()的标识




####延时执行
**setTimeout(fn,time)**
+ fn:为一个函数
+ time：多少毫秒后执行fn，仅执行一次
+ clearTimeout(timer)：清除延时器


####注意
+ 所有通过new ()方法创建出来的数据类型都是对象 