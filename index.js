function sorteiaNumero(min, max) {
    return parseInt(Math.random() * max) + min
}


var divResposta = document.getElementById("resposta")
var divContador = document.getElementById("contador")
var numero_sorteado = sorteiaNumero(1, 100);
var contador = 0
console.log(numero_sorteado);

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

    var listaDeJogadores=[]

function enter() {

    var chute = document.getElementById("chute").value
    contador++

    while (contador <= 5 && chute!= numero_sorteado) {
        verificaNumero(chute, numero_sorteado)

        divContador.innerHTML = ""

        divContador.innerHTML += `
            <p>Quantidade de chutes: ${contador}</p>
        `

        document.getElementById("chute").value=""

        return false
    }

    divResposta.innerHTML = ""
    let nome= document.getElementById("nome").value

    if(chute != numero_sorteado){
        divResposta.innerHTML += `
        <p>Voce perdeu ! o numero era ${numero_sorteado}</p>
    `
    }else{
        listaDeJogadores.push({ nome, contador})

        for(let i = 0; i < listaDeJogadores.length; i++){
            divTabela.innerHTML += `
            <table>
                    <tbody>
                        <tr>
                            <th>${listaDeJogadores[i].nome}</th>
                            <th>${listaDeJogadores[i].contador}</th>
                        </tr>
                    </tbody>
                </table>
            `
        }
    }

    
    return false

}