function valida(respostaCorreta, acertou, proximaFase, respostaErrada1, respostaErrada2, gameOver, opcao, alert1, alert2) {
    var contador = 0;
    while (true) {
        var resposta = (prompt(opcao).toLowerCase());

        if (resposta == respostaCorreta) {
            alert(acertou)
            location.assign(proximaFase)
            break;
        } else if (resposta == respostaErrada1 || resposta == respostaErrada2) {
            alert(alert1);
            contador++;
            if (contador >= 2) {
                alert(alert2);
                location.assign(gameOver)
                break;
            }
        }
    }
}

// Função leva o usuário a pagina inicial
function restart(reset) {
    location.assign(reset);
};