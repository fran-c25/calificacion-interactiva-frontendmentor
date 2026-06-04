const submit = document.getElementById('submit');
const rating = document.getElementById('rating');
const selected = document.getElementById('selected');
const thankyouState = document.querySelector('.thankyou-state');
const ratingState = document.querySelector('.rating-state');
const options = document.querySelectorAll('.option');
const errorMessage = document.getElementById('error-message');

let eleccion = "";

options.forEach(button => {
    button.addEventListener('click', () => {
        // Remueve la clase activo de todos los botones
        options.forEach(btn => btn.classList.remove('active'));
        // Agrega la clase activo al botón clicado
        button.classList.add('active');
        // Guarda el valor seleccionado
        eleccion = button.textContent.trim();
        // Borra cualquier mensaje de error anterior si existe
        errorMessage.textContent = "";
    });
});

submit.addEventListener('click', () => {
    if (eleccion === "") {
        // Muestra el mensaje de error si no se ha seleccionado nada
        errorMessage.textContent = "Por favor, selecciona una opción antes de enviar.";
    } else {
        // Coloca la opción elegida en el elemento HTML correspondiente
        rating.textContent = eleccion;
        // Oculta la pantalla de calificación y muestra la de agradecimiento
        ratingState.style.display = 'none';
        thankyouState.style.display = 'flex';
    }
});
