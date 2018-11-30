/*
Essa semana você terá dois desafios:
1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
o que não ficou tão claro das aulas anteriores.
É essencial que você entenda todo o conteúdo que foi passado até aqui,
para que possamos prosseguir para a parte mais avançada do curso :D

2) Estudar eventos!
Acesse a página do MDN:
https://developer.mozilla.org/en-US/docs/Web/Events#Categories

Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
desafio os experimentos legais que você conseguir desenvolver :D
*/

/* T E S T E, refazer depois */
(function(){
    'use strict';

    var $a = document.querySelector('[data-js="link"]');
    $a.onclick = function(event){
        event.preventDefault();
        alert('clicou no a de um jeito diferente');
    };

    function on(element, event, callBack){
        document.querySelector(element)
            .addEventListener(event, callBack, false);
    }

    function off(element, event, callBack){
        document.querySelector(element)
            .removeEventListener(event, callBack, false);
    }

    on('[data-js="input"]', keydown, function(event){
        console.log(this.value);
    });

    on('[data-js="select"]', 'change', function(){
        document.querySelector('[data-js="input"]').value = this.value;
    });

    function on(element, event, callBack){
        document.querySelector(element)
            .addEventListener(event, callBack, false);
    }

    on('[data-js="link"]', 'click', function(event){
        event.preventDefault();
        alert('clicou no a');
    });

    on('[data-js="div"]', 'click', function(){
        alert('clicou na div');
    });

    on('[data-js="span"]', 'click', function(event){
        alert('clicou no span');
    });

    var $a = document.querySelector('[data-js="link"]');
    var $div = document.querySelector('[data-js="div"]')
        .addEventListener('click', function(event){
            alert('clicou na div');
        }, false);
    $a.addEventListener('click', function(event){
        event.preventDefault();
        alert('clicou no link');
    }, false);

});
