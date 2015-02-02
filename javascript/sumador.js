function suma(){
	 var operacion = document.getElementById("op");
	 operacion = operacion.innerHTML;
         var oplist = operacion.split('+');
	 var result = parseInt(oplist[0]) + parseInt(oplist[1]);
	 var res = document.getElementById("res");
         res.innerHTML = "="+ result.toString();
};


function aleatorio(){
	var num1 = Math.floor((Math.random() * 100000) + 1);
    var num2 = Math.floor((Math.random() * 100000) + 1);
    var op = document.getElementById("op");
    	op.innerHTML = num1 + "+" + num2;
};