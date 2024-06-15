

// setTimeout(function(){
//     //alert('hola');
// },2000);

// let nint = 0;
// let inter = setInterval(function(){    
//     console.log(nint);
//     nint++;
//     if(nint==10){
//         clearInterval(inter);
//         nint = 0;
//     }
// }, 1000);


// el.style.cssText = "background-color: black; color: white;";
// el.style.border = "#000 solid 2px";
// el.classList.add("clase1", "clase2");
// el.classList.remove("clase");
// el.classList.toggle("clase");
// document.getElementById("estilo").href = "css/estilosjs.css";


let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let titulo = document.getElementById("titulo");
let estilo = document.getElementById("estilo");
let contenedor = document.getElementById("contenedor");
let estado = true;
btn1.onclick = function () {
    //titulo.style.backgroundColor = "#f00";
    //titulo.style.cssText = "background-color: #f00; color: #0f0";
    titulo.classList.toggle("texto_grande");
    if(estado){
        document.body.style.backgroundColor = "#0f0";
        //estado = false;
    }else{
        document.body.style.backgroundColor = "#fff";
        //estado= true;
    }

    estado = !estado;
}

let modo = "claro";
btn2.onclick = function () {
    
    if(modo == "claro"){
        estilo.href = "css/estilos2.css";
        btn2.innerHTML = "Modo Claro";
        modo = "oscuro";
    }else{
        estilo.href = "css/estilos.css";
        btn2.innerHTML = "Modo Oscuro";
        modo = "claro";
    }
    
}

btn3.onclick = function () {
    let h1x = document.createElement("h1");
    h1x.innerHTML = "H1 Agregado con exito Houston !!!";
    h1x.style.color = "#f00";
    contenedor.appendChild(h1x);
}


let arr = [1,2,3,4,5,6];

let pares = arr.filter(x => x%2 == 0);  

console.log(pares);

let m = arr.map(x => x*2 + "a" );

console.log(m);
