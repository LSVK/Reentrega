const productos = [
  { id: 1, articulo: "mate liso", precio: 8600, img: "mateliso.jpeg"},
  { id: 2, articulo: "mate cincelado", precio: 8700, img: "/cince.jpg"},
  { id: 3, articulo: "mate estandar", precio: 7800, img: "/estandar.jpg" },
  { id: 4, articulo: "mate max", precio: 7900, img: "/max.jpg"},
  { id: 5, articulo: "bombilla lisa", precio: 1850, img: "/b.jpg"},
  { id: 6, articulo: "bombilla cincelada", precio: 1950, img: "/b.jpg"},
]



const btnSearch = document.querySelector("#btnSearch"),
    inputIngreso = document.querySelector("#ingreso");  
const caja = document.querySelector(".caja");
const render = document.querySelector("#render");
const carritoenuso = document.querySelector('#carrito');
const carritovacio = []; 

const contenedorProductos = document.querySelector("#contenedor"); 


let articulos;
if (localStorage.getItem("productos")) {
  articulos = JSON.parse(localStorage.getItem("productos"));
} else {
  articulos = productos;
}

function producto(articulo, precio, img) {
  this.id = productos.length + 1;
  this.articulo = articulo;
  this.precio = precio;
  this.img = img;                       
}


// Cambiar por filter
function buscarProducto(arr, filtro) {
    const encontrado = arr.find((el) => {
    return el.articulo.includes(filtro);
    });
    return encontrado;
}

function cargarProductos(arr) {
  render.innerHTML = "";  
  //desestructurar el obj
  for (const item of arr) {
    html1 = `<div class="render">
    <h3>${item.articulo}</h3>
    <p>${item.precio}</p>
    <img src="./img/${item.img}">     
  <button id="${item.id}">comprar</button>
  </div>`;
    render.innerHTML += html1;
  }
}   

 function crearHtml(el) {

  contenedor.innerHTML = "";
 
   let html = `<div class="card"> 
              <img src="./img/${el.img}" alt="${el.articulo}">                                                 
             <h3>${el.articulo}</h3>
       <p>Precio: $${el.precio} </p>
       <div class="card-action">
        <button id="${el.id}">Comprar</button>
         </div>
       </div>`;

contenedor.innerHTML = html;
}

function guardarLS(productos) {
  localStorage.setItem("productos", JSON.stringify(productos));
}

cargarProductos(productos);

 btnSearch.addEventListener("click", () => {
 const encontrado = buscarProducto(productos, inputIngreso.value);
 console.log(encontrado);
 crearHtml(encontrado);
}); 

   
function toggleDark() {
    const container = document.body;
    
    let theme = localStorage.getItem("data-theme");
  
  if (theme === "light") {
    container.setAttribute("data-theme", "dark");
    document.getElementById("night").style.display = "block"; 
    document.getElementById("light").style.display = "none"; 
    localStorage.setItem("data-theme", "dark");
  
  } else {
  
    container.setAttribute("data-theme", "light");
    document.getElementById("night").style.display = "none";
    document.getElementById("light").style.display = "block"; 
    localStorage.setItem("data-theme", "light");
    }
  }

 

