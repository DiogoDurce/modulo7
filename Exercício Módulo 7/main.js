function validarFormulario(event) {
    event.preventDefault();

    let campoA = document.getElementById("campoA").value;
    let campoB = document.getElementById("campoB").value;

    if (campoB > campoA) {
        document.getElementById("mensagem").textContent = "Formulário válido! Número B é maior que o número A.";
        document.getElementById("mensagem").style.color = "green";
    } else {
        document.getElementById("mensagem").textContent = "Formulário inválido! Número B deve ser maior que o número A.";
        document.getElementById("mensagem").style.color = "red";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener("submit", validarFormulario);
});
