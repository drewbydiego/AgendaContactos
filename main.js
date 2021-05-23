const nombre = document.querySelector('.nombre');
const numero = document.querySelector('.numero');
const direccion = document.querySelector('.direccion');
const btnAgregarTarea = document.querySelector('.btn-agregar-tarea');
// APUNTADOR AL LISTADO DE TAREAS
const listadoTareas = document.querySelector('.listado-tareas');

//CREANDO EL OBJETO PARA ACCEDER AL LOCAL STORAGE
const db = window.localStorage;

btnAgregarTarea.addEventListener('click', ()=>{
    if(nombre.value == "" || numero.value =="" || direccion.value == ""){
        alert('Debes llenar todos los campos');
    }else{
    //creando el objecto para agregar el contacto
    let contacto = {
        //Añadiendo los datos del contacto a crear
        nombre: nombre.value,
        numero : numero.value,
        direccion: direccion.value,
        //(Creando un id para poder acceder al contacto)
        id: Math.random(1,100)
    }
    //La funcion guardar contacto recibe el lugar donde guardará los datos, y el objecto que guardará
    guardarContacto(db,contacto);
}
});

cargarContactos(db, listadoTareas);