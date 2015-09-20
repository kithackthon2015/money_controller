var arg = new Object;

function showRemaining(){
	var pair=location.search.substring(1).split('&');
	for(var i=0;pair[i];i++) {
		var kv = pair[i].split('=');
		arg[kv[0]]=kv[1];
	}

	$("#showId").append(arg.Id);
}

var url;

$(document).on("click","#sendRemaining",function(){
	url = location.href;
	if(url.indexOf('pulldown') == -1){
		url += '&' + 'pulldown' + '=' + $("#posShow").val();
	}

	window.location = url;
	// alert(arg.pulldown);

});
