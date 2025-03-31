console.log ("hola consola");

//variables

//let y const

let nombre = "Daniel";
let apellido;
console.log(nombre);
let mision = true;
console.log(mision);

nombre="miguel";
console.log(nombre);

const pi = 3.1416;
console.log(pi);

apellido ="mendoza";
console.log(apellido);

//alertas 

alert("hola");
prompt("que comida te gusta?");

let comida= prompt("que comida te guste");

alert ("a mi tambien me gusta" + comida);


//matematica

let radio =parseInt(prompt("ingrese el radio"));
let area =pi * (radio**2);
alert("el area del circulo es : " + area);

//ejrcicio, calcular volumen de un cilindro (area base * altura)
let radio_base = parseFloat(prompt("ingrese el radio de la base: "));
let altura = parseFloat(prompt("ingrese la altura del cilindro"));

let volumen_cilindro= parseInt((pi * (radio**2)) * altura);

alert("el volumen del cilindro es: "+ volumen_cilindro);

//escribe un programa para calcular el diezmo de una persona.

let ingreso = parseFloat(prompt("ingrese su sueldo en dolares: "));
let diezmo = ingreso * 0.10 ;
alert("tu diezmo es : " + diezmo + " dolares " + " pagalo inicuo ");


//tarea investigar if y bucles(condicional)


