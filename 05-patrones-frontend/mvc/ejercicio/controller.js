// Controlador: Conecta el modelo y la vista, y gestiona la lógica de la app
import { TaskModel } from './model.js';
import { TaskView } from './view.js';

class TaskController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // Renderiza la vista inicial con las tareas actuales
    this.view.render(this.model.getTasks());
    // Asocia el evento de agregar tarea
    this.view.bindAddTask(this.handleAddTask);
    // TODO: Asocia los eventos de eliminar y editar tarea
    this.view.bindEvents(this.handleRemoveTask,this.handleEditTask);
  }

  // Maneja el evento de agregar tarea
  handleAddTask = task => {
    this.model.addTask(task); // Actualiza el modelo
    this.view.render(this.model.getTasks()); // Actualiza la vista
  };

  // TODO: Maneja el evento de eliminar tarea
  // handleRemoveTask = idx => { ... };
  handleRemoveTask = idx => {
    this.model.removeTask(idx); // Actualiza el modelo
    this.view.render(this.model.getTasks()); // Actualiza la vista
  }

  // TODO: Maneja el evento de editar tarea
  // handleEditTask = (idx, newTask) => { ... };
  handleEditTask = (idx, newTask) => {
    this.model.editTask(idx, newTask); // Actualiza el modelo
    this.view.render(this.model.getTasks()); // Actualiza la vista
  }
}

// Instancia el controlador con el modelo y la vista
new TaskController(new TaskModel(), new TaskView()); 