//Saltos
let offset = document.getElementById("offset");
//Texto 
let string = document.getElementById("first");
let stringDe = document.getElementById("second");
//botones
let encode = document.getElementById("encode");
let decode = document.getElementById("decode");
let result = document.getElementById("result");




//cifrado.addEventListerner={}
encode.addEventListener("click", cipherFun);
function cipherFun () {
  result.innerHTML = window.cipher.encode(string.value, offset.value);
}

decode.addEventListener("click", decipherFun);
function decipherFun () {
  result.innerHTML = window.cipher.decode(stringDe.value, offset.value);
}
