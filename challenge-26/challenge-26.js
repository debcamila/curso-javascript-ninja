/*
O desafio dessa semana é criar uma mini library (biblioteca) para
reutilizarmos nossos códigos quando fizermos manipulação de DOM!

Requisitos:
- O nome da lib deve ser "DOM".
- Ela deve ser uma função construtora, que receberá uma string por parâmetro.
Essa string será o nó do DOM a ser selecionado;
- No construtor, você deve atribuir à `this.element` todos os elementos
do DOM selecionados;
- Extenda a lib para ter os métodos `on`, `off` e `get`.
- O método `on` irá adicionar um listener de evento a todos os elementos
selecionados.
- O método `off` irá remover o listener de evento de todos os elementos
selecionados.
- O método `get` deve retornar os elementos.
- O código abaixo deve funcionar corretamente após a lib criada.

Dica: olhe os erros que acontecem no console, e vá resolvendo um a um.
Só passe para o próximo problema quando tiver resolvido o anterior :)
*/

(function(){
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

  var $a = new DOM('[data-js="link"]');
  $a.on('click', function handleClick(e) {
    e.preventDefault();
    console.log('clicou');
    $a.off('click', handleClick);
  });

  console.log('Elementos selecionados:', $a.get());
  console.log('$a é filho de body?', $a.get()[0].parentNode === document.body);

})();

/* 
DOM - (árvores de elementos) como percorrer elementos:
.parentNode --> pega o nó (pai) do nó que eu to selecionando
.childNodes --> pega todos os nós filhos 
.firstChild() -->  pega o primeiro filho
.lastChild() --> pega o ultimo filho
.nextSibling() --> mostra quem é o irmao
.previousSibling() --> a mesma coisa do next, POREM mostra o irmao anterior

PROPRIEDADES:
.nodeType() --> o tipo de numero baseado no nó que temos
- Document = 9
- Element = 1
- Text = 3
- Comments = 8
- documentFragment = 22

.nodeValue() --> conteudo textual de 'Text' e 'Comment'

.nodeName() --> o nome daquele nó

http://caniuse.com --> para consultar mais dessas propriedades em cada Browser

.children (nao padronizada) -->
.firstElementChild --> pego o primeiro filho que é um elemento, pega a tag
.lastElementChild --> pego o ultimo filho que é um elemento
.nextElementSibling --> o proximo elemento que é irmao
.previousSibling -->
.childElementsCount --> traz o mesmo resultado de children.lenght / traz quantidade de elementos que tem no mesmo nó 

MÉTODOS:
.hasAttribute(name) --> passa o nome de um tributo para verificar se aquele elemento tem um atributo específico, retorna boolean true ou false
.hasAttributes --> verifica se o elemento tem qualquer atributo que exista
.appendChild(child) --> pegar um elemento e colocar dentro dele no final daquele elemento e como parametro quem é o child que vou adicionar no elemento
.cloneNode() --> copia o conteudo do container 
.hasChildNodes() --> verifica se o elemento tem algum nó filho
.removeChild(child) --> remove um filho ou um elemento filho, o paramento é o filho que a gente quer remover
.replaceChild(new, old) --> substitue/troca , passo como parametro o novo e o velho filho, exemplo subtituir o header pelo footer ou vice e versa
.createTextNode(text) --> cria um no de text

document.createElement(tagName) --> ele cria um elemento/tag e cria um ambiente 

ATRIBUTOS:
element.id
element.className
.getAttribute(attr) - retorna sempre uma String
.setAttribute()

document.createDocumentFragment() --> cria um fragmento para executar um documento branco
.parentNode === null 
 */
