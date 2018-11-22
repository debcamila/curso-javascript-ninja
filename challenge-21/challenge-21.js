/*
O desafio de hoje será um pequeno projeto: um cronômetro!
As regras para criação do cronômetro são as seguintes:
1. Crie um arquivo index.html e adicione esse script a ele;
2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
Ele será o nosso cronômetro;
3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
cada segundo;
5. Ao clicar em Stop, o cronômetro deve parar de contar;
6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

Utilize o atributo data-js para nomear o campo e os botões. Você pode
usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
*/

(function(win, doc){
    'use strict'; 
    
    var $timer = doc.querySelector('[data-js="timer"]');
    var $start= doc.querySelector('[data-js="start"]');
    var $stop = doc.querySelector('[data-js="stop"]');
    var $reset = doc.querySelector('[data-js="reset"]');

    var interval;

    $start.addEventListener('click', startTimer, false);//quando for clicado o botao start, ela vai executar a funcao startTimer (no momento do clique)
    $stop.addEventListener('click', stopTimer, false);
    $reset.addEventListener('click', resetTimer, false);

    function startTimer(){
        $timer.value = +$timer.value + 1;//converter o string em numero e dps soma
        setTimeout(startTimer, 1000);
    }

    function stopTimer(){
        clearTimeout(interval);
    }

    function resetTimer(){
        $timer.value = 0;
        stopTimer();
    }

})(window, document);




//ANOTAÇÕES//
/* SINCRONA
- QUANDO VC TEM UM EVENTO/COMANDO/ALGO QUE TA ACONTECENDO NO PROGRAMA, QUE ACONTECE UM APOS O OUTRO
ex: console.log

ASSINCRONA (A MAIORIA DOS COMANDOS TRABALHAM ASSIM)
- QUANDO PRECISAMOS TRABALHAR COM EVENTOS E PRECISAMOS AGUARDAR UMA AÇÃO DO USUÁRIO OU QUANDO PRECISAMOS FAZER UM TEMPORIZADOR NA TELA

O JAVASCRIPT TRABALHA SOMENTE COM UMA THREAD, PRECISA EXECUTAR OS COMANDOS UM ATRAS DO OUTRO 

EVENT LOOP
- COMO UM CÍRCULO QUE FICA RODANDO NUMA THREAD SEPARADA E TEM OUTRA THREAD PRINCIPAL(EXECUTANDO ARQUIVOS, MEU SITE, O FORMULARIO PRA O USUARIO RESPONDER)
O SINCRONA FICA RODANDO NA TELA PRINCIPAL E SE ELE FICAR MUITO TEMPO RODANDO VAI BLOQUEAR A THREAD E NAO VAI DEIXAR O USARIO FAZER NADA ATE A THREAD TERMINAR

PEGA O THREAD PRINCIPAL E MANDA PRA UMA FILA QUE MANDA PRO EVENT LOOP 

SYNC vs ASYNC
- setTimeout() --> criar eventos assincronos no js como temporizador, 2 parametros uma function e um tempo em milisegundos (executa uma vez)
- setInterval() --> ele continua infinitamente rodando até que eu mande parar, performance ruim, uso melhor com tempo grande

- clearTimeout(id) --> parar o setTimeout(), passar um id n parametro
- clearInterval(id) --> parar o setInterval(), passar um id no parametro


 */