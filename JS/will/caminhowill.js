function faseum() {
    var contador = 0;
    while (true) {
        var resposta = (prompt('Qual é a resposta correta? digite apenas a letra a, b ou c (lembre-se, você tem apenas 2 chances!').toLowerCase());

        if (resposta == 'c') {
            alert('Resposta correta! Exatamente ao lado onde Will se perde e encontra a entrada para o mundo invertido! Vamos para a fase 2...')
            location.assign("./fase2will.html")
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
            alert('Resposta correta! Jonathan fazia fotografias para a escola e estava sempre com sua câmera! Vamos para a fase 3...')
            location.assign("./fase3will.html")
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
            alert('Resposta correta! Will conseguiu se comunicar através das luzes piscantes de natal...')
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