let fs = require("fs");

let tareasJSON = fs.readFileSync(__dirname + "/tareas.json", "utf-8");

let tareasJS = JSON.parse(tareasJSON);

let funcionesDeTareas = {
  listar: function () {
    tareasJS.forEach((tarea, i) => {
      let titulo = tarea.titulo;
      let estado = tarea.estado;
      console.log(i + 1 + "_ " + titulo + " y estoy en estado " + estado);
    });
  },
  notFound: function () {
    console.log("Atención - Tienes que pasar una accion");
  },
  escribirJSON: function (tareas) {
    let nuevasTareas = JSON.stringify(tareas);
    fs.writeFileSync(__dirname + "/tareas.json", nuevasTareas);
  },
  guardarTarea: function (tarea) {
    tareasJS.push(tarea);
    this.escribirJSON(tareasJS);
  },
  leerPorEstado: function (estado) {
    let tareasFiltradas = tareasJS.filter((tarea) => tarea.estado === estado);
    let fer = tareasFiltradas.map((tarea) => tarea);
    console.log(fer);
  },
};

module.exports = funcionesDeTareas;
