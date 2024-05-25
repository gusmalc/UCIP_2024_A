//let btn1 = document.getElementById("btn1");

//btn1.onclick = function () {};

// btn1.addEventListener("click", function (ev) {
//     let t = ev.target;
//     //let a = btn1.dataset.valor;
//     alert(t.dataset.valor);
// });

let arr = [1,2,3,4,5,6];

let dias = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];

//console.log(arr[1]);

// dias.forEach((e,i)=> {
//     //let x = i + " - " + e;
//     let x = `${i} - ${e}`;
//     console.log(x);
// });

let btns = document.querySelectorAll(".btnx");

//console.log(btns);

// btns.forEach((e,i)=> {
//     console.log(e.dataset.valor);
// });

// let caja1 = document.querySelector("#caja1");
// let caja1 = document.getElementById("caja1");

let a = 19;
let b = 19;

let c = 12;

if(a<b && c>11){
    alert("Es menor");
}else{
    alert("Es mayor o igual");
}