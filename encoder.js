$("#inputText").keyup(function(e) {
 var inputText = document.getElementById("inputText").value;
 document.getElementById("textArea").innerHTML = inputText;

 if ($("input:checked").val()== "echo") {
document.getElementById("textArea").innerHTML = inputText;

} else if ($("input:checked").val()== "caesar") {
document.getElementById("textArea").innerHTML = inputText;

} else if ($("input:checked").val()== "heiroglyphic") {
document.getElementById("textArea").innerHTML = inputText;

}

});

$("input[type='radio']").click(function() {
$("input:checked").prop('checked', false );
$(this).prop('checked', true )
});



//radio button check part 4
