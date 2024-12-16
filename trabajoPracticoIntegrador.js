const prompt = require('prompt-sync')(); 





 
let libros =  [
    {id:1, titulo: "La Rueda del Tiempo 4", autor: "Robert Jordan", año: 2007, genero:"fantasia epica", disponibilidad: true},
    {id:2, titulo: "La Rueda del Tiempo", autor: "Robert Jordan", año: 1990, genero:"fantasia epica", disponibilidad: true},
    {id:3, titulo: "El Nombre del viento", autor: "J.R,R Tolkien",año:1954, genero:"fantasia epica", disponibilidad: true},
    {id:4, titulo: "La Espada Shannara", autor: "Paticj Rothfuss", año: 2007, genero:"fantasia epica", disponibilidad: true},
    {id:5, titulo: "Good Omens", autor: "Neil Gaiman",año:1990, genero:"fantasia", disponibilidad: true},
    {id:6, titulo: "Demonology an Devil lore", autor: "Moncure Daniel Conway", año: 1879, genero:"Estudio Historico",  disponible: true},
    {id:7, titulo: "Zetetic Astronomy: Earth Not a Globe", autor: "Samuel Rowbotham",año:1865, genero:"Ciencia",   disponible:true},
    {id:8, titulo: "200 Proofs Earth Is Not a Spinnig Ball", autor: "Alingenas", año: 2018, genero:"Ciencia",   disponible: true},
    {id:9, titulo: "Terra Plana: Reflexiones y Evidencias", autor: "Varios",año:1990, genero:"Ciencia",   disponible: true},
    {id:10, titulo: "Los engaños de la tierra Plana", autor: "Luis Alfonso Gamez", año: 1879, genero:"Ciencia",   disponible: true},
];


let usuario  =  [
    {id:1, nombre:"Anabela Perez", email:"anaconspirativa@ggmail.com", librosusados:[]},
    {id:2, nombre:"Anabela Dias", email:"diaslaluzdelaverdad@ggmail.com", librosusados:[]},
    {id:3, nombre:"Pedro Perez ", email:"Pedrofantacstic@ggmail.com", librosusados:[]},
    {id:4, nombre:"Lucas Suarez", email:"lucasfandenewwton@ggmail.com", librosusados:[]},
    {id:5, nombre:"Lucas Quiquela ", email:"lucasfandenewwton@ggmail.com", librosusados:[]},

    
];
 console.log("Bienvenido al nuevo sistema de gestiòn de libros, presione enter para inciar el sistema" )

 prompt();

