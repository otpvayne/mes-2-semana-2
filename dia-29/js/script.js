// script.js
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita recargar la página

    // Capturamos valores
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("formMessage");

    // Validaciones
    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "❌ Todos los campos son obligatorios.";
        formMessage.style.color = "red";
    } else {
        formMessage.textContent = "✅ Formulario enviado con éxito.";
        formMessage.style.color = "green";
        // Aquí podrías limpiar el formulario si quieres
        document.getElementById("contactForm").reset();
    }
});

