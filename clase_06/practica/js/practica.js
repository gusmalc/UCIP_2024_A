let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let btn_suma = document.getElementById("btn_suma");
let resultado = document.getElementById("resultado");

btn_suma.addEventListener("click", () => {
    let a = parseFloat(num1.value) ;
    let b = parseFloat(num2.value) ;
    let c = a + b;
    resultado.innerHTML = c;
})