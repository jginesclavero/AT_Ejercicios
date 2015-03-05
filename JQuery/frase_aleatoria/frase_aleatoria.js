jQuery(document).ready(function() {
  var list=[];
  $.getJSON( "frases.json", function( data ) {
    list = data.list;
    generasentense();
    $("#another").click(generasentense);
    });

  function generasentense(){ 
      var newwords = [];
      for(var i=0;i<list.length;i+=1){
          newwords.push(list[i][Math.floor(Math.random() *list[i].length)]);
      }
      $("#sentence").html(newwords.join(" "));
  }
});