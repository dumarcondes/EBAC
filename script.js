document.getElementById('form-numeros').addEventListener('submit', function(event) {
    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    const errorMessage = document.getElementById('error-message');

    if (campoB <= campoA) {
        errorMessage.style.display = 'block'; // Exibe a mensagem de erro
        event.preventDefault();
    } else {
        errorMessage.style.display = 'none'; // Oculta a mensagem de erro
    }
});
