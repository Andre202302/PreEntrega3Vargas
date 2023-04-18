const servicios = [ 
  {
    id:1,
    destino: "Argentina",
    nombre:"PREMIUM",
    peso:"5kg",
    precio:5000,
    img: "https://zoom.red/wp-content/uploads/2021/07/tips-embalaje-exitoso.jpg"
  },
  {
    id:2,
    destino: "Argentina",
    nombre:"LIGHT_X",
    peso:"10kg",
    precio:1000,
    img: "https://demo.imagizer.com/image-quality.jpg"
  },
  {
    id:3,
    destino: "Argentina",
    nombre:"LIGHT_XX",
    peso:"20kg",
    precio:2000,
    img: "https://crehana-blog.imgix.net/media/filer_public/21/85/21857888-c667-4753-95b4-7ac3af0a2ebf/empresas_de_envio.jpg?auto=format&q=50"
  },
  {
    id:4,
    destino: "Argentina",
    nombre:"MEDIUM_X",
    peso:"30kg",
    precio:3000,
    img: "https://demo.imagizer.com/image-quality2.jpg"
  },
  {
    id:5,
    destino: "Argentina",
    nombre:"MEDIUM_XX",
    peso:"40kg",
    precio:5000,
    img: "https://t1envios.com/images/Producto.png"
  },
  {
    id:6,
    destino: "Argentina",
    nombre:"HEAVY",
    peso:"50kg",
    precio:10000,
    img: "https://demo.imagizer.com/image-trim1.jpg"
  },
  {
    id:7,
    destino: "Estados Unidos",
    nombre:"PREMIUM",
    peso:"5kg",
    precio:5000,
    img: "https://zoom.red/wp-content/uploads/2021/07/tips-embalaje-exitoso.jpg"
  },
  {
    id:8,
    destino: "Estados Unidos",
    nombre:"LIGHT_X",
    peso:"10kg",
    precio:1000,
    img: "https://demo.imagizer.com/image-quality.jpg"
  },
  {
    id:9,
    destino: "Estados Unidos",
    nombre:"LIGHT_XX",
    peso:"20kg",
    precio:2000,
    img: "https://demo.imagizer.com/image-filter.jpg"
  },
  {
    id:10,
    destino: "Estados Unidos",
    nombre:"MEDIUM_X",
    peso:"30kg",
    precio:3000,
    img: "https://cdn.kometia-static.com/blog/2019/06/13130422/shutterstock_1039380979.jpg"
  },
  {
    id:11,
    destino: "Estados Unidos",
    nombre:"MEDIUM_XX",
    peso:"40kg",
    precio:5000,
    img: "https://as01.epimg.net/meristation/imagenes/2019/09/17/betech/1568712199_591499_1568712749_noticia_normal_recorte1.jpg"
  },
  {
    id:12,
    destino: "Estados Unidos",
    nombre:"HEAVY",
    peso:"50kg",
    precio:10000,
    img: "https://img.europapress.es/fotoweb/fotonoticia_20230307104714_420.jpg"
  }
];

/////***query Selector */
const contenedorServicios = document.querySelector("#contenedor-servicios");

const btnSearch = document.querySelector("#searchid");

function crearHtmlB(arr) {
  btnSearch.innerHTML = "";

  let html = "";
  for (const item of arr) {
    const { id, destino, nombre, peso, precio, img } = item;
    html = `
    <img class ="ser-img" src="${servicio?.img}" alt="${servicio?.nombre}" style="width: 200px;margin-left: 100px" >
    <div class ="ser-description" style="display: flex;margin-left: 100px">
        <h5 class ="detino">Destino:${servicio?.destino.toUpperCase()} Servicio:</h5><h1>
        <h5 class ="nombre">${servicio?.nombre}</h5><h1>
        <h5 class ="peso"> - hasta ${servicio?.peso}-</h5>                                
        <h5 class ="precio"> su valor es: $${servicio?.precio}</h5>                                
        <button style= "border: 1px solid #47cfac;padding: 10px 15px" id='${servicio.id}' class="btn-compra"><a href="/">Comprar</a></button>
        </div>`;
  btnSearch.innerHTML += html;
  }
}
//función de busqueda genérica
function filtrar(arr, filtro, param) {
  return arr.filter((el) => {
    return param == "destino"
      ? el.destino <= parseFloat(filtro)
      : el[`${param}`].includes(filtro.toLowerCase());
  });
}

//Listeners de búsqueda
btnSearch.addEventListener("input", () => {
  let nuevoFiltro = filtrar(servicios, btnSearch.value, "destino");
  crearHtmlB(nuevoFiltro);
});



const mostrarServicios = (data) =>{
  data.forEach(servicio => {
    const cardService = document.createElement('article');//contenedor de cada uno de los productos de mi tienda
    cardService.setAttribute('id', 'tarjeta-servicio');//le creo un atributo para estilos
    cardService.innerHTML =`
                            <img class ="ser-img" src="${servicio?.img}" alt="${servicio?.nombre}" style="width: 200px;margin-left: 100px" >
                            <div class ="ser-description" style="display: flex;margin-left: 100px">
                                <h5 class ="detino">Destino:${servicio?.destino.toUpperCase()} Servicio:</h5><h1>
                                <h5 class ="nombre">${servicio?.nombre}</h5><h1>
                                <h5 class ="peso"> - hasta ${servicio?.peso}-</h5>                                
                                <h5 class ="precio"> su valor es: $${servicio?.precio}</h5>                                
                                <button style= "cursor: pointer;border: 1px solid #47cfac;padding: 10px 15px" id='${servicio.id}' class="btn-compra"><a href="/">Comprar</a></button>
                                </div>
                                `;  
    contenedorServicios.appendChild(cardService);
  })
  const btnComprar = document.querySelectorAll('.btn-compra'); //me trae los elementos del boton con la clase btn-compra
  btnComprar.forEach(el => {
    el.addEventListener('click', (e) =>{
      agregarAlCarrito(e.target.id)
      guardarLS(carrito);
    });
  })  
}

mostrarServicios(servicios);

  const carrito = [];
  ////***Gurardar en el Localstore ****////
function guardarLS(elemento){
  return localStorage.setItem('carrito', JSON.stringify(elemento))
}

  function agregarAlCarrito(id){
    const existe = carrito.some(serv => serv.id ===parseInt(id));
    if(existe){
      console.log("ya existe el producto");
    }else{
      let servEcontrado = servicios.find(serv => serv.id ===parseInt(id));
      carrito.push(servEcontrado);
    }
  }
  //localStorage.clear();
  
