alert("Boas-Vindas ao Jogo do Número Secreto!");
let numeroMaximo = 1000
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto) {

    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
// se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`o número secreto é menor que ${chute}`);
        } else {
            alert(`o número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Isso ai! Você acertou o número Secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
/*if ( tentativas > 1) {
    alert(`Isso ai! Você acertou o número Secreto ${numeroSecreto} com ${tentativas} tentativas`);
} else {
    alert(`Isso ai! Você acertou o número Secreto ${numeroSecreto} com ${tentativas} tentativa`);
}*/