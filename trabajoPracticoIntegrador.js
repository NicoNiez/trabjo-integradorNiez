const prompt = require('prompt-sync')(); 
//1) Estructura de Datos

 let libros =  [
    {id:1, titulo: "El señor de Los anilos", autor: "J.R,R Tolkien",año:1954, genero:"fantasia epica", disponibilidad: true},
    {id:2, titulo: "La Rueda del Tiempo", autor: "Robert Jordan", año: 1990, genero:"fantasia epica", disponibilidad: true},
    {id:3, titulo: "El Nombre del viento", autor: "J.R,R Tolkien",año:1954, genero:"fantasia epica", disponibilidad: true},
    {id:4, titulo: "La Espada Shannara", autor: "Paticj Rothfuss", año: 2007, genero:"fantasia epica", disponibilidad: true},
    {id:5, titulo: "Good Omens", autor: "Neil Gaiman",año:1990, genero:"fantasia", disponibilidad: true},
    {id:6, titulo: "Demonology an Devil lore", autor: "Moncure Daniel Conway", año: 1879, genero:"Estudio Historico", disponibilidad: true},
    {id:7, titulo: "Zetetic Astronomy: Earth Not a Globe", autor: "Samuel Rowbotham",año:1865, genero:"Ciencia", disponibilidad: true},
    {id:8, titulo: "200 Proofs Earth Is Not a Spinnig Ball", autor: "Alingenas", año: 2018, genero:"Ciencia", disponibilidad: true},
    {id:9, titulo: "Terra Plana: Reflexiones y Evidencias", autor: "Varios",año:1990, genero:"Ciencia", disponibilidad: true},
    {id:10, titulo: "Los engaños de la tierra Plana", autor: "Luis Alfonso Gamez", año: 1879, genero:"Ciencia", disponibilidad: true},
];


let usuario =  [
    {id:1, nombre:"Anabela Perez ", email:"anaconspirativa@ggmail.com", librosusados:[7,8]},
    {id:1, nombre:"Anabela Dias", email:"diaslaluzdelaverdad@ggmail.com", librosusados:[8,7]},
    {id:1, nombre:"Pedro Perez ", email:"Pedrofantacstic@ggmail.com", librosusados:[1,2,7,9]},
    {id:1, nombre:"Lucas Suarez", email:"lucasfandenewwton@ggmail.com", librosusados:[10]},
    {id:1, nombre:"Lucas Quiquela ", email:"lucasfandenewwton@ggmail.com", librosusados:[6]},

    
];
console.log(`Libros acrtuales ${libros}`)
console.log(`Libros acrtuales ${usuario}`) 
 

// 2  Funciones de Gestión de Libros
//a)Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo libro al array libros.

function adeciondelibros(){

    let superbasedelibros =[]
    console.log("Ingrese Titulo del libro, recuede nuestra politica de libros admitidos ");
    let id = prompt("Ingres numero de serie asignado, recuerde que no se debe repitir con los ya existentes para evitar confuncion y perdidas de libros:")
    let titulo = prompt("Ingrese Titulo del libro, recuede nuestra politica de libros admitidos: ");
    let año = prompt("Por favor ingrese año de creaciòn, no de edicion, muchas gracias:");
    let autor= prompt("Porfavor recuerde ingresar el nombre del autor, no comenta errores al ecribir el nombre:");
    let genero=prompt("Ingrese genero del libro, recuerde revisar nuestras politicas de generos acceptados evite acciones legales:");


// array a ausar
const libro ={
    id: id,
    titulo: titulo,
    año: año,
    autor: autor,
    genero: genero
};
 


superbasedelibros.push(libro);

console.log("El libro recien agredado es", libro)
}




// 2 b)Crear una función buscarLibro(criterio, valor) que permita buscar libros portítulo, autor o género utilizando el algoritmo de búsqueda lineal.

 




function librobuscado() {
     let titulo = prompt("Titulo del libro a buscar:");
     let autor  = prompt ("Autor:");
     let resultados=[];
      
     for ( let i= 0; i < libros.length; i++){
        if (libros [i].titulo.toLowerCase() === titulo.toLowerCase() && 
            libros[i].autor.toLocaleLowerCase() === autor.toLowerCase())
            {
            resultados.push(libros[i])

        }
     }
     if (resultados.length > 0)
     {
        console.log("encontrado")
     }
     else{
        console.log("Este tipo de libro no se encuentra en esta bibloteca de alto nivel, porfavor mejore sus gustos por los libros")
     }
}

 /*2 c)Desarrollar una función ordenarLibros(criterio) que ordene los libros por título
o año utilizando el algoritmo de ordenamiento burbuja (bubble sort) y luego
muestre los libros ordenados en la consola.*/
 
 function ordenarLibros(){

 

 for (let i = 0; i < libros.length - 1; i++){
    for (let j = 0; j > libros.length - -1 - i;j++) {
        let comparar = false;
        if ( criterio === 'titulo') {
            comparar = libros[j].titulo > libros [j+1].titulo;
        }

        
        if (comparar) {
            let temp = libros[j];
            libros[j] =libros [j +1];
            libros[j+1] =temp
        }
        }
    }
    }


   

   
