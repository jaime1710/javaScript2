// js Base perfil de persona jaime

var Paciente = { //Declaracion de variables objeto
    nombre: "Jaime Gomez",
    ciudad: "Quito",
    entidadSalud: "Salud para ti",
    peso: 68,
    estatura: 1.63,
    fechaNacimiento: new Date(" October 9, 1968"),
    //fecha es un obeto de tipo date esta dentro de objeto paciente
    ultimaConsulta: { //en si es eso un arreglo que en una de sus variables tiene un arreglo
        fecha: new Date("April 23,2018"),
        anotaciones: ["El paciente presenta signos de dolor en la cicatrices de la cirugia",
            "Presion arterial media normal",
            "se menciona repetidos dolores en la zona abdominal" ]
    },
    historiaClinica: [ //vector
        ["Fractura de fémur", "3/11/2015"],
        ["Apendicitis", "22/8/2015"],
        ["Insuficiencia Renal", "1/3/2013"]
    ],
    calcularIMC: function() {
        var imc = this.peso /
            Math.pow(this.estatura, 2);
             return imc.toFixed(2);
//Ese numero 2 de la estaturaes el exponente
            //al cual deseas elevar el valor del resultado de la variable this.statura
          /*  Math.pow(base, exponente)
           La función Math.pow() devuelve la base elevada al exponente , esto es, base ^exponente.*/

    },
    calcularEdad: function() {
        var hoy = new Date();
        var edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        return edad;
    },
    imprimirDatos: function() {
        console.log("Nombre: " + this.nombre);
        console.log("Ciudad: " + this.ciudad);
        console.log("Entidad de Salud: " + this.entidadSalud);
        console.log("Peso: " + this.peso);
        console.log("Estatura: " + this.estatura);
        console.log("Fecha de Nacimiento: " + this.fechaNacimiento);
        console.log("Fecha Última consulta: " + this.ultimaConsulta.fecha.toString());
        console.log("Anotaciones ultima consulta: " + this.ultimaConsulta.anotaciones[0] + ", " + this.ultimaConsulta.anotaciones[1] + ", " + this.ultimaConsulta.anotaciones[2]);
        console.log("Historia Clinica: " + this.historiaClinica[0][0] + " - " + this.historiaClinica[0][1] + "   " + this.historiaClinica[1][0] + " - " + this.historiaClinica[1][1] + "   " + this.historiaClinica[2][0] + " - " + this.historiaClinica[2][1]+"");
        // "+this.historiaClinica[2][1]+"");
        console.log("Calculos: ");
        console.log("- Edad: " + this.calcularEdad());
        console.log("- Indice de masa Corporal: " + this.calcularIMC());
    }
}


document.getElementById('boton-perfil').addEventListener("click", function() {
        Paciente.imprimirDatos();

    })


/*
    es primero crear etiquetas en html de tipo <input>
    que serian los campos de entrada , a esos colocar un atributo id por ejemplo
    <input type="text" id="nombre">
    Wilfan Salas 01:07
    y ahora en javascript donde tiene a
    var Paciente = { //Declaracion de variables objeto
    nombre: "Jaime Gomez",
    ese texto "Jaime Gomez" que equivale a un valor fijo
    ahora debe ser el valor obtenido del campo input, entonces quedaria por ejemplo
    nombre: document.getElementById("nombre").value,
    al usar document.getElementById("nombre").value, estaria haciendo referencia a una etiqueta input que tiene como valor de atributo id nombre y usando el metodo .value obtiene el valor de lo que se estaria digitando por teclado,
    de ese modo ya estaria llenando esas variables con esos valores ya no fijos :)!

    /*
    En el archivo index.js hay un evento definido que se dispara cuando se hace click en el botón perfil de la barra de navegación. Sin embargo, antes de crear código al interior de este evento, debes crear un objeto Persona con todos los datos del paciente como atributos.
    Los datos nombre, ciudad y entidad de salud deben ser cadenas de caracteres.
    Los datos peso y estatura deben ser numéricos.
    La fecha de nacimiento debe ser un objeto de tipo Date.
    La última consulta debe ser un objeto anidado. Esto quiere decir que, al definir esta propiedad en el objeto Persona, indicas el nombre y la haces igual a un nuevo objeto.
   */
