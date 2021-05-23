
//La funcion guardar contacto obtiene el lugar donde se guardarán los datos, y el objecto que guardará
const guardarContacto = (db,contacto)=>{
    //db representa el lugar donde se guardara (en el local storage)
        //en setItem el primer parametro es el Key del objecto guardado en el LocalStorage, el segundo el objeto
    db.setItem(contacto.id,JSON.stringify(contacto));
    //refrescar la ventana luego de añadir el contacto
    window.location.reload();
}
//FUNCION DE CARGAR CONTACTOS
const cargarContactos = (db, parentNode)=>{
        //Comprobando si existen contactos para mostrar
    var divVacio = document.createElement('div');
    divVacio.classList.add('tareaVacio');
    var contactosVacio = document.createElement('p');
    contactosVacio.classList.add('contactosV');
    contactosVacio.innerHTML = '<center>No tienes contactos</center>'
    if(db.length == 0){
        divVacio.appendChild(contactosVacio);
        parentNode.appendChild(divVacio);
    }else{
    //Obtener las claves guardadas en el Local Storage
    let claves = Object.keys(db);
    //console.log(claves);
        //obtener todas las claves existentes
        for(clave of claves){
                //obtener objectos para acceder a sus propiedades
            let contacto = JSON.parse(db.getItem(clave));
            crearContacto(parentNode, contacto, db);
        }}
}
const crearContacto =(parentNode, contacto, db)=>{
    var divContacto = document.createElement('div');
    //let divContacto = document.createElement('div');
    let nombreContacto = document.createElement('h3');
    let numeroContacto = document.createElement('p');
    let direccionContacto = document.createElement('p');
    let iconBorrar = document.createElement('span');

    nombreContacto.innerHTML = contacto.nombre;
    numeroContacto.innerHTML = contacto.numero;
    direccionContacto.innerHTML = contacto.direccion;
    iconBorrar.innerHTML = 'delete_forever';

    divContacto.classList.add('tarea');
    iconBorrar.classList.add('material-icons','icono');

    iconBorrar.onclick = () =>{
        db.removeItem(contacto.id);
        window.location.reload();
    }

    divContacto.appendChild(nombreContacto);
    divContacto.appendChild(numeroContacto);
    divContacto.appendChild(direccionContacto);
    divContacto.appendChild(iconBorrar);

    parentNode.appendChild(divContacto);
}