// let miPromesa = new Promise((resolve, reject)=>{
//     if(false){
//         resolve("Todo bien...")
//     }else{
//         reject("Algo paso!");
//     }
// });

// miPromesa.then(respuesta=>{
//     console.log(respuesta)
// }).catch(error=>console.log(error))


/**  VARIABLES */
let baseUrl = "https://jsonplaceholder.typicode.com/users";
let baseUrl2 = "https://rickandmortyapi.com/api/character";
let contenedorPadre = document.querySelector('#contenedor-padre');
let tituloServicio = document.querySelector('#titulo-servicio');
let boton1 = document.querySelector('#btn-servicio1');
let boton2 = document.querySelector('#btn-servicio2');
let spinner = document.querySelector('.spinner');


/**LISTENERS */
boton1.addEventListener("click",()=>{
    spinner.classList.remove("d-none")
    limpiarHTML();
    setTimeout(()=>{
        consumirServicio1(baseUrl)
        spinner.classList.add("d-none")
    },1500)
    
})
boton2.addEventListener("click",()=>{
    spinner.classList.remove("d-none")
    limpiarHTML();
    setTimeout(()=>{
        consumirServicio2(baseUrl2)
        spinner.classList.add("d-none")
    },1500)
})



/**FUNCTIONS */
//Fetch
function consumirServicio1(url){
    let data = fetch(url);
    let respuesta = data.then(res=>res.json())
                    .then(respuesta=>{
                       mostrarServicio1(respuesta);
                    })
}

function consumirServicio2(url){
    let data = fetch(url);
    let respuesta = data.then(res=>res.json())
                    .then(respuesta=>{
                       //cambio especial para rick and morty
                        let {results} = respuesta
                        console.log(results)
                        mostrarServicio2(results)
                    })
}

//consumirServicio1(baseUrl);
//consumirServicio2(baseUrl2);
function mostrarServicio1(datos){
    tituloServicio.textContent = "Servicio JSON PLACEHOLDER"
    console.log(datos)
    let contenido = "";
    datos.forEach(element=>{
        contenido += `
        <div class="col">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">${element.name}</h5>
            <p class="card-text">
                <b>Email: </b> ${element.email}
            </p>
            <p class="card-text">
                <b>Username: </b> ${element.username}
            </p>
            <p class="card-text">
                <b>Address: </b> ${element.address.street}/ ${element.address.city}
            </p>
          </div>
        </div>
      </div>
        `
    });
    contenedorPadre.innerHTML = contenido;
}


function mostrarServicio2(datos){
    tituloServicio.textContent = "Servicio RICk AND MORTY"
    console.log(datos)
    let contenido = "";
    datos.forEach(element=>{
        contenido += `
        <div class="col">
        <div class="card h-100">
          <div class="card-body">
          <img src="${element.image}" width="100%">   
            <h5 class="card-title">${element.name}</h5>
            <p class="card-text">
                <b>Email: </b> ${element.status}
            </p>
            <p class="card-text">
                <b>Username: </b> ${element.species}
            </p>
            <p class="card-text">
                <b>Address: </b> ${element.gender}
            </p>
          </div>
        </div>
      </div>
        `
    });
    contenedorPadre.innerHTML = contenido;
}

function limpiarHTML(){
    contenedorPadre.innerHTML = "";
    tituloServicio.textContent = ""
}


/*
Promise <state> fullfilled value = "[{},{},{}]"

let data = prueba.com
        .then(data=>data.json())
        .then(dataDeVerdad=>console.log(dataDeVerdad))
        .catch(err=>console.log(err))

[
    {
        name:"Arni",
        age: 27
    },
    {
        name:"Rachell",
        age:0
    }
]
*/


























