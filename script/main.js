
var sPageURL = decodeURIComponent(window.location.search.substring(1));
console.log(sPageURL);
sURLVariables = sPageURL.split('=');

if(sURLVariables[0] == 'author')
	//Staring API
	startAPI(sURLVariables[1]);

//Insert your logic here
function APIready(dados){
    $("#body").append(dados);	 
	console.log(dados);
}