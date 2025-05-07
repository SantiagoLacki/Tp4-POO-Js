
// 6- Crear una clase Libro que contenga al 
// menos las siguientes propiedades:
// ISBN
// Título
// Autor
// Número de páginas
// Crear sus respectivos métodos get y set 
// correspondientes para cada propiedad. 
// Crear el método mostrarLibro() para mostrar 
// la información relativa al libro con el 
// siguiente formato:
// “El libro xxx con ISBN xxx creado por el 
// autor xxx tiene páginas xxx”
// Crear al menos 2 objetos libros y utilizar 
// el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos 
// “libros” tiene más páginas.

class Libro {
  #titulo
  #isbn
  #autor
  #numPaginas
  constructor(titulo, isbn, autor, numPaginas) {
    this.#titulo = titulo
    this.#isbn = isbn
    this.#autor = autor
    this.#numPaginas = numPaginas
  }

  // get set titulo
  get getTitulo () {
    return this.#titulo
  }

  set setTitulo (nuevoTitulo) {
    this.#titulo = nuevoTitulo
  }

  // get set ISBN
  get getIsbn () {
    return this.#isbn
  }

  set setIsbn (nuevoIsbn) {
    this.#isbn = nuevoIsbn
  }

  // get set autor
  get getAutor () {
    return this.#autor
  }

  set setAutor (nuevoAutor) {
    this.#autor = nuevoAutor
  }

  // get set numero de paginas
  get getNumeroDePaginas () {
    return this.#numPaginas
  }

  set setNumeroDePaginas (nuevoNumeroDePaginas) {
    this.#numPaginas = nuevoNumeroDePaginas
  }

  mostrarLibro () {
    document.writeln(`El libro: ${this.#titulo} con ISBN: ${this.#isbn} creado por el autor ${this.#autor} tiene ${this.#numPaginas} páginas.`);
    document.writeln("<br><br>");
  }

  masPaginas (libro2) {
    if (this.#numPaginas > libro2.#numPaginas) {
      document.writeln("El libro ", this.#titulo, " tiene mas paginas que el libro ", libro2.#titulo);
    }
    else if (this.#numPaginas < libro2.#numPaginas) {
      document.writeln("El libro ", libro2.#titulo, " tiene mas paginas que el libro ", this.#titulo);
    }
    else {
      document.writeln("Ambos libros tienen la misma cantidad de paginas");
    }
  }
}
const libro1 = new Libro("El Principito", "978-84-7888-719-4", "Antoine de Saint-Exupery", 90);
const libro2 = new Libro("El Ingenioso Hidalgo Don Quijote de la Mancha", "978-84-17244-10-1", "Miguel de Cervantes Saavedra", 700);



libro1.mostrarLibro();
libro2.mostrarLibro();
libro1.masPaginas(libro2)
