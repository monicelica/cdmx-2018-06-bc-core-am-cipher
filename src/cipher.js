
window.cipher = {



// función para encriptar llamada x el boton"encriptar"

  encode: (string, offset) => {
  //Mostrar resultado
  let placeResult= document.getElementById("result");
  //Saltos dentro de un let para respetar numeros
      offset=parseInt(offset);
  //Input text encriptar
      string = string.toLocaleUpperCase();
  let getCode = new Array(string.length );
  let applyAscci = new Array(string.length );
  let getNewLetter = new Array(string.length );
  //obtener letras de la palabra
  for(let i=0; i<string.length; i++){
  //obtener letras de codigo ascii
  getCode[i]= string.charCodeAt(i);
   if((getCode[i] >=65) && (getCode[i] <=90)) {
  //Se aplica la formula para conocer su nueva posicion en el codigo ascii 
    applyAscci[i]= (getCode[i]-65+offset)%26+65;
    
    }else if(getCode[i]=== 32){
    applyAscci[i]= String.fromCharCode(getCode);
    console.log(applyAscci[i])
    }
    //obtener encriptacion
    getNewLetter[i]=String.fromCharCode(applyAscci[i]);
  
} //Retornar valor d "c" para pintar en pantalla
  return getNewLetter.join("");
  //console.log(c);
},//argumento
//encriptar(encriptarA)




// función para encriptar llamada x el boton"encriptar"

//función para encriptar llamada x el boton"encriptar"
  decode: (stringDe, offset) =>{
  //Mostrar resultado
  let placeResult= document.getElementById("result");
  //Saltos dentro de un let para respetar numeros
      offset=parseInt(offset);
  //Input text encriptar
      stringDe = stringDe.toLocaleUpperCase();
  let getCode = new Array(stringDe.length );
  let applyAscci = new Array(stringDe.length );
  let getNewLetterA = new Array(stringDe.length );
  //obtener letras de la palabra
  for(let i=0; i<stringDe.length; i++){
  //obtener letras de codigo ascii
  getCode[i]= stringDe.charCodeAt(i);
   if((getCode[i] >=65) && (getCode[i] <=90)) {
  //Se aplica la formula para conocer su nueva posicion en el codigo ascii 
    applyAscci[i]= (getCode[i]-90-offset)%26+90;
    }else if(getCode[i]=== 32){
    applyAscci[i]= String.fromCharCode(getCode[i]);
    console.log(applyAscci[i])
    }
  //obtener encriptacion
  getNewLetterA[i]=String.fromCharCode(applyAscci[i]);
  
} //Retornar valor d "c" para pintar en pantalla
  
  return getNewLetterA.join("");
  //console.log(c);
},//argumento
//encriptar(encriptarA)


/*limpiar input
  limpiar:()=>{
  //Saltos
  let offset = document.getElementById("offset").innerHTML = 0;
  //Input text encriptar
  let string = document.getElementById("first").innerHTML  = " ";
  //Input text encriptar
  let stringD = document.getElementById("second").innerHTML = " ";
  //Mostrar resultado
  let placeResult= document.getElementById("result").innerHTML =" ";
}*/





};









