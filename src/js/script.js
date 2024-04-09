function sortearNumero() {
    var primeiroNumero = Math.ceil(Number(document.getElementById("field").value));
    var segundoNumero = Math.floor(Number(document.getElementById("field-2").value));
    var result = Math.floor(Math.random() * (segundoNumero - primeiroNumero + 1)) + primeiroNumero;

    if (isNaN(primeiroNumero) || segundoNumero <= 0) {
        alert('Por favor, insira um número!')
        return
    }

    if (primeiroNumero === segundoNumero) {
        alert("O sorteio só pode ser realizado se os números informadas forem divergentes.");
        return;
    }
    if (primeiroNumero > segundoNumero) {
        alert("O primeiro número tem que ser menor que o segundo número informado.");
        return;
    }

    document.querySelector(".res").innerText = `O Resultado: ${result}`;

    
}