function headhead(){
	console.log("hello head");
var  hq_str_GBPUSD ="";
  var scr = document.createElement('script');
  scr.src = "http://hq.sinajs.cn/list=sz000002";
  scr.type = "text/javascript";
 document.head.appendChild(scr);

}




$(document).ready(function() {
/*	$.get("http://hq.sinajs.cn/list=sz000760",function(data){
		console.log(data);
	})*/
document.domain="hq.sinajs.cn";
console.log(hq_str_sz000760);
var elements=hq_str_sz000760.split(",");
console.log("current price:"+elements[3]);


var xhr = new XMLHttpRequest();
xhr.open("GET", "http://hq.sinajs.cn/list=sz000002", false);
xhr.setRequestHeader('Content-Type', 'jsonp');
//xhr.setRespondHeader("Access-Control-Allow-Origin", "*");
xhr.send();
//xhr.setRespondHeader("Access-Control-Allow-Origin", "*");
console.log(xhr.status);
//xmlDocument = xhr.responseXML;
//console.log(xmlDocument.textContent);



})


