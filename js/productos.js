const servicios = [ 
  {
    id:1,
    destino: "argentina",
    nombre:"PREMIUM",
    peso:"5kg",
    precio:5000,
    img: "https://zoom.red/wp-content/uploads/2021/07/tips-embalaje-exitoso.jpg"
  },
  {
    id:2,
    destino: "argentina",
    nombre:"LIGHT_X",
    peso:"10kg",
    precio:1000,
    img: "https://demo.imagizer.com/image-quality.jpg"
  },
  {
    id:3,
    destino: "argentina",
    nombre:"LIGHT_XX",
    peso:"20kg",
    precio:2000,
    img: "https://crehana-blog.imgix.net/media/filer_public/21/85/21857888-c667-4753-95b4-7ac3af0a2ebf/empresas_de_envio.jpg?auto=format&q=50"
  },
  {
    id:4,
    destino: "argentina",
    nombre:"MEDIUM_X",
    peso:"30kg",
    precio:3000,
    img: "https://demo.imagizer.com/image-quality2.jpg"
  },
  {
    id:5,
    destino: "argentina",
    nombre:"MEDIUM_XX",
    peso:"40kg",
    precio:5000,
    img: "https://t1envios.com/images/Producto.png"
  },
  {
    id:6,
    destino: "argentina",
    nombre:"HEAVY",
    peso:"50kg",
    precio:10000,
    img: "https://demo.imagizer.com/image-trim1.jpg"
  },
  {
    id:7,
    destino: "estados unidos",
    nombre:"PREMIUM",
    peso:"5kg",
    precio:5000,
    img: "https://zoom.red/wp-content/uploads/2021/07/tips-embalaje-exitoso.jpg"
  },
  {
    id:8,
    destino: "estados unidos",
    nombre:"LIGHT_X",
    peso:"10kg",
    precio:1000,
    img: "https://demo.imagizer.com/image-quality.jpg"
  },
  {
    id:9,
    destino: "estados unidos",
    nombre:"LIGHT_XX",
    peso:"20kg",
    precio:2000,
    img: "https://demo.imagizer.com/image-filter.jpg"
  },
  {
    id:10,
    destino: "estados unidos",
    nombre:"MEDIUM_X",
    peso:"30kg",
    precio:3000,
    img: "https://cdn.kometia-static.com/blog/2019/06/13130422/shutterstock_1039380979.jpg"
  },
  {
    id:11,
    destino: "estados unidos",
    nombre:"MEDIUM_XX",
    peso:"40kg",
    precio:5000,
    img: "https://as01.epimg.net/meristation/imagenes/2019/09/17/betech/1568712199_591499_1568712749_noticia_normal_recorte1.jpg"
  },
  {
    id:12,
    destino: "estados unidos",
    nombre:"HEAVY",
    peso:"50kg",
    precio:10000,
    img: "https://img.europapress.es/fotoweb/fotonoticia_20230307104714_420.jpg"
  },
  {
    id:13,
    destino: "brasil",
    nombre:"PREMIUM",
    peso:"5kg",
    precio:5000,
    img: "https://zoom.red/wp-content/uploads/2021/07/tips-embalaje-exitoso.jpg"
  },
  {
    id:14,
    destino: "brasil",
    nombre:"LIGHT_X",
    peso:"10kg",
    precio:1000,
    img: "https://demo.imagizer.com/image-quality.jpg"
  },
  {
    id:15,
    destino: "brasil",
    nombre:"LIGHT_XX",
    peso:"20kg",
    precio:2000,
    img: "https://demo.imagizer.com/image-filter.jpg"
  },
  {
    id:16,
    destino: "brasil",
    nombre:"MEDIUM_X",
    peso:"30kg",
    precio:3000,
    img: "https://cdn.kometia-static.com/blog/2019/06/13130422/shutterstock_1039380979.jpg"
  },
  {
    id:17,
    destino: "brasil",
    nombre:"MEDIUM_XX",
    peso:"40kg",
    precio:5000,
    img: "https://as01.epimg.net/meristation/imagenes/2019/09/17/betech/1568712199_591499_1568712749_noticia_normal_recorte1.jpg"
  },
  {
    id:18,
    destino: "brasil",
    nombre:"HEAVY",
    peso:"50kg",
    precio:10000,
    img: "https://img.europapress.es/fotoweb/fotonoticia_20230307104714_420.jpg"
  }
];

/////***query Selector */
const contenedorServicios = document.querySelector("#contenedor-servicios");
const btnSearch = document.querySelector("#searchid");

//función de busqueda genérica
function filtrar(arr, filtro) {
  const arrFilter = arr.filter(s => s.destino === filtro);
  return arrFilter;
}

//Listeners de búsqueda
btnSearch.addEventListener("input", () => {
  let nuevoFiltro = filtrar(servicios, btnSearch.value);
  mostrarServicios(nuevoFiltro);
  if(nuevoFiltro.length === 0){
    mostrarServicios(servicios);
  }
});



const mostrarServicios = (data) =>{
  contenedorServicios.innerHTML = ""; //para que no se vuelva a renderizar se asigna como un vacio
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
                                <button style= "cursor: pointer;border: 1px solid #47cfac;padding: 23px 15px" id='${servicio.id}' class="btn-compra">Comprar</button>
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
  
