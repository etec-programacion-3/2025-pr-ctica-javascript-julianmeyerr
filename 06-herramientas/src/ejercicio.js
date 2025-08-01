// EJERCICIO: Instala la dependencia dayjs con npm y úsala para mostrar la fecha, con TODOs y comentarios guía.
// import dayjs from 'dayjs';
import dayjs from 'dayjs';
// TODO: Usa dayjs para obtener la fecha y hora actual y mostrarla en el DOM
// const now = ...
// document.body.innerHTML = ...
const fecha = dayjs().format('DD/MM/YYYY HH:mm:ss');
document.body.innerHTML = `<h2>Fecha y hora actual: ${fecha}</h2>`;

// Puedes ejecutar este archivo con Vite y ver el resultado en el navegador
