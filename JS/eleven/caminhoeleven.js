function faseum() {
    var contador = 0;
    while (true) {
        var resposta = (prompt('Qual é a resposta correta? digite apenas a letra a, b ou c (lembre-se, você tem apenas 2 chances!').toLowerCase());

        if (resposta == 'c') {
            alert('Resposta correta! Eleven teve seu cabelo raspado durante os experimentos no laboratório de onde fugiu! Vamos para a fase 2...')
            location.assign("./fase2eleven.html")
            break;
        } else if (resposta == 'a') {
            alert("Resposta incorreta!");
            contador++;
            if (contador >= 2) {
                alert("Infelizmente você perdeu todas as suas chances!");
                location.assign("../gameover.html")
                break;
            }
        } else if (resposta == 'b') {
            alert("Resposta incorreta!");
            contador++;
            if (contador >= 2) {
                alert("Infelizmente você perdeu todas as suas chances!");
                location.assign("../gameover.html")
                break;
            }
        }
    }
}

function fasedois() {
    var contador = 0;
    while (true) {
        var resposta = (prompt('Qual é a resposta correta? digite apenas a letra a, b ou c (lembre-se, você tem apenas 2 chances!').toLowerCase());

        if (resposta == 'b') {
            alert('Resposta correta! Eleven foi encontrada por seus futuros e melhores amigos! Vamos para a fase 3...')
            location.assign("./fase3eleven.html")
            break;
        } else if (resposta == 'a') {
            alert("Resposta incorreta!");
            contador++;
            if (contador >= 2) {
                alert("Infelizmente você perdeu todas as suas chances!");
                location.assign("../gameover.html")
                break;
            }
        } else if (resposta == 'c') {
            alert("Resposta incorreta!");
            contador++;
            if (contador >= 2) {
                alert("Infelizmente você perdeu todas as suas chances!");
                location.assign("../gameover.html")
                break;
            }
        }
    }
}

function fasetres() {
    var contador = 0;
    while (true) {
        var resposta = (prompt('Qual é a resposta correta? digite apenas a letra a, b ou c (lembre-se, você tem apenas 2 chances!').toLowerCase());

        if (resposta == 'a') {
            alert('Resposta correta! O porão se tornou o quarto secreto de Eleven e seus amigos!')
            location.assign("../vitoria.html")
            break;
        } else if (resposta == 'b') {
            alert("Resposta incorreta!");
            contador++;
            if (contador >= 2) {
                alert("Infelizmente você perdeu todas as suas chances!");
                location.assign("../gameover.html")
                break;
            }
        } else if (resposta == 'c') {
            alert("Resposta incorreta!");
            contador++;
            if (contador >= 2) {
                alert("Infelizmente você perdeu todas as suas chances!");
                location.assign("../gameover.html")
                break;
            }
        }
    }
}

function restart (){
    location.assign("../index.html");
};