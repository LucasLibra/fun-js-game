//variáveis globais
var pontuacao = [0, 0];
var jogadorAtual = Math.round(Math.random());

//modal
var modalJogoGanho = document.querySelector("#modalJogo");

//botões
var botaoLancarDado = document.querySelector("#botao-lancar-dado");
var botaoPassarVez = document.querySelector("#botao-passar-vez");
var botaoNovoJogo = document.querySelector("#botao-novo-jogo");

//pontuações rodada
var pontuacaoRodada0 = document.querySelector("#pontuacao-rodada-0");
var pontuacaoRodada1 = document.querySelector("#pontuacao-rodada-1");

//pontuações globais
var pontuacaoGlobal0 = document.querySelector("#pontuacao-global-0");
var pontuacaoGlobal1 = document.querySelector("#pontuacao-global-1");

//vetor de pontuações
var pontuacoesRodadas = [pontuacaoRodada0,pontuacaoRodada1];
var pontuacoesGlobais = [pontuacaoGlobal0,pontuacaoGlobal1];

//nome do jogador no html
//var jogadorHTML = document.getElementById("jogadorAtual").innerHTML;

function novoJogo(){
    pontuacao = [0, 0];
    pontuacoesRodadas[0].textContent = 0;
    pontuacoesRodadas[1].textContent = 0;
    pontuacoesGlobais[0].textContent = 0;
    pontuacoesGlobais[1].textContent = 0;
    jogadorAtual = Math.round(Math.random());
}

function trocarJogador(){
    jogadorAtual = 1 - jogadorAtual;
}


botaoLancarDado.addEventListener("click", function (){
    var dado = Math.floor(Math.random() * 6) + 1;
    if(dado == 1){
        document.getElementById("jogadorPerdeu").innerHTML = jogadorAtual + 1;
        $('#modalZerar').modal('show')
        /*alert(`Jogador ${jogadorAtual + 1} tirou 1, zerando sua pontuação!`);*/
        pontuacao[jogadorAtual] = 0;
        pontuacoesRodadas[jogadorAtual].textContent = pontuacao[jogadorAtual];
        pontuacoesGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];
        jogadorAtual = 1 - jogadorAtual;
    }
    else{
        pontuacao[jogadorAtual] += dado;
        pontuacoesGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];
        pontuacoesRodadas[jogadorAtual].textContent = dado;
    }
    if(pontuacao[jogadorAtual] >= 100){
        document.getElementById("jogadorAtual").innerHTML = jogadorAtual + 1;
        $('#modalJogo').modal('show')
        /*alert(`Jogo terminado! Jogador ${jogadorAtual+1} venceu!`);*/
        novoJogo();
    }  
}
)


// event listener do botão passar a vez
botaoPassarVez.addEventListener("click",trocarJogador)

//event listerner do botão novo jogo
botaoNovoJogo.addEventListener("click",novoJogo);

