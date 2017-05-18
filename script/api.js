/**
* List phrases of author
* @namespace
* @type {JSON}
*/
var listPhrasesJSON;

/**
* Name of Author
* @namespace
* @type {array}
*/
var author = "";

/**
* This method start API
*@function
* @name startAPI
* @param author {string} name of author
*/
function startAPI(author){
     //replace _ in space
	 
	author = author.replace(" ", "_");
    
	
	//Setting name
	setAuthor(author);

     //Start getData
     getData(setListPhrasesJSON);

    return listPhrasesJSON;

}

/**
* Method get data of PHP page with Ajax
* @function
* @name getData
* @exemplo
* getData();
* @param {function} cd - The callback has data of page
*
*/
function getData(cb){

    var dados;
	console.log(getAuthor());
    $.ajax({
        type: "POST",
        url: "getSite.php?autor="+getAuthor(),
        dataType: "html",
        data:dados,
        contentType: "charset=UTF-8",
        success:cb,
        error: erroAjax
    }); 
}



function erroAjax (XMLHttpRequest, textStatus, errorThrown){
    $("#body").append("Erro: "+XMLHttpRequest.responseText);
};

/**
 * Set value in variable etListPhrasesJSON and call APIready
 * @function
 * @name etListPhrasesJSON
 * @param {html} param - data of page
 */
function setListPhrasesJSON(param){
    listPhrasesJSON = "";
		
	listPhrasesJSON += parser(param);
	
	
    //call when ready
    APIready(listPhrasesJSON);

}

/**
* Set name of author
* @function
* name setAuthor
* @param {string} param - name of author
*/
function setAuthor(param){
    author = param;
}

function getAuthor(){
	return author;
}

/**
 * Print JSON in page html
 * @function
 * @name printScreen
 */
function printScreen(){
    $("body").html( getTableOfWater());
}

/**
 * Get value in ListPhrasesJSON
 * @function
 * @name getListPhrases
 * @return {JSON} data of list phases 
 */
function getListPhrases(){
    return listPhrasesJSON;
}

/**
*Get data of 'o pesador' site in HTML and save in listPhrasesJSON
* @function
* @name parser
* @return {JSON}  list phrase of author
*/
function parser(html){

    authors_target = trim(getAuthor().toLowerCase().replace(" ","_"));
	authors_return = "";
	authors_split = authors_target.split("_");
	console.log(authors_target, authors_split.length);
	for(i=0; i<authors_split .length; i++){
	    
		if(i>0)
			authors_return += " ";
		
		authors_return +=  authors_split[i].charAt(0).toUpperCase() + authors_split[i].slice(1);
		
	}
			
    returnJSON = "{'author': '"+authors_return+"', phrase: {";
	listPhrases =  $(html).find(".phrases-list");	
	phrases = $(listPhrases).find("div");
	contphrase = 0;
	
	  for(i = 0; i < phrases.length; i++){
	      		
			individualPhrase = $(phrases[i]).find(".frase.fr");
			
			if(individualPhrase.length){
				//console.log( individualPhrase.text());
				aut = $(phrases[i]).find(".autor").text();
				authors = trim( aut.toLowerCase().replace(" ","_") );
				
				console.log(authors, authors_target);
				
				if( authors == authors_target ){
					if(contphrase > 0)
						returnJSON +=","; 
			        
					contphrase++;
				    returnJSON += " '"+individualPhrase.text()+"'"; 
				}
		    }
	};
	
	   returnJSON +="}}"; 
	   
	  
	   
	   return returnJSON;
	
};


/**
 * Delete empty spaces
 * @function
 * @name trim
 * @param str {String}
 * @returns {XML|string|void|*}
*/
function trim(str) {
  	return  str.toString().replace(/^\s+|\s+$/g,"");
	
}
 
