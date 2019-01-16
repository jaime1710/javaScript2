//jaime ingresa datos mediante prompt

var persona = {
  fecha:new Date(),
  nombre: "",
  estado_civil: "",
  edad: 0,
	peso: 0,
	estatura: 0,
  fecha: new Date(),
	IMC: function calIMC (pes, est) {
		var imc = pes / (est ^ 2);
		return imc;
	}

}

persona.nombre = prompt("Ingrese el nombre del Estudiante :");
persona.estado_civil = prompt("Ingrese el estado civil :");
persona.edad = Number(prompt("Ingrese la edad :"));
persona.peso = Number(prompt("Ingrese el peso en Kg. :"));
persona.estatura = Number(prompt("Ingrese la estatura en m. :"));
persona.fecha = (prompt(" Ingrese la Fecha:  "));
alert(" Nombre:  " +  persona.nombre + " estado civil : " + persona.estado_civil + " tiene : " + persona.edad + ' años, pesa : ' + persona.peso + ' kg y mide ' + persona.estatura + " m y su IMC es   " + persona.IMC(persona.peso.toFixed(3))
+ persona.estatura + " fecha : " + persona.fecha.toString());
//document.getElementById("demo").innerHTML = fecha;

// persona.estatura + " fecha : " + persona.fecha.toString());
//
//  <p id="demo"></p>
//
//  <script>
//  var d = new Date();
//  document.getElementById("demo").innerHTML = d;
//  </script>
//
// </body>
// </html>

// " + "fecha:" + persona.fecha.toString()+
/*
Markup
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>Example</title>
	</head>
	<body class="language-markup">
		<script type="text/javascript" src="actividad_objetos.js"></div>
	</body>
</html>
Correcto
¡Excelente respuesta! Has elegido el orden apropiado para crear un objeto “Persona” con atributos solicitados. Pides los datos al usuario, genera el mensaje de alerta con toda la información y, finalmente, asocia el archivo JavaScript con todos los comandos en la página HTML. ¡Felicitaciones!
3, 1, 2, 4
*/
