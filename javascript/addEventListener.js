
txt = document.getElementById("form");
output =  document.getElementById("echo");
txt.addEventListener("input",function echo(){

	output.innerHTML = this.value;});