function bibloteca () {
console.log ("1.Libros que estan actualmente en la bibloteca.");   
console.log ("2.Agregar Libro.");
console.log ("3.Buscar Libro.");
console.log ("4.Ordenar Libros.");
console.log ("5.Eliminar Libros.");
console.log ("6.Registrar Usuario.");
console.log ("7.Mostrar Usuarios.");
console.log ("8.Buscar Usuarios.")
console.log ("9.Borrar Usuario.");
console.log ("10.Prestar Libros.");
console.log ("11.Devolver Libro.");
console.log ("12.Generar Reporte.");
console.log ("13.Libros con Palabras.");
console.log ("14.Calculo de Estadìstca.");
console.log ("15.Normalizadora.")
console.log("16.Salir.")




let opcion = parseInt(prompt("Seleccione una opciòn de las anteriores mencionadas:"))

switch(opcion) {



    
    case 1:
        console.log("Lista de libros:");
        libros.forEach(libro => {
            console.log(`ID: ${libro.id}, Título: ${libro.titulo}, 
               Autor: ${libro.autor}, 
               Año: ${libro.año},
               Género: ${libro.genero}, 
               Disponible: ${libro.disponibilidad}`);
        });
        
        console.log("¿Desea volver al menù principal ?");
         console.log("Ingrese si para volver a menù principal y salir para salir del sistema del sistema.");
        let respuesta1= prompt("Su respuesta es:");
    
    
    if(respuesta1=== "si" ){
       console.log("Presione enter para volver al menù de principal ")
       prompt();
       bibloteca();
       
       
   
       break;
    
   
    } else  if (respuesta1 = "salir"){
       console.log("Acaba de salir del sistema, que tenga un buen dìa.");
       process.exit(0);

       break;

    }

case 2:
   //a)Implementar una función agregarLibro(id, titulo, autor, año, genero) que agregue un nuevo libro al array libros.
    function adi() {
        console.log("Ingrese Título del libro, recuerde nuestra política de libros admitidos:"); 
        
        let id = parseInt(prompt("Ingrese número de serie asignado, recuerde que no se debe repetir con los ya existentes para evitar confusión y pérdidas de libros:"));
        let titulo = prompt("Ingrese Título del libro, recuerde nuestra política de libros admitidos:");
        let año = parseInt(prompt("Por favor ingrese año de creación, no de edición, muchas gracias:"));
        let autor = prompt("Por favor recuerde ingresar el nombre del autor, no cometa errores al escribir el nombre:");
        let genero = prompt("Ingrese género del libro, recuerde revisar nuestras políticas de géneros aceptados para evitar acciones legales:");
    
        function registrarNuevolibro(id, titulo, año, autor, genero) {
            let nuevolibro = { id, titulo, año, autor, genero,   disponible: true };
            libros.push(nuevolibro);
        }
    
        registrarNuevolibro(id, titulo, año, autor, genero);
    
        console.log(`libro registrado:
            Id:${id}, Titulo:${titulo}, Año: ${año}, Autor: ${autor}, Genero: ${genero}`);
    }
    
    adi();
    console.log ("Desea ver los libros actualizados");
    console.log("ingrese si para verlos");
    let contesta35 = prompt( " Su respues es:")
    if(contesta35 === "si"){ console.log(libros);

    }
    
   

    let respuesta2=[]
    do{ 
console.log("¿Quiere ingresar ortro libro?")
 console.log("Ingrese si para seguir agregando, ingrese no para volver a menu de ocpicones y salir para salir del sistema.")
 let respuesta2 = prompt("Su respuesta es:");


 if (respuesta2 === "si"){
    
   

    adi();
    console.log ("Desea ver los libros actualizados");
    console.log("ingrese si para verlos");
    let contesta35 =prompt( " Su respuesta es:");
    if(contesta35 === "si"){ console.log(libros);

    }
    

 }else if(respuesta2 === "no" ){

    console.log("Presione enter para volver al menù de seleciòn");
 prompt();


    bibloteca();

 prompt();

 } 

 else if (respuesta2=== "salir"){
    
    console.log("Acaba de salir del sistema, que tenga un buen dìa.");

 process.exit(0);
    

 break;


 }}while(respuesta2 !== "no" && respuesta2!== "salir");
 


case 3:
    function librobuscado() {
        let titulo = prompt("Titulo del libro a buscar:").trim();
        let autor  = prompt ("Autor:").trim();
        let resultados=[];
         
        for ( let i= 0; i < libros.length; i++){

           if (typeof libros[i].titulo === "string" && typeof libros[i].autor === "string" &&
            libros[i].titulo.toLowerCase() === titulo.toLowerCase() && 
               libros[i].autor.toLowerCase() === autor.toLowerCase())
               {
               resultados.push(libros[i])
    
           }
        }
        if (resultados.length > 0)
        {
           console.log(`Encontrado, Titulo: ${titulo}, Autor: ${autor}` )
        }
        else{
           console.log("Este tipo de libro no se encuentra en esta bibloteca , porfavor explere nuestro catalogo existente de libros")
        }
    }
    

    librobuscado(); 

  let respuesta3 =[];
  do{
    console.log("¿Quiere buscar otro libro?")
 console.log("Ingrese si para seguir buscando , ingrese no para volver a menu de ocpicones y salir para salir del sistema")
 let respuesta3 = prompt("Su respuesta es:");
 
 
 if (respuesta3 === "si"){
    librobuscado(); 


    
    
 }else if(respuesta3=== "no" ){

    console.log("Presione enter para volver al menù de seleciòn")
    prompt();


    bibloteca();
    
    

    break;
 

 } else if (respuesta3=== "salir"){
    
    console.log("Acaba de salir del sistema, que tenga un buen dìa.");

 process.exit(0);
    

 break;


 }}while(respuesta3 !== "no" && respuesta3!== "salir");



case 4:


 /*2 c)Desarrollar una función ordenarLibros(criterio) que ordene los libros por título
o año utilizando el algoritmo de ordenamiento burbuja (bubble sort) y luego
muestre los libros ordenados en la consola.*/
 
    
function ordenarLibros(criterio) {
   for (let i = 0; i < libros.length - 1; i++) {
       for (let j = 0; j < libros.length - 1 - i; j++) {
           let comparar = false;
           if (criterio === 'titulo') {
               comparar = libros[j].titulo > libros[j + 1].titulo;
           }

           if (comparar) {
               let temp = libros[j];
               libros[j] = libros[j + 1];
               libros[j + 1] = temp;
           }
       }
   }
}

ordenarLibros('titulo');

console.log("Libros ordenados:");
console.log(libros);


    
        console.log("¿Desea volver al menu principal ?")
     console.log("Ingrese si para volver al menù principal, salir para salir del sistema.")
     let respuesta4= prompt("Su respuesta es:");
     
     
     if (respuesta4=== "si"){
        console.log("Presione enter para volver al menù de seleciòn")
        bibloteca();
        prompt();


     }else if(respuesta4=== "salir"){

        console.log("Acaba de salir del sistema, que tenga un buen dìa.")
        process.exit(0);
    
    
        break;
     
    
     }
        
       
     
    
    
     
    
    

case 5:

function Elimiacion() {
    let id = parseInt(prompt("Ingrese id del libro que crea que deba ser eliminado del sistema:"));
    libros = libros.filter(function(libro) {
        return libro.id !== id;
    });

    
}

Elimiacion();
console.log("¿Desea ver la lsita de libros actualizados?")
    let contestacion22 = prompt("Su respuesta es:")
    if(contestacion22 === "si"){
    console.log("Libros restantes:", libros);}


    let respuesta5 =[]

    do{
        console.log("¿Desea eliminar otro vez los libro?")
     console.log("Ingrese si para seguir elinando libros , ingrese no para volver a menu de ocpicones y salir para salir del sistema del sistema")
     let respuesta5 = prompt("Su respuesta es:");
     
     
     if (respuesta5 === "si"){
      Elimiacion();
      console.log("¿Desea ver la lsita de libros actualizados?")
    let contestacion22 = prompt("Su respuesta es:")
    if(contestacion22 === "si"){
    console.log("Libros restantes:", libros);}
     
   

        
        
     }else if(respuesta5=== "no" ){
        console.log("Presione enter para volver al menù de seleciòn")
        prompt();
        bibloteca();
        
        
    
        break;
     
    
     } else if (respuesta5== "salir"){
        
        console.log("Acaba de salir del sistema, que tenga un buen dìa.")
        process.exit(0);

    
     break;
    
    
     }}while(respuesta5 !== "no" && respuesta5!== "salir");
    
case 6:
    console.log ("Agregar nuevo usuario");

  
    let nombre= prompt("Ingrese nombre:")
    
    let email= prompt("ingrese email:");

    
    
    function registrarUsuario (){
     
        let nuevousuario = {nombre, email};
        usuario.push(nuevousuario);

       console.log(`Usuario registrado con el nombre  ${nuevousuario.nombre} registrado, con el email ${nuevousuario.email}`);
    }
   
    registrarUsuario(); 
   

    let respuesta6 =[]

    do{
        console.log("¿Desea agregar otro usuario ?");
     console.log("Ingrese si para agregrar otro Usuario, ingrese no para volver a menu de opicones y salir para salir del sistema del sistema")
     let respuesta6 = prompt("Su respuesta es:");
     
     
     if (respuesta6 === "si"){
      console.log ("Agregar nuevo usuario");

  
      let nombre= prompt("Ingrese nombre:")
      
      let email= prompt("ingrese email:");
  

         registrarUsuario(); 
    
        
        
     }else if(respuesta6=== "no" ){
        console.log("Presione enter para volver al menù de seleciòn")
        prompt();
        bibloteca();
        
        
    
        break;
     
    
     } else if (respuesta6== "salir"){
        
        console.log("Acaba de salir del sistema, que tenga un buen dìa.");
        process.exit(0);
    
     break;
    
    
     }}while(respuesta6 !== "no" && respuesta6 !== "salir");
     break;



    
case 7:
   /*
   Implementar una función mostrarTodosLosUsuarios() que me devuelva el
   array completo de usuarios*/
    
    
    function mostrarTodosLosUsuarios(){

        console.log("Los usisuarios existentes son: ")
        return usuario;
    }
    console.log(mostrarTodosLosUsuarios()); 

    

    
        console.log("¿Desea volver al menu principal ?");
     console.log("Ingrese si para para volver al menu principal, ingrese salir para salir del sistema ")
     let respuesta7 = prompt("Su respuesta es:");
      
     
     if (respuesta7 === "si"){
        console.log("Presione enter para volver al menù de seleciòn")
        prompt();

        bibloteca();
        break;
    
    
        
        
     }else if(respuesta7=== "salir" ){
        console.log("Acaba de salir del sistema, que tenga un buen dìa.");
        process.exit(0)
        
        
    
        break;
     
    
    
     
    
    
     }

    break;



case  8:
    let mail= prompt("ingrese email a buscar:")


 
function buscarUsuario(mail) {


    let usuarioEncontrado = usuario.find(u => u.email === mail);   

if (usuarioEncontrado) { 
    console.log(`Usuario encontrado con el nombre: ${usuarioEncontrado.nombre}`)
 } else {
 console.log('No se encontró ningún usuario con ese email.'); 
}
}

buscarUsuario(mail)

    let respuesta8 =[]

    do{
        console.log("¿Desea buscar  otro usuario ?");
     console.log("Ingrese si para seguir buscando otro, ingrese no para volver a menu de ocpicones y salir para salir del sistema del sistema")
     let respuesta8 = prompt("Su respuesta es:");
     
     
     if (respuesta8 === "si"){

      let mail= prompt("ingrese email a buscar:")
        buscarUsuario();
    
        
         }else if(respuesta8=== "no" ){
        console.log("Presione enter para volver al menù de seleciòn")
        prompt();
        bibloteca();
        
        
    
        break;
     
    
     } else if (respuesta8 == "salir"){
        
        console.log("Acaba de salir del sistema, que tenga un buen dìa.");
        process.exit(0);
    
     break;
    
    
     }}while(respuesta8 !== "no" && respuesta8 !== "salir");


    
    break;

case 9:
   

        /*3d Implementar una función borrarUsuario(nombre, email) que elimine el
usuario seleccionado.*/
    
        

    function borrarUsuario (nombre, correo){
        let Nnombre = prompt("Ingrese el nombre del ussuario que desea eliminar:");
        let correoa = prompt("Ingrese email correspondiente a este usuario:");

         const usuariosActualizados = usuario.filter(usuario => typeof usuario.nombre === "string" && typeof usuario.email === "string" 
         && !(usuario.nombre.toLowerCase() === Nnombre && usuario.email.toLowerCase() === correoa));
            


        if(usuario.length === usuariosActualizados.length){
        
             console.log(` Usuario no encontrado ${Nnombre}`)

        }else {
            console.log(` Usuario ${Nnombre} ha sido eliminado`)
            usuario = usuariosActualizados;
            

        }
           
    }
 

    borrarUsuario();
    console.log("¿Desea ver los usuarios modificados?")
    console.log("ingre si para ver, ingrese no para no ver")
     let contesta34 = prompt("Su respuesta es:")
      if (contesta34 === "si"){
    console.log("Usuarios restantes:", usuario);}
            

    let respuesta9 =[]

    do{
        console.log("¿Desea buscar  otro usuario ?");
     console.log("Ingrese si para seguir eliminando usuarios , ingrese no para volver a menu de ocpicones y salir para salir del sistema del sistema")
     let respuesta9 = prompt("Su respuesta es:");
     
     
     if (respuesta9 === "si"){

        borrarUsuario(); 
    
        
        
     }else if(respuesta9=== "no" ){
        console.log("Presione enter para volver al menù de seleciòn")
        prompt();
        bibloteca();
        
        
    
        break;
     
    
     } else if (respuesta9 == "salir"){
        
        console.log("Acaba de salir del sistema, que tenga un buen dìa.");
        process.exit(0);
    
     break;
    
    
     }}while(respuesta9!== "no" && respuesta9 !== "salir");


    
    break;


    break;
case 10:
    //5 Sistema de Préstamos

    function prestarLibro() { 
  let idLibro = parseInt(prompt("Ingrese el id del libro que desea pedir prestado:")); 
    let idUsuario = parseInt(prompt("Ingrese el id del usuario que desea pedir prestado el libro:"));

        let libro = libros.find(libro => libro.id === idLibro && libro.disponible); 
        let usuar = usuario.find(usuario => usuario.id === idUsuario); 
        if (libro && usuar) { libro.disponibilidad = false; 
            usuar.librosusados.push(libro.id); 
            console.log(`El libro prestado fue "${libro.titulo}" a ${usuar.nombre}`); } 

            else { console.log("El libro no se encuentra, posiblemente no exista o ya esté prestado."); } } 
         
           
          prestarLibro(); 
           
          console.log ("¿Desea ver los registros actualizados?")
          console.log ("Si para verlo, y no para no verlo")
          let conteste = prompt("Su respuesta es:")
          if ( conteste=="si"){
        console.log("Usuarios actualizados:", usuario); console.log("Libros actualizados:", libros);}





    let respuesta10 =[]

    do{
        console.log("¿Desea pedir prestado otro libro ?");
     console.log("Ingrese si para seguir pidendo prestado libros, ingrese no para volver a menu de ocpicones y salir para salir del sistema del sistema")
     let respuesta10 = prompt("Su respuesta es:");
     
     
     if (respuesta10 === "si"){

 
        
        prestarLibro(); 

        console.log ("¿Desea ver los registros actualizados?")
        console.log ("Si para verlo, y no para no verlo")
        let conteste = prompt("Su respuesta es:")
        if ( conteste=="si"){
      console.log("Usuarios actualizados:", usuario); console.log("Libros actualizados:", libros);}
        
        
     }else if(respuesta10=== "no" ){
        console.log("Presione enter para volver al menù de seleciòn")
        prompt();
        bibloteca();
        
        
    
        break;
     
    
     } else if (respuesta10 == "salir"){
        
        console.log("Acaba de salir del sistema, que tenga un buen dìa.");
        process.exit(0);
    
     break;
    
    
     }}while(respuesta10 !== "no" && respuesta10!== "salir");


    
    break;


    
case 11: 

//sistema de devoluviones

function devolverLibro() {

let Libroid=  parseInt(prompt("Ingrese el id del libro que desea devolver:"));
let Usuarioid = parseInt(prompt("ingrese Usiario que desea desa devolver el libro:"));
let usuarioEncontrado =usuario.find(usuario => usuario.id ===Usuarioid);
let LibroEcncotrado = libros.find(libro => libro.id === Libroid);

if (LibroEcncotrado && usuarioEncontrado && usuarioEncontrado.librosusados.includes(Libroid)) {
 LibroEcncotrado.disponible = true;
    usuarioEncontrado.librosusados = usuarioEncontrado.librosusados.filter(id => id!== Libroid);
    console.log(`El libro ${LibroEcncotrado.titulo} ha sido devulto por ${usuarioEncontrado.nombre}`);

} else {

console.log("No se puede devolver el libro, verificar datos ingresados, capaz no es de esta bibloteca")

}


};

     devolverLibro();

     console.log ("¿Desea ver los registros actualizados?")
          console.log ("Si para verlo, y no para no verlo")
          let conteste2 = prompt("Su respuesta es:")
          if ( conteste2=="si"){
        console.log("Usuarios actualizados:", usuario); console.log("Libros actualizados:", libros);}

     let respuesta11 =[]

     do{
         console.log("¿Desea devolver otro libro ?");
      console.log("Ingrese si para seguir devolviendo libros, ingrese no para volver a menu de ocpicones y salir para salir del sistema del sistema")
      let respuesta11 = prompt("Su respuesta es:");
      
      
      if (respuesta11 === "si"){
 
  
     devolverLibro();

            console.log ("¿Desea ver los registros actualizados?")
          console.log ("Si para verlo, y no para no verlo")
          let conteste2 = prompt("Su respuesta es:")
          if ( conteste2=="si"){
        console.log("Usuarios actualizados:", usuario); console.log("Libros actualizados:", libros);}
         
      }else if(respuesta11=== "no" ){
         console.log("Presione enter para volver al menù de seleciòn")
         prompt();
         bibloteca();
         
         
     
         break;
      
     
      } else if (respuesta11 == "salir"){
         
         console.log("Acaba de salir del sistema, que tenga un buen dìa.");
         process.exit(0);
     
      break;
     
     
      }}while(respuesta11 !== "no" && respuesta11!== "salir");
 
 
     
     break;

     

case 12:


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
    const libroMasNuevo = libros.reduce((nuevo, libro) => (libro.año > nuevo.año ? libro : nuevo));

    return { 
        totalLibros, 
        librosPrestrados, 
        cantidadPorGenero, 
        libroMasAntiguo: libroMasAntiguo.titulo,
         libroMasNuevo: libroMasNuevo.titulo }; 
       
    }
         let reporte=generarReporte(); 
  
         console.log('Reporte de Libros:', reporte);
         console.log ("Gracias por consifiar en nuestro sistema de organizar los libros que cada uno es un tesoro de la Humandad, que tenga un buen dìa")
               



    

    
        console.log("¿Desea volver al menù principal ?");
     console.log("Ingrese si para volver a menù principal y salir para salir del sistema del sistema")
     let respuesta12 = prompt("Su respuesta es:");
     
     
    
    
        
        
     if(respuesta12=== "si" ){
        console.log("Presione enter para volver al menù de principal ")
        prompt();
        bibloteca();
        
        
    
        break;
     
    
     } else  if (respuesta12 == "salir"){
        console.log("Acaba de salir del sistema, que tenga un buen dìa.");
        process.exit(0);

        break;

     }
    

break;
  
case 13 :

/* a) Implementar una función librosConPalabrasEnTitulo() que identifique y
muestre todos los libros cuyo título contiene más de una palabra (no títulos
que contengan números ni otros caracteres). La función debe devolver un
array con los títulos de esos libros y mostrarlo en la consola. */

function librosConPalabrasEnTitulo(){

    const titulos = libros
    .map (libros => libros.titulo)
    .filter(titulo => {
        const palabras = titulo.split(" ").filter(palabra =>palabra.length> 0);
        
        
        const soloLetras = palabras.every (palabra => /^[a-zA-Z]/.test(palabra));
        const contieneNumero = /\d/.test(titulo)

        

        return soloLetras && palabras.length >1 && !contieneNumero;


        
    });
      
    
    return (titulos);

 }

 const titulos = librosConPalabrasEnTitulo();
 console.log ('Libros con titulos con palabras:', titulos);

     
      librosConPalabrasEnTitulo();


   

      
          console.log("¿Desea  volver al menù principal ?");
       console.log("Ingrese si para volver al menu principal y salir para salir del sistema del sistema")
       let respuesta13= prompt("Su respuesta es:");
       
       
       if (respuesta13 === "si"){
  
         console.log("Presione enter para volver al menù de seleciòn")
         prompt();
         bibloteca();
         
         
         
      
       } else if (respuesta13 == "salir"){
          
          console.log("Acaba de salir del sistema, que tenga un buen dìa.");
          process.exit(0);
      
       break;
      
      
       }
  
      
      break;
 
      


     

case  14:

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
        console.log (`El promedio de años es: ${promedioAnios}`);
        console.log (`El libro màs viejo es: ${añoMasAntiguo}`);
        console.log (`El libro màs nuevo es: ${añoMasNuevo}`);
        console.log (`diferencia de años entre el màs nuevo y el màs viejo: ${diferenciasAnios}`);
        console.log (`EL año con màs frecuencia de libros en la bibloteca: ${añoMasFrecuente}`)

        
     
     }
   
     

    
    CalcularEstadisticas();


    console.log("¿Desea volver al menù principal ?");
    console.log("Ingrese si para volver a menù principal y salir para salir del sistema del sistema");


    let respuesta14= prompt("Su respuesta es:");
    
    
    if(respuesta14=== "si" ){
       console.log("Presione enter para volver al menù de principal ")
       prompt();
       bibloteca();
       
       
   
       break;
    
   
    } else  if (respuesta14 == "salir"){
       console.log("Acaba de salir del sistema, que tenga un buen dìa.");
       process.exit(0);

       break;

    }

    break;

case 15:
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
    console.log ("Usuarios normalizados", usuario);
}
    

    normalizadora();

    console.log("¿Desea volver al menù principal ?");
    console.log("Ingrese si para volver a menù principal y salir para salir del sistema del sistema");


    let respuesta15= prompt("Su respuesta es:");
    
    
    if(respuesta15=== "si" ){
       console.log("Presione enter para volver al menù de principal ")
       prompt();
       bibloteca();
       
       
   
       break;
    
   
    } else  if (respuesta15== "salir"){
       console.log("Acaba de salir del sistema, que tenga un buen dìa.");
       process.exit(0);

       break;

    }

    break;


    break;

case 16:
console.log("Acaba de salir del sistema, que tenga un buen dìa.");
process.exit(0)
break



}}


bibloteca();
