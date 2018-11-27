/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:

- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real; OK
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado. OK
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado. OK
*/

(function(win, doc){
    'use strict';

    function soma(){
        return Array.prototype.reduce.call(arguments, function(acumulado, item){//arguments é um array 
            return acumulado + item;
        });
    }
    console.log(soma(2,4));

    function subtracao(){
        return Array.prototype.reduce.call(arguments, function(acumulado, item){
            return acumulado - item;
        });
    }

    function multiplicacao(){
        return Array.prototype.reduce.call(arguments, function(acumulado, item){
            return acumulado * item;
        });
    }

    function divisao(){
        return Array.prototype.reduce.call(arguments, function(acumulado, item){
            return acumulado / item;
        });
    }

    function resto(){
        return Array.prototype.reduce.call(arguments)
    }
    var $visor = doc.querySelector('[data-js = "visor"]');
    var $buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]');
    var $buttonsOperations = doc.querySelectorAll('[data-js="button-operation"]');
    var $buttonCE = doc.querySelector('[data-js="button-ce"]');
    var $buttonEqual = doc.querySelector('[data-js="button-equal"]');

    Array.prototype.forEach.call($buttonsNumbers, function(button) { //array.prototype = nao cria um novo array, ele usa a propriedade do array mesmo
        button.addEventListener('click', handleClickNumber, false);
    });   

    Array.prototype.forEach.call($buttonsOperations, function(){
        button.addEventListener('click', handleClickOperation, false);
    });

    $buttonCE.addEventListener('click', handleClickCE, false);//criando evento para o botao CE
    $buttonEqual.addEventListener('click', handleClickEqual, false);

    // ACAO DOS BOTOES
    function handleClickNumber(){ //qnd clico no numero ele seleciona e mostra o value do button
        $visor.value += this.value;
    } 

    function handleClickOperation(event){
        removeLastItemIfIsAnOperator(); //remove o ultimo item se ele é um operador
        // if(isLastItemAnOperation()) //se o ultimo item é algumas dessa operacoes
        //     $visor.value = $visor.value.slice(0, -1); // removo o ultimo item, o slice pega a partir do 0 menos -1, desde o 1 ao ultimo item e tira o ultimo item 
        $visor.value += this.value;
    }

    function handleClickCE(){ //quando eu clico no CE ele zera o value
        $visor.value = 0;
    }

    function isLastItemAnOperation(num){ //verifica se a operacao existe no ultimo operador  
        var operations = ['+', '-', '/', '*']; // para remover o ultimo item se ele ja for uma das operacoes
        var lastItem = num.slipt('').pop();
        return $operations.some(function(operador){
            return operador === lastItem;
        }); //se algum operador é o last 
    }

    function removeLastItemIfIsAnOperator(num){
        if(isLastItemAnOperation(num)){
            return num.slice(0, -1);
        }
        return num;
    }

    function handleClickEqual(){
        removeLastItemIfIsAnOperator();

        var todosValores = $visor.value.match(/?:\d+[+*\-]?/g);

        $visor.value = todosValores.reduce(function(acumulado, atual){
            var firstValue = acumulado.slice(0, -1);
            var operador = acumulado.slipt('').pop();
            var lastValue = isLastItemAnOperation(atual);
            var lastOperador = isLastItemAnOperation(atual) ? atual.split('').pop() : false;
            switch(operador){
                case '+':
                    return (Number(firstValue) + Number(lastValue)) + lastOperador;
                    break;
                case '-':
                    return (Number(firstValue) - Number(lastValue)) + lastOperador;
                    break;
                case'*': 
                    return (Number(firstValue) * Number(lastValue)) + lastOperador;
                    break;
                case'/':
                    return (Number(firstValue) / Number(lastValue)) + lastOperador;
                    break;
            }
        });
    }
})(window, document);