/*2d Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por
parámetro. */
 
    function Elimiacion (){
    
        

        let id = prompt("Ingrese por favor el libro que crea que no cumpla con el nivel de esta bibloteca para que puda ser eliminado inmediatamente:")

        libros = libros.filter(function (libro){
            return libro.id !== id;
        });
        console.log("libros restantes", libros)
        



    }
   


    /*3a) Implementar una función registrarUsuario(nombre, email) que agregue un
nuevo usuario al array usuarios. */ 
    
    

    console.log ("Agregar nuevo usuario");

    let usuraios = []

    let nmbre= prompt("Ingrese nombre")
    let email= prompt("ingrese email:");

    function registrarUsuario (nmbre, email){
        let usuarios = {nmbre, email};
        usuario.push(usuarios);
        console.log(`Usuario ${nmbre} registrado, con el email ${email}`);
    }
   

   /*3b
   Implementar una función mostrarTodosLosUsuarios() que me devuelva el
   array completo de usuarios*/
   const usuarios =  [
    { nombre:"Anabela Perez ", email:"anaconspirativa@ggmail.com", librosusados:[7,8]},
    { nombre:"Anabela Dias", email:"diaslaluzdelaverdad@ggmail.com", librosusados:[8,7]},
    { nombre:"Pedro Perez ", email:"Pedrofantacstic@ggmail.com", librosusados:[1,2,7,9]},
    { nombre:"Lucas Suarez", email:"lucasfandenewwton@ggmail.com", librosusados:[10]},
    {nombre:"Lucas Quiquela ", email:"lucasfandenewwton@ggmail.com", librosusados:[6]},

    
];
function mostrarTodosLosUsuarios(){
    return usuarios;
}



/*Crear una función buscarUsuario(email) que devuelva la información de un
usuario dado su email.*/




let mail= prompt("ingrese email a buscar")
let Usu = buscarUsuario(mail)
 
function buscarUsuario(mail) {

     return usuarios.find(usuario => usuario.email === mail);   

if (usuarioEncontrado) { 
    console.log(`Usuario encontrado ${Usu}`)
 } else {
 console.log('No se encontró ningún usuario con ese email.'); 
}
}


   
   
   /*3d Implementar una función borrarUsuario(nombre, email) que elimine el
usuario seleccionado.*/


    
    
    let nombre = prompt("ingrese el nombre del ussuario que desea eliminar");
     
    
        

    function borrarUsuario (nombre, email){


        const usuariosActualizados =usuarios.filter (usuario => usuario.nombre.toLowerCase() !==nombre.toLowerCase());

        if(usuarios.length === usuariosActualizados.length){
        
             console.log(` Usuario no encontrado ${nombre}`)

        }else {
            console.log(` Usuario ${nombre} ha sido eliminado`)
        }

    }
 

    
//4  Sistema de Préstamos
/*a)  Desarrollar una función prestarLibro(idLibro, idUsuario) que marque
un libro como no disponible y lo agregue a la lista de libros prestados
del usuario. */



let idLibro= prompt("Ingrese el id del libro que desea pedir prestado")
let idUsuario =prompt("ingrese Usiario que desea pedir prestado el libro")



function prestarLibro(idLibro,idUsuario){
    let libro = libros.find(libro => libro.id === idLibro && libro.disponible)


let usuario = usuarios.find(usuario => usuario.id === idUsuario);

if (libro && usuario) {

    libro.disponible =false;
    usuario.librosusados.Push(libro.id);
    console.log(`El libro prestado fue ${libro.titulo} a ${usiaro.nombre}`)
}else{
    console.log("El libro no se encuentra ,posiblemente no exista")
}
};

/*Implementar una función devolverLibro(idLibro, idUsuario) que
marque un libro como disponible y lo elimine de la lista de libros
prestados del usuario. */

let Libroid= prompt("Ingrese el id del libro que desea devolver ")
let Usuarioid =prompt("ingrese Usiario que desea desa devolver el libro")

function devolverLibro() {

let usuarioEncontrado =usuario.find(usuario => usuario.id ===Usuarioid);
let LibroEcncotrado = libros.find(libro => libro.id === Libroid);

if (LibroEcncotrado && usuarioEncontrado && usuarioEncontrado.librosPrestrados.includes(LibroEcncotrado))
{ LibroEcncotrado.disponible = true;
    usuarioEncontrado.librosPrestrados = usuarioEncontrado.librosPrestrados.filter(ide !== Libroid);
    console.log(`El libro ${LibroEcncotrado.titulo} ha sido devulto por ${usuarioEncontrado.nombre}`);

} else {

console.log("No se puede devolver el libro, verificar datos ingresados, capaz no es de esta bibloteca")

}
console.log('Estado de los libros:', libros);
console.log('Estado de los Usuarios:', usuario);

};





//5 Sistema de Préstamos
/*a) Crear una función generarReporteLibros() que utilice métodos avanzados
de arrays (.map(), .filter(), .reduce()) para generar un reporte con la
siguiente información:
✔ Cantidad total de libros.
✔ Cantidad de libros prestados.
✔ Cantidad de libros por género.
✔ Libro más antiguo y más nuevo*/



