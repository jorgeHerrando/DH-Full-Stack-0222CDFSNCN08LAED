let funcionesDeTareas = require("./funcionesDeTareas.js");

// let tareas = require("./tareas.js");

const tarea = process.argv[2];

switch (tarea) {
  case "listar":
    funcionesDeTareas.listar();
    break;
  case undefined:
    funcionesDeTareas.notFound();
    break;
  case "crear":
    const titulo = process.argv[3];
    const nuevaTarea = {
      titulo: titulo,
      estado: "pendiente",
    };
    funcionesDeTareas.guardarTarea(nuevaTarea);
    break;
  case "filtrar":
    const estado = process.argv[3];
    funcionesDeTareas.leerPorEstado(estado);
    break;
  default:
    funcionesDeTareas.default();
    break;
}
