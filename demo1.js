window.onload = function(){
	var canvas = document.getElementById("space");
	var ctx = canvas.getContext("2d");
	
}
var set;
function jalao(set){
	if(set === 1)
	document.getElementById("imageBulb").src = "glow.svg";
    else 
		if(set === 2)
			document.getElementById("imagefan").src = "fanchalao.gif";
}