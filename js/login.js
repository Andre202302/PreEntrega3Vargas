/********************querySelectorRegister ****************/
const formIngresar = document.querySelector("#formInput"),
userInput = document.querySelector("#userInput"),
passInput = document.querySelector("#passInput"),
btnInput = document.querySelector("#login"),
mensaje = document.querySelector("#mensaje");

//funcion para recuperar arreglo del LS y usarlo en el evento
function recuperarLS(){
  return JSON.parse(localStorage.getItem("usuarios"));
}

// asignamos constante de los usuarios recuperados del LS
const registradosLS = recuperarLS();

////****usuarios Registrados**** */
function registrados(registradosLS){
  let userFound = registradosLS.find((usuario)=>{
    return usuario.username == userInput.value && usuario.password == passInput.value;  
  })
  if(userFound){ //el if lo convierte en booleano y se denomina coersion
    window.location.href = "./productos.html";
  }else{
    document.querySelector("#mensaje").innerText = "Usuario No registrado";
  }
  }
  
///***Evento *////
formIngresar.addEventListener('submit', (e)=>{
  e.preventDefault()//previene el comportamiento por defecto del evento
  registrados(registradosLS)
  formIngresar.reset();  
})



