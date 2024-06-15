let btn_cl = document.getElementById('btn_cl');
let app = document.getElementById('app');
let titulo = document.getElementById('titulo');
let filtro = document.getElementById('filtro');
let box_filtro = document.getElementById('box_filtro');

let lista = [];

btn_cl.addEventListener('click', (e)=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json() )
    .then(el =>{
        lista = el;
        crea_lista(el);
        filtro.value = "";
        box_filtro.classList.remove("fuera");
    })
    .catch(err=>{
        console.log(err.message)
    });
});


function crea_lista(ll){
    let tbl = `
    <table class="table table-dark table-hover"> 
    <thead>
        <tr>
            <th>ID</th>
            <th>NOMBRE</th>
            <th>EMAIL</th>
        </tr>
    </thead>
    <tbody>
    `;
    ll.forEach(el => {
        tbl += `
        <tr id="${el.id}" onclick=carga_usuario(this)>
            <td>${el.id}</td>
            <td>${el.name}</td>
            <td>${el.email}</td>
        </tr>
        `;        
    });
    tbl += `
    </tbody> 
    </table>
    `;
    app.innerHTML = tbl;
    titulo.innerHTML = "Lista Usuarios";
    
    
    
}


function carga_usuario(u){
    let id = u.id;
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res=> res.json() )
    .then(el =>{
        crea_ficha(el);
        box_filtro.classList.add("fuera");
    })
    .catch(err=>{
        console.log(err.message)
    });

}


function crea_ficha(u){
    let ficha = `
    <div class="ficha_usuario">
    <h2>Nombre: ${u.name}</h2>  
    <hr>  
    <p><b>Nombre usuario: </b>${u.username}</p>
    <p><b>Email: </b>${u.email}</p>
    <p><b>Tel&eacute;fono: </b>${u.phone}</p>
    <p><b>Empresa: </b>${u.company.name}</p>
    <p><b>Sitio web: </b>${u.website}</p>
    </div>
    `
    app.innerHTML = ficha;
    titulo.innerHTML = "Ficha Usuario";
    
}


filtro.addEventListener("input", (e)=>{
    let txt = filtro.value.toLowerCase();
    // let nl = lista.filter(item => item.name.toLowerCase().includes(txt) || item.email.toLowerCase().includes(txt));
    let nl = lista.filter(item => item.name.toLowerCase().includes(txt));

    crea_lista(nl);
});

