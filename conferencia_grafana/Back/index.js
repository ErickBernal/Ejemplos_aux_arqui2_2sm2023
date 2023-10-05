const readline = require("readline");
const { Modelo1, Modelo2 } = require("./modelos");
const { Clean } = require("./cleanTables");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function mostrarMenu() {
  console.log(`Ingresa una opcion: 
    1. opcion 1
    2. opcion 2
    3. limpiar data de DB
    4. Salir
  `);
}

async function obtenerOpcion() {
  return new Promise((resolve) => {
    rl.question("Selecciona una opción: ", (respuesta) => {
      resolve(respuesta);
    });
  });
}

async function main() {
  let continuar = true;

  while (continuar) {
    mostrarMenu();
    const respuesta = await obtenerOpcion();

    switch (respuesta) {
      case "1":
        await Modelo1();
        break;
      case "2":
        await Modelo2();
        break;
      case "3":
        await Clean();
        break;
      case "4":
        console.log("¡Adiós!");
        continuar = false;
        break;
      default:
        console.log("Opción no válida. Por favor, elige una opción válida.");
        break;
    }
  }

  rl.close();
}

main();
