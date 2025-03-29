function delayPromise(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function validarEntrada(texto, valoresPermitidos) {
    while (!valoresPermitidos.includes(texto)) {
        texto = prompt(`Valor inválido. Ingresa uno de los siguientes: ${valoresPermitidos.join(", ")}`);
    }
    return texto;
}