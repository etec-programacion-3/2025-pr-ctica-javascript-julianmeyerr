// Vista: Se encarga de la presentación y la interacción con el usuario
export class TaskView {
  constructor() {
    // Referencias a los elementos del DOM
    this.list = document.getElementById('task-list');
    this.form = document.getElementById('task-form');
    this.input = document.getElementById('task-input');
  }

  // Renderiza la lista de tareas en el DOM
  render(tasks) {
    this.list.innerHTML = '';
    tasks.forEach((task, idx) => {
      const li = document.createElement('li');
      li.textContent = task;
      // TODO: Agrega aquí el botón y la lógica para eliminar la tarea
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Eliminar';
      removeButton.className = 'remove';
      removeButton.dataset.idx = idx;

      li.appendChild(removeButton);
      // TODO: Agrega aquí el botón y la lógica para editar la tarea
      const editButton = document.createElement('button');
      editButton.textContent = 'Editar';
      editButton.className = 'edit';
      editButton.dataset.idx = idx;

      
      li.appendChild(editButton);
      this.list.appendChild(li);
    });
  }

  // Asocia el evento de agregar tarea al formulario
  bindAddTask(handler) {
    this.form.onsubmit = e => {
      e.preventDefault();
      handler(this.input.value); // Llama al controlador con el valor ingresado
      this.input.value = '';
    };
  }

  // TODO: Asocia el evento de eliminar tarea a la lista
  // bindRemoveTask(handler) { ... }
  bindEvents(removeHandler, editHandler) {
  this.list.onclick = e => {
    const idx = Number(e.target.dataset.idx);

    if (e.target.classList.contains('remove')) {
      removeHandler(idx);
    }

    if (e.target.classList.contains('edit')) {
      const newTask = prompt('Editar tarea:', e.target.parentElement.firstChild.textContent);
      if (newTask) {
        editHandler(idx, newTask);
      }
    }
  };
}

  }