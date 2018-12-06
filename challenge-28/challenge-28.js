  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */

(function(win, doc){
  'use strict';

  function DOM(elements){
        this.element = document.querySelectorAll(elements);

    }

    DOM.prototype.on = function on(eventType, callBack){
        Array.prototype.forEach.call(this.element, function(element){
        element.addEventListener(eventType, callBack, false);
        });    
    };

    DOM.prototype.off = function off(eventType, callBack){
        Array.prototype.forEach.call(this.element, function(element){
        element.removeEventListener(eventType, callBack, false);
        });
    };


    DOM.prototype.get = function get(){
        return this.element;
    };

    DOM.prototype.forEach = function forEach(){
        return Array.prototype.forEach.apply(this.element, arguments);
    };

    DOM.prototype.map = function map(){
        return Array.prototype.map.apply(this.element, arguments);
    };

    DOM.prototype.filter = function filter(){
        return Array.prototype.filter.apply(this.element, arguments);
    };

    DOM.prototype.reduce = function reduce(){
        return Array.prototype.reduce.apply(this.element, arguments);
    };

    DOM.prototype.reduceRight = function reduceRight(){
        return Array.prototype.reduceRight.apply(this.element, arguments);
    };

    DOM.prototype.every = function every(){
        return Array.prototype.every.apply(this.element, arguments);
    };

    DOM.prototype.some = function some(){
        return Array.prototype.some.apply(this.element, arguments);
    };

    DOM.prototype.isArray = function isArray(parametro){
        return Object.prototype.toString.call(parametro) === '[object Array]';
    };

    DOM.prototype.isObject = function isObject(parametro){
        return Object.prototype.toString.call(parametro) === '[object Object]';
    };

    DOM.prototype.isFunction = function isFunction(parametro){
        return Object.prototype.toString.call(parametro) === '[object Function]';
    };

    DOM.prototype.isNumber = function isNumber(parametro){
        return Object.prototype.toString.call(parametro) === '[object Number]';
    };

    DOM.prototype.isString = function isString(parametro){
        return Object.prototype.toString.call(parametro) === '[object String]';
    };

    DOM.prototype.isBoolean = function isBoolean(parametro){
        return Object.prototype.toString.call(parametro) === '[object Boolean]';
    };

    DOM.prototype.isNull = function isNull(parametro){
        return Object.prototype.toString.call(parametro) === '[object Null]' || Object.prototype.toString.call(parametro) === '[object Underfined]';
    };

    var $formCep = new DOM('[data-js="form-cep"]');
    var $inputCep = new DOM('[data-js="input-cep"]');
    var $logradouro = new DOM('[data-js="logradouro"]');
    var $bairro = new DOM('[data-js="bairro"]');
    var $estado = new DOM('[data-js="estado"]');
    var $cidade = new DOM('[data-js="cidade"]');
    var $cep = new DOM('[data-js="cep"]');
    var $status = new DOM('[data-js="status"]');
    var ajax = new XMLHttpRequest();
    $formCep.on('submit', handleSubmitFormCep);


    function handleSubmitFormCep(event){
      event.preventDefault();
      var url = getUrl();
      ajax.open('GET', url);
      ajax.send();
      getMessage('loading');
      ajax.addEventListener('readystatechange', handleReadyStateChange);
    }

    function getUrl(){
      return replaceCep('http://apps.widenet.com.br/busca-cep/api-de-consulta');
    }

    function clearCep(){
      return $inputCep.get()[0].value.replace(/\D/g,'');
    }

    function handleReadyStateChange(event){
      if(isRequestOK()){
        fillCepFields();
        getMessage('certo');
      }
    }

    function isRequestOk(){
      return ajax.readyState === 4 && ajax.status === 200;
    }

    function fillCepFields(){
      var data = parseData();
      if(!data){
        getMessage('error');
        data = clearData();
      }

      $logradouro.get()[0].textContent = data.logradouro;
      $bairro.get()[0].textContent = data.bairro;
      $estado.get()[0].textContent = data.uf;
      $cidade.get()[0].textContent = data.localidade;
      $cep.get()[0].textContent = data.cep;
    }

    function clearData(){
      return{
        logradouro :'-',
        bairro : '-',
        uf : '-',
        localidade : '-',
        cep : '-'
      }
    }

    function parseData(){
      var result = null;
      try{
        result = JSON.parse(ajax.responseText);
      }
      catch(e){
        result = null;
      }
      return result;
    }

    function getMessage(tipo){
      var messages = {
        loading: replaceCep('Buscando informações para o CEP [CEP]...'),
        certo: replaceCep('Endereço referente ao CEP [CEP]: '),
        error: replace('Não encontramos o endereço para o CEP [CEP].'),
      };
      $status.get()[0].textContent = messages[tipo];
    }

    function replaceCep(message){
      var cep = clearCep();
      return message.replace('[CEP]', cep);
    }

})();



/*
--> AJAX - asynchronous Javascript and XML
window.XMLHttpRequest()

--> Três passos para instanciar um AJAX
1- Instanciar o objeto
var ajax = new XMLHttpRequest();
2- Abrir conexão 
var ajax = new XMLHttpRequest
ajax.open(<method>, <url>); -diz o tipo de metodo e a url que vamos acessar
ajax.send(<data>); -enviar os dados para o servidor

--> Evento
ajax.onreadystatechange - recebe uma funcao
OU ajax.addEventListener('readystatechange', function(){}, false);

--> Checar o estado atual
ajax.readyState
0: não enviado - geralmente qnd o open não é chamado
1: conexão aberta
2: Headers recebidos
3: Carregando corpo do request
4: Concluido
HTTP STATUS : 200, 403, 404, 500, etc OU ajax.status

--> Manipulando a resposta
function isRequestOk(){
  return ajax.readyState === 4 && ajax.status === 200; 
}

ajax.responseText --> traz a resposta da aquisição
ajax.responseXML --> pega a resposta que vem em XML e converte para documento

Tratamento de erros
try / catch
*/