function sorteiaNumero(min, max) {
    return parseInt(Math.random() * max) + min
}

var divResposta = document.getElementById("resposta")
var divContador = document.getElementById("contador")
var numero_sorteado = sorteiaNumero(1, 100);
var contador = 0

function verificaNumero(chute, numero_sorteado) {

    divResposta.innerHTML = "";

    if (chute < numero_sorteado) {
        return divResposta.innerHTML += `
            <p>Voce errou! O numero e maior que ${chute}.<p>
        `
    }
    else if (chute > numero_sorteado) {
        divResposta.innerHTML += `
            <p>Voce errou! O numero e menor que ${chute}.<p>
        `
    }
    else if (chute == numero_sorteado) {
        divResposta.innerHTML += `
            <p>Voce acertou ! o numero era ${numero_sorteado}<p>
        `
    }
}

function enter() {

    var chute = document.getElementById("chute").value
    contador++

    while (contador <= 5) {
        verificaNumero(chute, numero_sorteado)

        divContador.innerHTML = ""

        divContador.innerHTML += `
            <p>Quantidade de chutes: ${contador}</p>
        `

        document.getElementById("chute").value=""

        return false
    }

    divResposta.innerHTML = ""

    divResposta.innerHTML += `
        <p>Voce perdeu ! o numero era ${numero_sorteado}</p>
    `
    return false

}