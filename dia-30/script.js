// script.js
const form = document.getElementById("noteForm");
const input = document.getElementById("noteInput");
const notesList = document.getElementById("notesList");
const counter = document.getElementById("counter");
const clearAllBtn = document.getElementById("clearAll");

// --- LocalStorage Helpers ---
function saveNotes() {
  const notes = [];
  for (let li of notesList.children) {
    notes.push(li.firstChild.textContent); // solo texto, no botones
  }
  localStorage.setItem("notes", JSON.stringify(notes));
}

function loadNotes() {
  const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
  storedNotes.forEach(note => addNoteToList(note));
  updateCounter();
}

// --- Contador dinámico ---
function updateCounter() {
  counter.textContent = notesList.children.length;
}

// --- Crear un item de nota ---
function addNoteToList(noteText) {
  const li = document.createElement("li");
  li.textContent = noteText;

  // Botón editar
  const editBtn = document.createElement("button");
  editBtn.textContent = "Editar";
  editBtn.addEventListener("click", function() {
    const newText = prompt("Edita tu nota:", li.firstChild.textContent);
    if (newText && newText.trim() !== "") {
      li.firstChild.textContent = newText.trim();
      saveNotes();
    }
  });

  // Botón eliminar
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Eliminar";
  deleteBtn.addEventListener("click", function() {
    li.remove();
    updateCounter();
    saveNotes();
  });

  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  notesList.appendChild(li);
  updateCounter();
  saveNotes();
}

// --- Evento submit ---
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const noteText = input.value.trim();

  if (noteText === "") {
    alert("⚠️ La nota no puede estar vacía.");
    return;
  }

  addNoteToList(noteText);
  input.value = "";
});

// --- Eliminar todas las notas ---
clearAllBtn.addEventListener("click", function() {
  notesList.innerHTML = "";
  updateCounter();
  localStorage.removeItem("notes");
});

// --- Cargar notas al iniciar ---
loadNotes();
