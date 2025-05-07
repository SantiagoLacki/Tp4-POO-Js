
// 3-Escribe una clase que permita crear 
// distintos objetos “rectángulos”, con las 
// propiedades de alto y ancho, mas los métodos 
// necesarios para modificar y mostrar sus 
// propiedades, calcular el perímetro 
// y el área

class Rectangulos {
  #rectanguloNombre
  #base
  #altura
  #perimetro
  #area
  constructor(rectangulo, base, altura, perimetro, area) {
    this.#rectanguloNombre = rectangulo,
    this.#base = base,
    this.#altura = altura,
    this.#perimetro = perimetro,
    this.#area = area
  }

  // get y set nombre
  get getRectanguloNombre () {
    return this.#rectanguloNombre
  }

  set setRectanguloNombre (nuevoNombre) {
    this.#rectanguloNombre = nuevoNombre
  }
  
  // get y set base
  get getBase () {
    return this.#base
  }

  set setBase (nuevaBase) {
    this.#base = nuevaBase
  }

  // get y set altura
  get getAltura () {
    return this.#altura
  }

  set setAltura (nuevaAltura) {
    this.#altura = nuevaAltura
  }
  // get y set perimetro
  get getPerimetro () {
    return this.#perimetro
  }

  set setPerimetro (nuevoPerimetro) {
    this.#perimetro = nuevoPerimetro
  }
  // get y set area
  get getArea () {
    return this.#area
  }

  set setArea (nuevaArea) {
    this.#area = nuevaArea
  }
  

  valores () {
    rectangulo1.setRectanguloNombre = parseInt(prompt("Ingrese el nombre del rectangulo: "));
    rectangulo1.setBase = parseInt(prompt("Ingrese el valor de la base del rectangulo: "));
    rectangulo1.setAltura = parseInt(prompt("Ingrese el valor de la altura del rectangulo: "));
  }
  
  perimetro () {
    rectangulo1.setPerimetro = (rectangulo1.#base+rectangulo1.#altura)*2
  }
  
  area () {
    rectangulo1.setArea = rectangulo1.#base*rectangulo1.#altura
  }

  mostrarRectangulo () {
    console.log("Nombre: ", this.#rectanguloNombre);
    console.log("Base: ", this.#base);
    console.log("Altura: ", this.#altura);
    console.log("Perimetro: ", this.#perimetro);
    console.log("Area: ", this.#area);
    document.writeln("Nombre: ", this.#rectanguloNombre, ": <br>");
    document.writeln("Base: ", this.#base, ": <br>");
    document.writeln("Altura: ", this.#altura, ": <br>");
    document.writeln("Perimetro: ", this.#perimetro, ": <br>");
    document.writeln("Area: ", this.#area, ": <br>");
    
  }
}

const rectangulo1 = new Rectangulos("rectangulo1","10","5");
rectangulo1.valores()
rectangulo1.perimetro()
rectangulo1.area()
rectangulo1.mostrarRectangulo()