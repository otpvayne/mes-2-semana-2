// script.js
const form = document.getElementById("noteForm");
const input = document.getElementById("noteInput");
const notesList = document.getElementById("notesList");
const counter = document.getElementById("counter");

// Actualizar contador
function updateCounter() {
  counter.textContent = notesList.children.length;
}

// Evento para agregar notas
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const noteText = input.value.trim();

  if (noteText === "") {
    alert("⚠️ La nota no puede estar vacía.");
    return;
  }

  // Crear elemento li
  const li = document.createElement("li");
  li.textContent = noteText;

  // Botón eliminar
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Eliminar";
  deleteBtn.addEventListener("click", function() {
    li.remove();
    updateCounter();
  });

  li.appendChild(deleteBtn);
  notesList.appendChild(li);

  // Limpiar input y actualizar contador
  input.value = "";
  updateCounter();
});

