jQuery(document).ready(function() {
		$.ajax({
			url:"http://localhost:8000/text.txt",
			cache: false})

  .done(function( html ) {
    	$("#text").append( html );
  });

  	$("#button").click(function() {
  		$.ajax({
  			url:"http://localhost:8000/text2.txt",
			cache: false})
  		.done(function( html ) {
  			$("#text").html( html );
  		});
  	});

});