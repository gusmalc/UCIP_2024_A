//let contenedor = document.querySelector("#contenedor");
//let contenedores = document.querySelectorAll(".caja");
let contenedor = document.getElementById("contenedor");
let inicio = 1;

// for (let i = inicio; i < 101; i++) {
//    let dd = document.createElement("div");
   
//    let min = 0; // incluido
//    let max = 256; // excluido  
//    let r = Math.floor(Math.random() * (max - min)) + min;
//    let g = Math.floor(Math.random() * (max - min)) + min;
//    let b = Math.floor(Math.random() * (max - min)) + min;

//    dd.style.backgroundColor = `rgb(${r},${g},${b})`;
//    contenedor.appendChild(dd);
    
// }

let nint = 1;
let inter = setInterval(function(){    
    crea_div();
    nint++;
    if(nint==101){
        clearInterval(inter);
        nint = 0;
    }
}, 50);


function crea_div(){
    let dd = document.createElement("div");
   
   let min = 0; // incluido
   let max = 256; // excluido  
   let r = Math.floor(Math.random() * (max - min)) + min;
   let g = Math.floor(Math.random() * (max - min)) + min;
   let b = Math.floor(Math.random() * (max - min)) + min;

   dd.style.backgroundColor = `rgb(${r},${g},${b})`;
   contenedor.appendChild(dd);
}