function generarReporte() {

    const totalLibros = libros.length;

    const librosPrestrados = libros.filter(libro => ! libro.disponibilidad).length;
    
    const cantidadPorGenero = libros.reduce((acc, libros) => {
acc[libros.genero] =(acc[libros.genero] || 0) +1;
return acc;

    })
 
    const libroMasAntiguo = libros.reduce((antiguo,libro) => (libro.año <antiguo.año ? libro : antiguo));

    return { 
        totalLibros, 
        librosPrestrados, 
        cantidadPorGenero, 
        libroMasAntiguo: libroMasAntiguo.titulo,
         libroMasNuevo: libros.titulo }; 
       
         let reporte=generarReporte(); 

  console.log('Reporte de Libros:', reporte);
  console.log ("Gracias por consifiar en nuestro sistema de organizar los libros que cada uno es un tesoro de la Humandad, que tenga un buen dìa")
        }  


  

 
// 6 Identificación Avanzada de libros
/* a) Implementar una función librosConPalabrasEnTitulo() que identifique y
muestre todos los libros cuyo título contiene más de una palabra (no títulos
que contengan números ni otros caracteres). La función debe devolver un
array con los títulos de esos libros y mostrarlo en la consola. */
   
   console.log("Presione enter para empezar");
   prompt();

 
 function librosConPalabrasEnTitulo(){

    const titulos = libros
    .map (libros => libros.titulo)
    .filter(titulo => {
        const palabras = titulo.split(" ").filter(palabra =>palabra.length> 0);
        
        
        const soloLetras = palabras.every (palabra => /^[a-zA-Z]/.test(palabra));
        const contieneNumero = /\d/.test(titulo)

        

        return soloLetras && palabras.length >1 && !contieneNumero;


        
    });
      
    console.log(titulos);
    return (titulos);

 }

 const titulos = librosConPalabrasEnTitulo();
 console.log ('Libros con titutulos con palabras:', titulos);




//7 Cálculos Estadísticos




  function CalcularEstadisticas() {
 const anios = libros.map(libros =>libros.año);
    const sumaAnios = anios.reduce((suma, año) => suma + año, 0);
     const promedioAnios =sumaAnios /anios.length;

     const frecuencias = anios.reduce ((acc, año) => {
        acc[ año] = ([año] || 0) +1;
        return acc;
     }, {});

     const añoMasFrecuente = Object.keys(frecuencias).reduce((a,b) => frecuencias[a] > frecuencias[b] ? a: b);
      
     const añoMasAntiguo = Math.min (...anios);
     const añoMasNuevo =  Math.max(...anios);
     const diferenciasAnios = añoMasNuevo -añoMasAntiguo;

     return{

        promedioAnios,
        añoMasFrecuente,
        diferenciasAnios

     };

  }

  const estadisticas = CalcularEstadisticas();

  console.log('Estadisticas de libros publicados:', estadisticas); 

  //8  Manejo de Cadenas
 

function normalizadora() {
    libros.forEach(
        libro => {
            libro.titulo = libro.titulo.toUpperCase();

        })
    


libros.forEach(libro => {
    libro.autor = libro.autor.trim();
});

usuario.forEach(usuario => {
    usuario.email = usuario.email.trim().toLowerCase();
});

console.log("Libros normalizados:", libros);
console.log ("Usuarios normalizados, usuarioo");

};
normalizadora();


 
 console.log("Bienvenido al nuevo sistema de gestion de libros" )

console.log ("1.Agregar libro libro")
console.log ("2.Buscar libro")
console.log ("3 Ordenar libros");
console.log ("4. Eliminar libros");
console.log ("5 Registrar Usuario");
console.log ("6 MostrarUsuarios");
console.log ("7 buscar usuarios");
console.log ("8 Borrar Usuario");
console.log ("9 Prestar libros");
console.log ("10 Devolver libro");
console.log ("11 Generar Reporte");
console.log ("12 Libros con palabras ");
console.log ("13 Calculo de estadisitca");
console.log ("14 Normalizadora")


let opcion = parseInt(prompt("Seleccione una opcion de las anteriores mensionadas"))

switch(opcion) {


   
case 1:
    
    adeciondelibros();
    break

case 2:
    librobuscado(); 
    break;

case 3:
    ordenarLibros();
    break;

case 4:
    Elimiacion();
    break;  
    
case 5:
    registrarUsuario(nmbre, email); 
    break;
case 6:
    console.log(mostrarTodosLosUsuarios()); 
    break;
case  7:
    
    buscarUsuario();
    break;

case 8:
    borrarUsuario(nombre); 
    break;
case 9:
    prestarLibro();
    break;
case 10: 

     devolverLibro();
     break;

case 11:

    generarReporte();
    break;

case 12 :
     
      librosConPalabrasEnTitulo();
      break;

case  13:
    
    CalcularEstadisticas();
    break;

case 14:

    normalizadora();
    break;

    
}

