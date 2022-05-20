function faseum() {
    var contador = 0;
    while (true) {
        var resposta = (prompt('Qual é a resposta correta? digite apenas a letra a, b ou c (lembre-se, você tem apenas 2 chances!').toLowerCase());

        if (resposta == 'b') {
            alert('Resposta correta! Joyce foi desesperada até a delegacia porque Will tinha sumido no dia anterior! Vamos para a fase 2...')
            location.assign("./fase2hopper.html")
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

function fasedois() {
    var contador = 0;
    while (true) {
        var resposta = (prompt('Qual é a resposta correta? digite apenas a letra a, b ou c (lembre-se, você tem apenas 2 chances!').toLowerCase());

        if (resposta == 'b') {
            alert('Resposta correta! A biblioteca tinha todo o histórico de acontecimentos da cidade! Vamos para a fase 3...')
            location.assign("./fase3hopper.html")
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
            alert('Resposta correta! O governo estava querendo esconder alguma coisa da cidade e ninguém podia descobrir...')
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