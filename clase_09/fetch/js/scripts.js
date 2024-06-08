let respuesta = document.getElementById("respuesta");
let resultado = document.getElementById("resultado");
let btn_carga = document.getElementById("btn_carga");

fetch("titulo.txt")
.then(res => res.text())
.then(el => {
    respuesta.innerHTML = el;
    
})
.catch(err => { console.log(err.message) });


btn_carga.onclick = () => {
    carga_lista();
}

function carga_lista(){
// let api_url = "https://jsonplaceholder.typicode.com/users";
fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(el => {
    crear_lista(el);
    console.log(el);
})
.catch(err => { console.log(err.message) });

}

carga_lista();


function crear_lista(us){
    let lista = `
    <table class="table">
            <thead>
                <tr>                    
                    <th scope="col">Nombre</th>
                    <th scope="col">Email</th>                    
                </tr>
            </thead>
            <tbody>
    `;
    us.forEach((e,i)=> {

        lista += `
        <tr onclick=datos_usuario(${e.id})>                    
            <td ><div class="nombre">${e.name}</div></td>
            <td>${e.email}</td>                    
        </tr>        
        
        `
    });

    lista += `
    </tbody>
        </table>
    `
        resultado.innerHTML = lista;   
}


function datos_usuario(id){
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json())
    .then(el => {
        ficha_usuario(el);
        //console.log(el);
    })
    .catch(err => { console.log(err.message) });
}

//datos_usuario(2);

function ficha_usuario(datos) {
    let d = `
    <h1>${datos.name}</h1>
    <h2>${datos.phone}</h2>
    <div>Trabaja en: ${datos.company.name}
    `
    resultado.innerHTML = d;
}