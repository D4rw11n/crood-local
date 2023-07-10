// Obtener referencia al formulario y la tabla
const registroForm = document.getElementById('registroForm');
const tablaUsuarios = document.getElementById('tablaUsuarios');
let filaEditada = null;

// Manejar el evento de envío del formulario
registroForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario

  // Obtener los valores de los campos de entrada
  const rut = document.getElementById('rut').value;
  const nombre = document.getElementById('nombre').value;
  const apellidoPaterno = document.getElementById('apellidoPaterno').value;
  const apellidoMaterno = document.getElementById('apellidoMaterno').value;
  const correo = document.getElementById('correo').value;
  const telefono = document.getElementById('telefono').value;

  // Validar los datos ingresados
  if (rut === '' || nombre === '' || apellidoPaterno === '' || apellidoMaterno === '' || correo === '' || telefono === '') {
    alert('Por favor, complete todos los campos');
    return;
  }

  if (filaEditada) {
    // Actualizar la fila editada con los nuevos datos
    filaEditada.cells[0].textContent = rut;
    filaEditada.cells[1].textContent = nombre;
    filaEditada.cells[2].textContent = apellidoPaterno;
    filaEditada.cells[3].textContent = apellidoMaterno;
    filaEditada.cells[4].textContent = correo;
    filaEditada.cells[5].textContent = telefono;

    // Restablecer el estado de edición
    filaEditada = null;

  } else {
    // Crear una nueva fila en la tabla con los datos ingresados
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${rut}</td>
      <td>${nombre}</td>
      <td>${apellidoPaterno}</td>
      <td>${apellidoMaterno}</td>
      <td>${correo}</td>
      <td>${telefono}</td>
      <td>
        <button class="btn btn-primary btn-sm editar">Editar</button>
        <button class="btn btn-danger btn-sm eliminar">Eliminar</button>
      </td>
    `;

    // Agregar la fila a la tabla
    tablaUsuarios.querySelector('tbody').appendChild(fila);
  }

  // Limpiar los campos del formulario
  registroForm.reset();
});


// Manejar el evento de clic en el botón de eliminar o editar
tablaUsuarios.addEventListener('click', function(event) {
  if (event.target.classList.contains('eliminar')) {
    event.target.closest('tr').remove();
  } else if (event.target.classList.contains('editar')) {
    const fila = event.target.closest('tr');
    filaEditada = fila;

    // Obtener los valores de la fila para rellenar el formulario de edición
    const rut = fila.cells[0].textContent;
    const nombre = fila.cells[1].textContent;
    const apellidoPaterno = fila.cells[2].textContent;
    const apellidoMaterno = fila.cells[3].textContent;
    const correo = fila.cells[4].textContent;
    const telefono = fila.cells[5].textContent;

    // Rellenar el formulario de edición con los valores de la fila
    document.getElementById('rut').value = rut;
    document.getElementById('nombre').value = nombre;
    document.getElementById('apellidoPaterno').value = apellidoPaterno;
    document.getElementById('apellidoMaterno').value = apellidoMaterno;
    document.getElementById('correo').value = correo;
    document.getElementById('telefono').value = telefono;
  }
});


  

