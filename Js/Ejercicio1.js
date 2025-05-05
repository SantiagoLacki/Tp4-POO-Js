
// 1- Crea un objeto llamado auto que tenga 
// algunas características como el color, 
// marca, modelo y si está encendido o apagado. 
// Crea los métodos necesarios para permitir 
// encender y apagar el auto.
// Output:
// objeto.encender();
// objeto.apadar()
// auto encendido
// El auto se apagó

const auto = {
  color: "azul",
  marca: "Toyota",
  modelo: "Corolla",
  encendido: false,

  encenderAuto: () => {
    encendido = true;
    console.log("El auto se encendio.");
    document.writeln("El auto está encendido.<br>");
    console.log("Encendido = ",this.encendido)
  },

  apagarAuto: () => {
    encendido = false;
    console.log("El auto se apago.");
    document.writeln("El auto está apagado.");
    console.log("Encendido = ",this.encendido)
  }
}
auto.encenderAuto();
auto.apagarAuto();