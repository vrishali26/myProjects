AjaxFactory = {
	create: function (method, url, async){
	try{
		xhr=new XMLHttpRequest();
	}catch(e){
		xhr=new ActivexObject("Microsoft.XMLHTTP");
	}
	xhr.open(method, url, async);
	return xhr;
}
}