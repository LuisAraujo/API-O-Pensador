startAPI("Steve Jobs");

//Insert your logic here
function APIready(dados){

    $("#title").text("Frases de Steve Jobs em O Pensador");
	sound = document.getElementById("sound-whatsapp");
	jsonDados = JSON.parse(dados);
	

	
	idmsg = 0;
	loaded = false;
	
	func =  setInterval(function(){
		if(jsonDados[idmsg]){
		    if(!loaded){
				$("#body-whats").html("");
				loaded = true;
			}
		    var d = new Date();
			sound.play();
			$("#body-whats").append("<div class='seta'></div>"+
			"<div class='frase'>"+
			"<div class='body-frase'>"+jsonDados[idmsg++]+"</div>"+
			"<div class='meta-frase'>"+d.getHours()+":"+d.getMinutes()+"</div>"+
			"<d/iv>");			

		}else
		   clearInterval(func);
		   
	}, 5000);

}