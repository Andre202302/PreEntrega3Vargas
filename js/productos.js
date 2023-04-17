localStorage.clear();
class servicios{
  constructor (nombre, peso, precio){
    this.nombre = nombre;
    this.peso = peso;
    this.precio = precio;
  }
  }
const inventario = JSON.parse(localStorage.getItem("productos")) || [];
  
inventario.push (new servicios("PREMIUM","5kg",5000));
inventario.push (new servicios("LIGHT_X","10kg",1000));
inventario.push (new servicios("LIGHT_XX","20kg",2000));
inventario.push (new servicios("MEDIUM_X","30kg",3000));
inventario.push (new servicios("MEDIUM_XX","40kg",4000));
inventario.push (new servicios("HEAVY","50kg",10000));

function guardarLS(elemento){
  return localStorage.setItem('inventario', JSON.stringify(elemento))
}
guardarLS(inventario);
console.log(guardarLS(inventario));

/////***query Selector */
const search = document.querySelector("#searchid");

function filtrar(arr, filtro, param) {
  return arr.filter((el) => {
      return param == "precio"
      ? el.precio <= parseFloat(filtro)
      : el[`${param}`].includes(filtro.toLowerCase());
  });
}
//Manipular el DOM
function crearHtml(arr) {
  section.innerHTML = "";

  let html = "";
  for (const item of arr) {
    const { nombre, peso, precio} = item;
    html = `<section>
  <section>${nombre}</section>
  <section>${peso}</section>
  <section>${precio}</section>
  </section>`;
  section.innerHTML += html;
  }
//Listeners de búsqueda
search.addEventListener("input", () => {
  let nuevoFiltro = filtrar(inventario, search.value, "peso");
  crearHtml(nuevoFiltro);
});*/