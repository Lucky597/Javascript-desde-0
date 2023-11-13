
// alert("Alvago Magno");

// var nombre = "carlos";
// // nombre = "carlos"; //Global
// let nombreu = prompt("Ingresa tu nombre"); //Cajas para ingresar

// alert(nombreu);
// document.write(nombreu); //escribe directo en el html
// console.log(nombreu);
// //Array - Arreglo
// document.write("aaaaa");
// var amigos = ["c","i","a","b","o"];
// // var amigojs = ["ab", "a", 1, true];
// var i = 0;
// j=amigos.length-1;

// // while (i <= j){
// //    document.write(amigos[i] + "<br>");
// //    i=i+1;
// // };

// do { //se ejecuta almenos 1 vez
//    document.write(amigos[i] + "<br>");
//    i=i+1;
// }while (i <= j);

// while (i < miArreglo.length) {
//    console.log("miArreglo[i]");
//    i++;
// }
// amigojs[3] = "false";
// amigojs[amigojs.length] = "lLuis"
// amigojs.push("Clauidia", "JCSA", "UUDSA");
// amigojs.pop();

// document.write(amigojs[3]);

// document.write(amigojs.length);

// document.write(amigojs[amigojs.length - 1]);

// var amigosToal = amigojs.concat(amigos);
// document.write("aaauuuuuuuuua");
// document.write(amigosToal.join(" : ")); //no modifica el arrglo en si sino lo presenta asi
// var k = amigosToal.join(" // ");
// document.write(" - " + amigosToal + " * " + k + "----------------");
// var ordeAlfabetico = amigos.sort();
// var invertirOrden = amigos.reverse();

// document.write(ordeAlfabetico + "   ________  "+ invertirOrden);

// //Object - Objeto
// var obje = {
//     color: "Black",
//     size: 12
// }

// // Undefined  -   Indefinido
// var x;
// // Null
// var c = 10;
// var c = null

// // NaN
// var text2= "";
// document.write(text2 * 2 + "ho")
// //DA ES 0

// == compara el mismo valor por ejemplo 18 == '18? da true
// === compara valor y tipo de variable sean igualepar ser true
// for(i=0; i<=10; i++){
//     //
//     document.write(i + " Ou yeah " + amigojs[i] + "<br>" );
// }


 
// edad= '18'
// if (edad === 18){
//     document.write("son iguales en tipo y valor");
// }else if((edad == 18)){
//     document.write("son iguales solo en valor");
// }

// function saludo(nombre){
//    document.write("Hola " + nombre);
// }

// saludo("ALVARO");




// var suma = function (numero1, numero2){
//    var numero1 =parseInt(document.getElementById("numero1").value);
//    var numero2 =parseInt(document.getElementById("numero2").value);
//    var result = numero1+numero2;
//    return result;
// }
//se puede llamar una funcion queeste dentro de otra funcion
// var externaaa = function(){
//    var arbolito = "Externa";
//    var internaaa = function(){
//    //var arbolito = "Interna";//si esta variabe no se define se busca en el elemento padre eso es el scope de JavaScript
//    // desde afuera no se puede acceder a adentro pero de adentro hacia afuera si, el alert es el que esta buscando la variable
//    alert(arbolito);
//    }
//    internaaa();
// }

// externaaa();
//si se le quita el var a una varaible dentro d euna funcion se vuelve local, si se declara por fuera es local aun con el var
//document.write(suma(3,4));


//Para proteger el codigo meter todo dentro de una funcion auto invocada
// (function(){
// alert("Hola")
// }())

// var nasme = "Hernando"
// var name2 = nasme.substring(2);//elimina 2 caracteres
// var name3 = nasme.substr(0,3);
// var name4 = nasme.indexOf("a");
// document.write(name2 + "<br>");
// document.write(name3 + "<br>");
// document.write(name4);


//DOM

// var elemtosP = document.getElementsByTagName("p"); //todas las etiqueas parrrafo, es un arreglo
// var parrafo2 = document.getElementById("segundo"); //Accediendo por id

// //Para el contenido html, modificar
// elemtosP[0].innerHTML = "Bajo la lluvia";

// parrafo2.innerHTML=" Bajo el techo";

//id para JS
//Class para CSS


//Creando Nodos en el DOM
//1 Crear elemento (Etiqueta)
var elemento = document.createElement("h2");
//2 Crear un nodo de texto (Contenido)
var contenido = document.createTextNode("Esta es nuestra etiqueta h2")
//3 Añadir el nodo de texto al elemento
elemento.appendChild(contenido);//colocando cotenido dentro del elemento h2
//4 Agregar atributos al elemento
elemento.setAttribute("align", "center");
//5 Agregar el elemento al documento
// document.getElementById("subtitulo").appendChild(elemento);//colocando el elemento dentro del div que tiene el id "subtitulo"
// document.body.appendChild(elemento);
document.getElementById("h11").appendChild(elemento);


var colores = ["rojo", "azul", "verde", "amarillo"];