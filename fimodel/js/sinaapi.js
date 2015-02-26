$(document).ready(function() {
/*	$.get("http://hq.sinajs.cn/list=sz000760",function(data){
		console.log(data);
	})*/
console.log(hq_str_sz000760);
var elements=hq_str_sz000760.split(",");
console.log("current price:"+elements[3]);

var  hq_str_GBPUSD ="";
  var scr = document.createElement('script');
  scr.src = "http://hq.sinajs.cn/list=GBPUSD";
 document.head.appendChild(scr);
console.log(hq_str_GBPUSD);

})