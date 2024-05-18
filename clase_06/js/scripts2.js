let caja1 = document.getElementById("caja1");
let btn1 = document.getElementById("btn1");
//console.log(caja1.dataset.numero2);

let a = parseInt(caja1.dataset.numero);
let b = parseInt(caja1.dataset.numero2);

//console.log(a+b);

btn1.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target);
    //alert("Es viernes !!!");
})

// btn1.onclick = (e) => {

// }