//DOM
let editButton = document.getElementById('edit');
let formContainer = document.getElementById('contenedor');
let cardContent = document.getElementById('tarjeta-c');
let form = document.getElementById('form');
let nameInput = document.getElementById('nombree');
let positionInput = document.getElementById('posicionn');
let nameDisplay = document.getElementById('nombre');
let positionDisplay = document.getElementById('posicion');

// Mostrar el formulario
editButton.addEventListener('click', function() {
    formContainer.style.display = 'block';  
    cardContent.style.display = 'none';   
});


form.addEventListener('submit', function(event) {
    event.preventDefault();  

    // Obtener los valores 
    let name = nameInput.value;
    let position = positionInput.value;

    // Mostrar 
    nameDisplay.textContent = name;
    positionDisplay.textContent = position;

    // Ocultar el formulario 
    formContainer.style.display = 'none';
    cardContent.style.display = 'block';
});
