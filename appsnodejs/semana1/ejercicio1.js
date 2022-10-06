/*const num1=6, num2=10
let suma = num1+num2
console.log(`La suma entre ${num1} y ${num2} es ${suma}`);*/

const sumar =(num1,num2)=>{
    let suma = num1+num2
    console.log(`La suma entre ${num1} y ${num2} es ${suma}`);  
}

//Funcion por declaracion -restar

function restar(num1, num2){
    let resta = num1-num2
    console.log(`La resta entre ${num1} y ${num2} es ${resta}`); 
}

//Funcion por declaracion -multiplicacion

function multiplicar(num1, num2){
    let multiplicacion = num1*num2
    console.log(`La multiplicacion entre ${num1} y ${num2} es ${multiplicacion}`); 
}
//Funcion por declaracion -division 
function dividir(num1, num2){
    let division = num1/num2
    console.log(`La division entre ${num1} y ${num2} es ${division}`); 
}

//Funcion por declaracion -Potencia

function potenciar(num1, num2){
    let potencia = Math.pow(num1,num2)
    console.log(`La potencia de ${num1} elevado ${num2} es ${potencia}`); 
}

//Funcion por declaracion -Radicacion

function radicar(num1){
    let radicacion = Math.sqrt(num1)
    console.log(`La raiz cuadrada de ${num1} es ${radicacion}`); 
}


exports.suma=sumar
exports.resta=restar
exports.multiplicacion=multiplicar
exports.division=dividir
exports.potencia=potenciar
exports.radicacion=radicar
