
// 5- Crea una clase llamada Persona que siga 
// las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, 
// sexo (H hombre, M mujer), peso y altura, 
// año de nacimiento. Si quieres añadir alguna 
// propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar son:
// mostrarGeneracion: este método debe mostrar 
// un mensaje indicando a qué generación 
// pertenece la persona creada y cual es el 
// rasgo característico de esta generación.
// Para realizar este método tener en cuenta 
// la siguiente tabla de generaciones:...
// esMayorDeEdad: indica si es mayor de edad, 
// devuelve un mensaje indicando que la 
// persona es mayor de edad.
// mostrarDatos: devuelve toda la información 
// del objeto.
// generaDNI(): genera un número aleatorio 
// de 8 cifras.

class Persona {
  #nombre
  #edad
  #sexo
  #peso
  #altura
  #anioNacimiento
  #dni
  #generacion
  constructor(nombre, edad, sexo, peso, altura, anioNacimiento, dni, generacion) {
    this.#nombre = nombre,
    this.#edad = edad,
    this.#sexo = sexo,
    this.#peso = peso,
    this.#altura = altura,
    this.#anioNacimiento = anioNacimiento,
    this.#dni = dni
    this.#generacion = generacion
  }

  // get set nombre
  get getNombre () {
    return this.#nombre
  }

  set setNombre (nuevoNombre) {
    this.#nombre = nuevoNombre
  }

  // get set edad
  get getEdad () {
    return this.#edad
  }

  set setEdad (nuevoEdad) {
    this.#edad = nuevoEdad
  }

  // get set sexo
  get getSexo () {
    return this.#sexo
  }

  set setSexo (nuevoSexo) {
    this.#sexo = nuevoSexo
  }

  // get set peso
  get getPeso () {
    return this.#peso
  }

  set setPeso (nuevoPeso) {
    this.#peso = nuevoPeso
  }

  // get set altura
  get getAltura () {
    return this.#altura
  }

  set setAltura (nuevoAltura) {
    this.#altura = nuevoAltura
  }

  // get set anio de nacimiento
  get getAnioNacimiento () {
    return this.#anioNacimiento
  }

  set setNombre (nuevoAnioNacimiento) {
    this.#anioNacimiento = nuevoAnioNacimiento
  }

  // get set DNI
  get getDni () {
    return this.#dni
  }

  set setDni (nuevoDni) {
    this.#dni = nuevoDni
  }
  
  // get set generacion
  get getGeneracion () {
    return this.#generacion
  }

  set setGeneracion (nuevoGeneracion) {
    this.#generacion = nuevoGeneracion
  }

  // Metodos
  mostrarGeneracion () {
    if (this.#anioNacimiento >= 1994 && this.#anioNacimiento <= 2010) {
      this.#generacion = "Generacion Z"
      console.log("Generación Z")
    }
    else if (this.#anioNacimiento >= 1981 && this.#anioNacimiento <= 1993) {
      this.#generacion = "Generacion Y"
      console.log("Generación Y")
    }
    else if (this.#anioNacimiento >= 1969 && this.#anioNacimiento <= 1980) {
      this.#generacion = "Generacion X"
      console.log("Generación X")
    }
    else if (this.#anioNacimiento >= 1949 && this.#anioNacimiento <= 1968) {
      this.#generacion = "Baby Boom"
      console.log("Generación Baby Boom")
    }
    else if (this.#anioNacimiento >= 1930 && this.#anioNacimiento <= 1948) {
      this.#generacion = "Generacion Silent Generation"
      console.log("Generación Silent Generation")
    }
    else {
      this.#generacion = "Generacion desconocida"
      console.log("No perteneces a ninguna generacion.")
    }
  }

  generarDni () {
    this.#dni = Math.floor(Math.random()* 89000000) + 10000000;
  }

  esMayorDeEdad () {
    if (this.#anioNacimiento > 0 && this.#anioNacimiento <= 2007) {
      document.writeln("Naciste en: ", this.#anioNacimiento, " Eres mayor de edad. <br><br>")
    }
    else {
      document.writeln("Naciste en: ", this.#anioNacimiento, " Eres menor de edad. <br><br>")
    }
  }

  mostrarDatos () {
    console.log(`Nombre: ${this.#nombre}, Edad: ${this.#edad}, DNI: ${this.#dni}, Sexo: ${this.#sexo}, Peso: ${this.#peso}, Altura: ${this.#altura} , Anio de nacimiento: ${this.#anioNacimiento}`)
    document.writeln("DATOS DE LA PERSONA: <br>");
    document.writeln("Nombre: ", this.#nombre, "<br");
    document.writeln("Edad: ", this.#edad, "<br>");
    document.writeln("Sexo: ", this.#sexo, "<br>");
    document.writeln("Peso: ", this.#peso, "<br>");
    document.writeln("Altura: ", this.#altura, "<br>");
    document.writeln("Año de Nacimiento: ", this.#anioNacimiento, "<br>");
    document.writeln("DNI: ", this.#dni, "<br>");
    document.writeln("Generacion: ", this.#generacion, "<br>");
  }
}

const persona = new Persona("Juan", 25, "M", 70, 1.80, 2000);
const persona2 = new Persona("Susana", 35, "M", 60, 1.60, 1990);

persona.generarDni();
persona.mostrarGeneracion();
persona.mostrarDatos();
persona.esMayorDeEdad();

persona2.generarDni();
persona2.mostrarGeneracion();
persona2.mostrarDatos();
persona2.esMayorDeEdad();