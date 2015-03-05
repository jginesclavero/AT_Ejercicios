jQuery(document).ready(function() {
	
  	$("#button").click(function() {
  		$.getJSON( "txt.json", function( data ) {
        texto = $("#text");
        texto.html("<p>" + data.name + "</p>");
       });
    });
});

