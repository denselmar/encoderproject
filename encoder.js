//for echo
var letters = {
  64:"z",
  65:"a",
  66:"b",
  67:"c",
  68:"d",
  69:"e",
  70:"f",
  71:"g",
  72:"h",
  73:"i",
  74:"j",
  75:"k",
  76:"l",
  77:"m",
  78:"n",
  79:"o",
  80:"p",
  81:"q",
  82:"r",
  83:"s",
  84:"t",
  85:"u",
  86:"v",
  87:"w",
  88:"x",
  89:"y",
  90:"z"
}

$("#inputText").keyup(function(e) {

 //radio buttons

 if ($("input:checked").val()== "echo") {
document.getElementById("textArea").innerHTML += letters[e.keyCode];

} else if ($("input:checked").val()== "caesar cipher") {
document.getElementById("textArea").innerHTML += letters[e.keyCode - 1];

} else if ($("input:checked").val()== "heiroglyphics") {
var hieroglyphicsString = "<img src = 'images/heiroglyphics/"  + letters[e.keyCode] + ".gif'>"
document.getElementById("textArea").innerHTML += hieroglyphicsString ;
}

});

//radio button check
$("input[type='radio']").click(function() {
$("input:checked").prop('checked', false);
$(this).prop('checked', true)
});
