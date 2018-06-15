
window.cipher = {



// función para encriptar llamada x el boton"encriptar"

  encode: () => {
  //Mostrar resultado
  let placeResult= document.getElementById("result");
  //Saltos dentro de un let para respetar numeros
  let jumptA=parseInt(jumpt.value);
  //Input text encriptar
  let encriptarA = document.getElementById("first").value.toLocaleUpperCase();
  let getCode = new Array(encriptarA.length );
  let applyAscci = new Array(encriptarA.length );
  let getNewLetter = new Array(encriptarA.length );
  //obtener letras de la palabra
  for(let i=0; i<encriptarA.length; i++){
  //obtener letras de codigo ascii
  getCode[i]= encriptarA.charCodeAt(i);
   if((getCode[i] >=65) && (getCode[i] <=90)) {
  //Se aplica la formula para conocer su nueva posicion en el codigo ascii 
    applyAscci[i]= (getCode[i]-65+jumptA)%26+65;
    //obtener encriptacion
    getNewLetter[i]=String.fromCharCode(applyAscci[i]);
    }else if(getCode[i]=== 32){
    applyAscci[i]= String.fromCharCode(getCode);
    console.log(applyAscci[i])
    }
  
  
} //Retornar valor d "c" para pintar en pantalla
  return (placeResult.innerHTML=getNewLetter.join(" "));
  //console.log(c);
},//argumento
//encriptar(encriptarA)




// función para encriptar llamada x el boton"encriptar"

//función para encriptar llamada x el boton"encriptar"
  decode: () =>{
  //Mostrar resultado
  let placeResult= document.getElementById("result");
  //Saltos dentro de un let para respetar numeros
  let jumptA=parseInt(jumpt.value);
  //Input text encriptar
  let descencriptarB = document.getElementById("second").value.toLocaleUpperCase();
  let getCode = new Array(descencriptarB.length );
  let applyAscci = new Array(descencriptarB.length );
  let getNewLetterA = new Array(descencriptarB.length );
  //obtener letras de la palabra
  for(let i=0; i<descencriptarB.length; i++){
  //obtener letras de codigo ascii
  getCode[i]= descencriptarB.charCodeAt(i);
   if((getCode[i] >=65) && (getCode[i] <=90)) {
  //Se aplica la formula para conocer su nueva posicion en el codigo ascii 
    applyAscci[i]= (getCode[i]-90-jumptA)%26+90;
    }else if(getCode[i]=== 32){
    applyAscci[i]= String.fromCharCode(getCode[i]);
    console.log(applyAscci[i])
    }
  //obtener encriptacion
  getNewLetterA[i]=String.fromCharCode(applyAscci[i]);
  
} //Retornar valor d "c" para pintar en pantalla
  
  return (placeResult.innerHTML=getNewLetterA.join(" "));
  //console.log(c);
},//argumento
//encriptar(encriptarA)


//limpiar input
  limpiar:()=>{
  //Saltos
  let jumpt = document.getElementById("jumpt").value = 0;
  //Input text encriptar
  let encriptarA = document.getElementById("first").value = "";
  //Input text encriptar
  let descencriptarB = document.getElementById("second").value = "";
  //Mostrar resultado
  let placeResult= document.getElementById("result").innerHTML =" ";
}





};









