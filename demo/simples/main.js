startAPI("Steve Jobs");

//Insert your logic here
function APIready(dados){
    	
   jsonDados = JSON.parse(dados);
  
   for(var val in  jsonDados){
		     $("#list").append("<li>"+jsonDados[val]+"</li>");			
   };
	
}