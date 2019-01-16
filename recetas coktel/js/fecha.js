//jaime inprime en consola
var fecha = new Date(64, 7, 19);
fecha.setFullYear(64);
var dias_semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"];
console.log("Año: " + fecha.getUTCFullYear());
console.log("Mes: " + fecha.getMonth());
console.log("Día: " + fecha.getUTCDate());
console.log("Día de la semana: " + dias_semana[fecha.getDay()]);


/*
document.getElementById("boton_receta1").addEventListener("click", function(){
 var ingredientes=["Claras de huevo", "Azucar Blanca", "Leche Condensada", "Gelatina sin sabor", "Limones"];

var unidadesClaraDeHuevo = 5;
var gramosazucar = 150;
var gramoslecheCondensada = 200;
var sobresGelatina = 1;
var unidadeslimon = 4;

console.log("Adicionar las "+unidadesClaraDeHuevo+" "+ingredientes[0]+"en bol y batir con los "+gramosazucar+"gramos de "+ingredientes[1]);
//jaime
console.log("Adicionar los"+gramoslecheCondensada+" gramos de " +ingredientes[2]+" y batir bien");
//jaime
console.log("Adicionar el zumo de "+unidadeslimon+" "+ingredientes[4]+" y "+sobresGelatina+" sobre de "+ingredientes[3]+"hidratada en el agua tibia");
//jaime
console.log("Deposita la mescla en el moldes individuales y colocalos a refrigerar");
})
document.getElementById("boton_receta2").addEventListener("click", function(){
  var ingredientes= ["Ginebra", "Vermouth seco", "Aceituna"];
  var onzasGine = 2.5;
  var onzasVermouth = 0.5;
  var unidadesAceituna = 1;

console.log("Verter las "+onzasGine+"onzas de "+ingredientes[0]+" en una coctelera");
//
console.log("Añadir "+onzasVermouth+" onzas de "+ingredientes[1]);
//
console.log("Servir en una copa tipo Martini y añadir "+unidadesAceituna+" "+ingredientes[2]);
})
*/
