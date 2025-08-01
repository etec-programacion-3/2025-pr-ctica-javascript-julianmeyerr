// Importa las funciones del módulo de tareas
import { getTasks, addTask, removeTask } from './tareas.js';

// Referencias a los elementos del DOM
const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const list_pendientes = document.getElementById('task-list-pendientes');
const list_completadas = document.getElementById('task-list-completadas');
// Storage Keys
const pendientes = 'tasks'; // Clave para almacenar las tareas
const completadas = 'completedTasks'; // Clave para almacenar las tareas completadas
// Renderiza la lista de tareas en el DOM
function renderTasks() {
  list_pendientes.innerHTML = '';
  getTasks(pendientes).forEach((task, idx) => {
    const li = document.createElement('li');
    li.textContent = task;
    // TODO: Agrega aquí el botón y la lógica para editar la tarea
    const btn_editar = document.createElement('button');
    btn_editar.textContent = 'Editar';
    btn_editar.onclick = () => {
      const newTask = prompt('Editar tarea:', task);
      if (newTask) {
        const tasks = getTasks(pendientes);
        tasks[idx] = newTask;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
      }
    }
    li.appendChild(btn_editar);
    // TODO: Agrega aquí la lógica para filtrar tareas completadas/pendientes
    const btn_completar = document.createElement('button');
    btn_completar.textContent = 'Completar';
    btn_completar.onclick = () => {
      const tasks = getTasks(pendientes);
      addTask(completadas, tasks[idx]);
      removeTask(pendientes, idx);
      renderTasks();
    };
    li.appendChild(btn_completar);
    // Botón para eliminar la tarea
    const btn_eliminar = document.createElement('button');
    btn_eliminar.textContent = 'Eliminar';
    btn_eliminar.onclick = () => {
      removeTask(pendientes,idx);
      renderTasks();
    };
    li.appendChild(btn_eliminar);
    list_pendientes.appendChild(li);
  });
  list_completadas.innerHTML = '';
  getTasks(completadas).forEach((task, idx) => {
    const li = document.createElement('li');
    li.textContent = task;
    // TODO: Agrega aquí el botón y la lógica para editar la tarea
    const btn_editar = document.createElement('button');
    btn_editar.textContent = 'Editar';
    btn_editar.onclick = () => {
      const newTask = prompt('Editar tarea:', task);
      if (newTask) {
        const tasks = getTasks(completadas);
        tasks[idx] = newTask;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
      }
    }
    li.appendChild(btn_editar);
    // Botón para eliminar la tarea
    const btn_eliminar = document.createElement('button');
    btn_eliminar.textContent = 'Eliminar';
    btn_eliminar.onclick = () => {
      removeTask(completadas,idx);
      renderTasks();
    };
    li.appendChild(btn_eliminar);
    list_completadas.appendChild(li);
  });
}

// Maneja el evento submit del formulario para agregar una tarea
form.onsubmit = e => {
  e.preventDefault();
  addTask(pendientes,input.value);
  input.value = '';
  renderTasks();
};

// Render inicial de las tareas
renderTasks();