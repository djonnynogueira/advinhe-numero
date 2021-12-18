
var numeroAleatorio = Math.floor(Math.random() * 100) + 1;



var palpites = document.querySelector('.palpites');
var ultimoResultado = document.querySelector('.ultimoResultado');
var baixoOuAlto = document.querySelector('.baixoOuAlto');

var envioPalpite = document.querySelector('.envioPalpite');
var campoPalpite = document.querySelector('.campoPalpite');

campoPalpite.focus();

var contagemPalpites = 1;
var botaoReinicio;

function conferirPalpite(){
    // alert('Eu sou um placeholder');

    //armazena o valor digitado pelo usuário
    var palpiteUsuario = Number(campoPalpite.value);
    //verifica se é ou não a primeira tentativa do jogador
    if (contagemPalpites === 1){
        palpites.textContent = 'Palpites anteriores: ';
    }
    //acrescenta o valor atual a lista de palpites
    palpites.textContent += palpiteUsuario + ' ';

    if (palpiteUsuario === numeroAleatorio){
        ultimoResultado.textContent = 'Parabéns! Você acertou!';
        ultimoResultado.style.backgroundColor = 'green';
        baixoOuAlto.textContent = '';
        configFimDeJogo();
    } else if (contagemPalpites === 10) {
            ultimoResultado.textContent = '!!!FIM DE JOGO!!!';
            baixoOuAlto.textContent = '';
            configFimDeJogo();
        } else {
            ultimoResultado.textContent = 'Errado!';
            ultimoResultado.style.backgroundColor = 'red';
            if(palpiteUsuario < numeroAleatorio) {
                baixoOuAlto.textContent = 'Seu palpite está muito baixo!';
            } else if (palpiteUsuario > numeroAleatorio){
                baixoOuAlto.textContent = 'Seu palpite está muito alto!';
            }
        }

        contagemPalpites++;
        campoPalpite.value = '';
        campoPalpite.focus();
        //event listeners: eventos/ações que acontecem no navegador
        //envioPalpite.addEventListener('click', conferirPalpite);
}




function configFimDeJogo(){
    campoPalpite.disable = true;
    envioPalpite.disable = true;
    // botaoReinicio = document.createElement('button');
    // botaoReinicio.textContent = 'Iniciar novo jogo';

    botaoReinicio = document.querySelector('.reiniciarJogo');

    document.getElementById(reiniciarJogo).hidden = false;

    
    document.body.appendChild(botaoReinicio);
    botaoReinicio.addEventListener('click', reiniciarJogo)
}

function reiniciarJogo(){
    contagemPalpites = 1;

    var reinicarParas = document.querySelectorAll('.resultadoParas p');
    for (var i = 0; i < reinicarParas.lenght; i++) {
        reinicarParas[i].textContent = '';
    }

    botaoReinicio.parentNode.removeChild(botaoReinicio);

    campoPalpite.disable = false;
    envioPalpite.disable = false;
    palpites.textContent = '';
    ultimoResultado.textContent = '';
    baixoOuAlto.textContent = '';
    campoPalpite.value = '';
    campoPalpite.focus();

    ultimoResultado.style.backgroundColor = 'white';

    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}

