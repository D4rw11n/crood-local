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

  

