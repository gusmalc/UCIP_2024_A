let txt1 = document.getElementById("txt1");
let txt2 = document.getElementById("txt2");
let btn_sumar = document.getElementById("btn_sumar");
let btn_borrar = document.getElementById("btn_borrar");
let resultado = document.getElementById("resultado");

window.onload = function() {
    borrar();
}

txt1.onclick = function() { txt1.value = ""; };
txt2.onclick = function() { txt2.value = ""; };

btn_borrar.onclick = function() {
    borrar();
}

btn_sumar.addEventListener("click", function() {
    let a = parseFloat(txt1.value);
    let b = parseFloat(txt2.value);
    let c = a + b;
    if(isNaN(c)) {
        resultado.innerHTML = "Ingreasar números";
    }else{
        resultado.innerHTML = c;
    }
    
})


function borrar (){
    txt1.value = 0;
    txt2.value = 0;
    resultado.innerHTML = "0";
}