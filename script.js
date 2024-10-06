document.getElementById('form-numeros').addEventListener('submit', function(event) {
    event.preventDefault();

    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    const errorMessage = document.getElementById('error-message');

    console.log("Campo A: ", campoA);
    console.log("Campo B: ", campoB);

    if (isNaN(campoA) || isNaN(campoB)) {
        console.log("Um dos campos está vazio ou não é um número.");
        errorMessage.textContent = "Por favor, insira valores válidos nos dois campos.";
        errorMessage.style.display = 'block';
        return;
    }

    if (campoB <= campoA) {
        console.log("Erro: Campo B é menor ou igual a Campo A.");
        errorMessage.style.display = 'block'; // Exibe a mensagem de erro
    } else {
        console.log("Sucesso: Campo B é maior que Campo A.");
        errorMessage.style.display = 'none'; // Oculta a mensagem de erro

        alert(`Sucesso! O campo B (${campoB}) é maior que o campo A (${campoA}).`)
        document.getElementById('form-numeros').reset();
    }
});
