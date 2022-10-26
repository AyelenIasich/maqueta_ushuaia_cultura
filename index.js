/* 1) Generar una función que le ingrese por parámetro algún dato ya 
sea ingresado por el usuario o declarado anteriormente en su código
 y mostrar por consola el tipo de dato que es.*/

var varString = "Maria";
var varNumber = 1250;
var varBoolean = true;
var varNull = null;
var varArray = [1, 2, 3];

function tipoDeDato(params) {
  
    return  typeof (params);

}

console.log(tipoDeDato(varString) );
