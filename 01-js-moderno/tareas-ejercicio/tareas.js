// Módulo de tareas usando ES6+
// Provee funciones para obtener, agregar y eliminar tareas usando localStorage

const STORAGE_KEY = 'tasks'; // Clave para localStorage

// Devuelve la lista de tareas almacenadas
export function getTasks(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}
// Agrega una tarea nueva y la guarda en localStorage
export function addTask(key,task) {
  const tasks = getTasks(key);
  tasks.push(task);
  localStorage.setItem(key, JSON.stringify(tasks));
}

// Elimina una tarea por índice y actualiza localStorage
export function removeTask(key, index) {
  const tasks = getTasks(key);
  tasks.splice(index, 1);
  localStorage.setItem(key, JSON.stringify(tasks));
} 