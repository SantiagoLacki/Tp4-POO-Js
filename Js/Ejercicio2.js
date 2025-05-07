
// 2-Escribe un programa que cree un objeto 
// "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor 
// inicial 0.
// Un método ingresar() que permita añadir 
// dinero a la cuenta, pasando la cantidad 
// como parámetro
// Un método extraer() que permita retirar la 
// cantidad pasada como parámetro.
// Un método informar() que retorne la 
// información del estado de la cuenta. 
// Utiliza este objeto para mostrar la 
// descripción, ingresar y extraer dinero y 
// volver a mostrar la descripción del estado 
// de la cuenta.

class Cuenta {
  #titular
  #saldo
  constructor(titularParam) {
    this.#titular = titularParam;
    this.#saldo = 0;
  }

  // Get y Set para Titular
  get getTitular () {
    return this.#titular;
  }

  set setTitular (nuevoTitular) {
    this.#titular = nuevoTitular;
  }
  
  // Get y Set para Saldo
  get getSaldo () {
    return this.#saldo;
  }

  set setSaldo (nuevoSaldo) {
    this.#saldo = nuevoSaldo;
  }

  // Metodos
  mostrarDatos () {
    console.log(`Titular: ${this.#titular}, Saldo: ${this.#saldo}`);
  }
  depositar () {
    const deposito =  parseInt(prompt("Ingrese un monto a depositar: "));
    alex.setSaldo = alex.getSaldo + deposito
    alert(`Se ha depositado: ${deposito}. Su saldo actual es de: ${alex.getSaldo}`);
  }
  
  retirar () {
    const retiro =  parseInt(prompt("Ingrese un monto a retirar: "));
    alex.setSaldo = alex.getSaldo - retiro
    alert(`Se ha retirado: ${retiro}. Su saldo actual es de: ${alex.getSaldo}`);
  }
}

const alex = new Cuenta("Alex");
alex.mostrarDatos();
alex.depositar();
alex.retirar();
alex.mostrarDatos();
