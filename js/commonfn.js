//生成某个范围内的随机整数
function getRandom(min,max){
	return parseInt(Math.random()*(max-min+1)+min);
}

//生成一个n位数
function hundredD(n){
	var dig=String(getRandom(1,9));
	for(var i=1;i<n;i++){
		dig+=getRandom(1,9);
	}
	return dig;
}

//冒泡排序	
function maopao(){
	var a=[12,1,4,31,5,3,43,6,5,78,43]
	var len=a.length;
	for(var i=0;i<len-1;i++){
		for(j=0;j<len-i-1;j++){
			if(a[j]>a[j+1]){
				var temp=a[j];
				a[j]=a[j+1];
				a[j+1]=temp;
			}
			document.write(a+"<br/>");
		}
		document.write("<br/>");
	}
}
// 快速排序
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



//去重
function noRepeat(arr){
	var tempArr=[]
	for(var i=0;i<arr.length;i++){
		if(tempArr.indexOf(arr[i])==-1){
			tempArr.push(arr[i]);
		}
	}
	return tempArr;
}


//斐波拉契数列中的某一项  用递归方法
function fab(n){
	if(n<3){
		return 1;
	}
	else{
		return fab(n-1)+fab(n-2);
	}
}
//斐波拉契数列中的某一项  用for循环
function fab2(n){
	var a=1,b=1,res;
	if(n<=2){
		res=1;
	}
	else{
		for(var i=3;i<=n;i++){
			res=a+b;
			a=b;
			b=res;
		}
	}
	return res;
}


/*================================定时器  实时显示时间========================================*/
function getTime(){	 //封装获取时间函数		
	var now=new Date();
	var year=now.getFullYear();
	var month=now.getMonth();
	var date=now.getDate();

	//转换星期 
	var week=now.getDay();
	var weekArr=['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];

	var hours=now.getHours();
	var minutes=now.getMinutes();
	var seconds=now.getSeconds();


	console.log("今天是："+year +"年"+ (month+1) +"月"+ date +"日" + " "+weekArr[week]
	 	+" " + hours +":"+minutes+":"+ seconds)
	
}
/*getTime();//防止页面一秒后才加载时间

setInterval(getTime(),1000)*/

/*================================定时器 实时显示时间  over========================================*/


/*================================封装 事件监听器函数========================================*/

function addEvent(ele,type,fn,capture){
	capture = capture || false;
	//判断ele是否为ID
	if(typeof ele ==="string"){
		ele = document.getElementById(ele);
	}
	if(ele.addEventListener){
		ele.addEventListener(type,fn,capture);
	}
	else{
		ele.attachEvent('on'+type,fn)
	}
}
/*================================封装 事件监听器函数over ========================================*/

function getStyle(ele,attr){
	//判断ele是否为ID
	if(typeof ele ==="string"){
		ele= document.getElementById(ele);
	}

	var eleStyle = window.getComputedStyle ? getComputedStyle(ele) : ele.getCurrentStyle ;
	return eleStyle[attr];
}




/*
	动画函数
 */
function animate(ele,opt,callback){
	time = opt.time || 50;
	if(ele.animated) return;
	ele.animated = true;

	// 开始动画
	var timerList = {length:0};
	for(var attr in opt){
		(function(attr){
			// 为每个属性设一个定时器
			timerList[attr] = setInterval(function(){
				//当前样式
				var currentStyle = parseFloat(getStyle(ele,attr));
				var speed = (opt[attr] - currentStyle)/8;
				speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);

				if(currentStyle == opt[attr]){
					clearInterval(timerList[attr]);
					delete timerList[attr];
					timerList.length--;
					if(timerList.length == 0){
						ele.animated = false;
						typeof callback === 'function' && callback();
					}
					return;
				}
				if(attr == "opacity"){
					obj.style.opacity = (currentStyle+speed);
					obj.style.filter = "alpha(opacity="+(currentStyle+speed)*100+")";
				}else{
					ele.style[attr] = currentStyle + speed + 'px';
				}
			},time);
			timerList.length++;
		})(attr);
	}
}



/*=====================================cookie=================================================*/

//获取设置cookie
function setCookie(name,value,expires,domain){
	document.cookie = name+"="+value;
	if(expires){
		document.cookie  += ";expires=" + expires;
	}
	if(domain){
		document.cookie  += ";domain=" + domain;
	}
}



// 取cookie中的属性值 
function getCookie(attr){
	var cookie = document.cookie;
	var cookies = cookie.split("; ");
	var cookieObj = {};
	for(var i=0;i<cookies.length;i++){
		var _obj = cookies[i].split("=");
		cookieObj[_obj[0]] = _obj[1];
	}
	return cookieObj[attr];

}


//删除cookie
function removeCookie(name){
	var now=new Date();
	document.cookie = name + "=" + "0;expires=" + now; 
}
/*=====================================cookie over=================================================*/




