function img_Random(){
	
	var img_to_change = document.getElementById("img_changer");
	var n_random = Math.floor((Math.random() * 5)+1);
	var name_element = "element"+n_random.toString();
	var img = document.getElementById(name_element).innerHTML;
	var element = '<img src="' + img + '"/>';
	img_to_change.innerHTML = element;
};

img_Random();
