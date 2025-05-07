
// 4- Escribe una clase Producto para crear 
// objetos. Estos objetos, deben presentar las 
// propiedades código, nombre y precio, además 
// del método imprime datos, el cual escribe 
// por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de 
// este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos 
// para mostrar por pantalla los valores de 
// los tres objetos instanciados.

class Producto {
  #nombre
  #codigo
  #precio
  constructor(nombre, codigo, precio) {
    this.#nombre = nombre,
    this.#codigo = codigo,
    this.#precio = precio
  }
  
  // get set nombre
  get getNombre () {
    return this.#nombre
  }

  set setNombre (nuevoNombre) {
    this.#nombre = nuevoNombre
  }

  // get set codigo
  get getCodigo () {
    return this.#codigo
  }

  set setCodigo (nuevoCodigo) {
    this.#codigo = nuevoCodigo
  }

  // get set precio
  get getPrecio () {
    return this.#precio
  }

  set setPrecio (nuevoPrecio) {
    this.#precio = nuevoPrecio
  }

  mostrarDatos () {
    console.log(`Nombre: ${this.#nombre}, Código: ${this.#codigo}, Precio: ${this.#precio}`)
    document.writeln("DATOS DEL PRODUCTO: <br>");
    document.writeln("Nombre: ", this.#nombre, "<br");
    // No se porque no me funciona el writeln de la siguiente línea
    // document.writeln("Codigo: ", this.#codigo, "<br>");
    // tuve que mostrarlo de esta manera...
    document.writeln("Codigo: ", this.getCodigo, "<br>");
    document.writeln("Pecio: ", this.#precio, "<br>");
  }
}

const producto1 = new Producto('Camisa', 'C001', 70000);
const producto2 = new Producto('Short', 'C002', 25000);
const producto3 = new Producto('Jean', 'C003', 60000);

arrayProductos = [producto1,producto2,producto3]
console.log(arrayProductos)

producto1.mostrarDatos();
producto2.mostrarDatos();
producto3.mostrarDatos();