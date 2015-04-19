var github;
var token;
jQuery(document).ready(function(){
	$('#search_button').click(function(){
		github = new Github({
  		token: document.getElementById("token_input").value,
  		auth: "oauth"
		});
	});
});
