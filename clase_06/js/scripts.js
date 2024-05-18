// console.log("Hola Mundo");
// alert("Hola Mundo");

const x = 2;

let nombre = "Juan";
var edad = "25";
let estudia = true; //false

nombre = "Pedro";

// console.log(typeof nombre);
// console.log(typeof edad);

let a = "5";
let b = 6;
let c = a + b;

//console.log(typeof estudia);


let dias = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];

let alumnos = [
    ['Pedro',25, 8],
    ["Juan",27,4],
    ["Maria",23,10]
]

//console.log(alumnos[0][0]);

let persona = {
    nombre: "Jose",
    edad: 36,
    vive: true,
    deportes: ['Tenis','Futbol','Hokey'],
    saluda: function(){
        alert("Hola soy"+ " " + this.nombre)
    }
}

//console.log(persona.deportes[0]);


let dato = "nombre";

//console.log(persona[dato]);

// function suma(a,b){
//     let c = a + b;
//     alert(c);
// }

// let suma = (a,b)=>{
//     let c = a + b;
//     alert(c);
// }

// let suma = (a,b)=>{
//     //let c = a + b;
//     return a+b;
// }

// let suma = (a,b)=> a+b;

// let resultado = suma(5,6);
// alert(resultado);

let duplicar = a => a*2;

//alert(duplicar(4))

persona.saluda();