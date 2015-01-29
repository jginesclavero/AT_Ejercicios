function suma(){
	 var operacion = document.getElementById("op");
	 operacion = operacion.innerHTML;
         var oplist = operacion.split('+');
	 var result = parseInt(oplist[0]) + parseInt(oplist[1]);
	 var res = document.getElementById("res");
         res.innerHTML = "="+ result.toString();
};
