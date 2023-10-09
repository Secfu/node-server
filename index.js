const readlineSync = require("readline-sync");

//desclarion del odjeto tarea
const tasks = {
  id : id,
  description : description,
  estado : estado,
};

function listTasks() {
  if(tasks.length === 0){
    console.log("\nLa lista de tareas esta vacia. por favor Ingresar tareas");
    addTask();
  }else {
     console.log("\nLista de tareas:");
      tasks.forEach((task, index) => {
        const status = task.completada ? "Completada" : "Pendiente";
        console.log(`${index + 1}. [${status}] - ${task.descripcion}`); 
    });
  }
}

function addTask() {
  const descripcion = readlineSync.question("Escribe la descripcion de la tarea:");
    tasks.push({ descripcion, completada: false });
    console.log("Tarea añadida con éxito.");
}

function deleteTask() {
  listTasks();
  const index = readlineSync.question("\nEscribe el nuemro de la tarea que deseas eliminar:");
    if (index >= 1 && index <= tasks.length) {
      tasks.splice(index-1, 1);
      console.log("Tarea eliminada con éxito.");
    } else {
      console.log("Numero de la tarea no válido.!!!!!");
      deleteTask();
    }
}

function completeTask() {
  listTasks();
  const index = readlineSync.question("Que tarea es la que deseas completar: ");
    if (index >= 1 && index <= tasks.length) {
      tasks[index-1].completada = true;
      console.log("Tarea completada.");
    } else {
      console.log("Índice no válido.");
      completeTask();
    }
}
while (true){
  console.log("\n\n!Bienvenido a la aplicacion de gestion de tareas");
  console.log("\nAcciones Dispanobes");
  console.log("1. Listar Tareas");
  console.log("2. Agregar Tareas");
  console.log("3. Eliminar Tareas");
  console.log("4. Marcar Tareas como completadas");
  console.log("5. Salir");

const choice = readlineSync.question("Escriba el numero de la accion que desea realizar: ");
  switch (choice) {
    case "1":
      listTasks();
      break;
    case "2":
      addTask();
      break;
    case "3":
      deleteTask();
      break;
    case "4":
      completeTask();
      break;
    case "5":
      process.exit(0);
      break;
    default:
      console.log("Opcion Invalida. Por favor, elija una opcion valida.");
    }
}

