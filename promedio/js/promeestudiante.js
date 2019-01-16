
var estudiante = {
nombre: "Milton Gomez",
Curso: 7,
Matematicas: 6,
Ingles: 8,
Castellano: 8,
obtenerNombre: function (){
return this.nombre
},
obtenerPromedio: function () {
var promedio = (this.Matematicas + this.Ingles + this.Castellano) / 3;
return promedio;
},
}


console.log("Curso :" + estudiante.Curso);
console.log("Matematicas :" + estudiante.Matematicas);
console.log("Ingles :" + estudiante.Ingles);
console.log("Castellano :" + estudiante.Castellano);
console.log(estudiante.obtenerPromedio()); //en funcion
//nombre de variable y nombre de metodo o funcion
// y los parametros dentro delos() si existen en este caso no lo tiene
//console.write(nombre[0][1]);// par imprimir en pantalla

document.getElementById("d1").innerHTML = estudiante.obtenerNombre();
document.getElementById("d2").innerHTML = estudiante.Curso;
document.getElementById("d3").innerHTML = estudiante.Matematicas;
document.getElementById("d4").innerHTML = estudiante.Ingles;
document.getElementById("d5").innerHTML = estudiante.Castellano;
document.getElementById("datos").innerHTML = estudiante.obtenerPromedio();
//document.getElementById("promedio").innerHTML = obtenerPromedio;
// document.log("nombre :"+this.nombre[0]);
//inventario[1][1]
// en html solo esto
// <p id="datos"> </p>
// y en javascript esto
 // document.getElementById("datos").innerHTML = inventario[0][3];
