'use strict';

// ---------- Selecciones iniciales ----------
const inputEl = document.getElementById('user-input');    // input por id
const btnShow  = document.getElementById('btn-show');    // botón "Mostrar"
const btnClear = document.getElementById('btn-clear');   // botón "Limpiar"
const outputEl = document.getElementById('output');      // contenedor muestra
const pageTitle = document.querySelector('#page-title'); // selector CSS

// ---------- Funciones auxiliares ----------
function updateOutput(text) {
  // textContent ← seguro (no interpreta HTML)
  outputEl.textContent = text ? text : '— (aún no hay contenido) —';
}

function clearInput() {
  inputEl.value = '';
  inputEl.focus();
  updateOutput('');
}

function getTrimmedValue() {
  return inputEl.value.trim();
}

// ---------- Eventos ----------
btnShow.addEventListener('click', () => {
  const texto = getTrimmedValue();
  if (!texto) {
    updateOutput('Por favor escribe algo antes de mostrar.');
    return;
  }
  updateOutput(`Usuario escribió: ${texto}`);
});

// Enter dentro del input → simula click en Mostrar
inputEl.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    btnShow.click();
  }
});

btnClear.addEventListener('click', clearInput);

// ---------- Ejemplos en consola y manipulación dinámica ----------
// textContent vs innerText vs innerHTML
console.log('Demo textContent / innerHTML');
pageTitle.textContent = pageTitle.textContent + ' (Demo)';
pageTitle.innerHTML = pageTitle.innerHTML + ' <small style="color:#64748b;">(ejemplo)</small>';

// Crear elemento dinámico
const ejemploLista = document.createElement('ul');
ejemploLista.setAttribute('id', 'demo-list');
ejemploLista.style.marginTop = '1rem';
const li = document.createElement('li');
li.textContent = 'Elemento creado dinámicamente (clickable)';
li.classList.add('demo-item');
ejemploLista.appendChild(li);
outputEl.insertAdjacentElement('afterend', ejemploLista);

// Delegación: click en la lista
ejemploLista.addEventListener('click', (e) => {
  if (e.target && e.target.matches('li')) {
    e.target.classList.toggle('selected');
    updateOutput(`Has clickado: ${e.target.textContent}`);
  }
});

// dataset y atributos
li.setAttribute('data-demo', 'true');
console.log('data-demo ->', li.dataset.demo);

// Mensaje inicial
updateOutput('Listo — escribe algo y presiona Mostrar (o Enter).');

