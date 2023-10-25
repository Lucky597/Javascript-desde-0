
// alert("Alvago Magno");

// var nombre = "carlos";
// // nombre = "carlos"; //Global
// let nombreu = prompt("Ingresa tu nombre"); //Cajas para ingresar

// alert(nombreu);
// document.write(nombreu); //escribe directo en el html
// console.log(nombreu);
// //Array - Arreglo

var amigos = ["c","i","a","b","o"];
var amigojs = ["ab", "a", 1, true];
amigojs[3] = "false";
amigojs[amigojs.length] = "lLuis"
amigojs.push("Clauidia", "JCSA", "UUDSA")
amigojs.pop();
document.write(amigojs[3]);
document.write(amigojs.length);
document.write(amigojs[amigojs.length - 1]);
var amigosToal = amigojs.concat(amigos);
document.write(amigosToal.join(" : ")); //no modifica el arrglo en si sino lo presenta asi
var k = amigosToal.join(" // ")
document.write(" - " + amigosToal + " * " + k + "----------------");
var ordeAlfabetico = amigos.sort();
var invertirOrden = amigos.reverse();
document.write(ordeAlfabetico + "   ________  "+ invertirOrden);

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