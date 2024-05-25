let tablero = document.getElementById("tablero");

tablero.addEventListener("click", function(e) {
    let x = e.target;
    //console.log(x);
    if(x.id != "tablero"){
        
        let a = x.dataset.valor;
        alert(a);
    }
    
})