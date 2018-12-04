/*
Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
métodos semelhantes aos que existem no array, mas que sirvam para os
elementos do DOM selecionados.
Crie os seguintes métodos:
- forEach, map, filter, reduce, reduceRight, every e some.    OK

Crie também métodos que verificam o tipo do objeto passado por parâmetro.
Esses métodos não precisam depender de criar um novo elmento do DOM, podem
ser métodos estáticos.

Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
no objeto, como nos exemplos abaixo:
DOM.isArray([1, 2, 3]); // true
DOM.isFunction(function() {}); // true
DOM.isNumber('numero'); // false

Crie os seguintes métodos para verificação de tipo:
- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
O método isNull deve retornar `true` se o valor for null ou undefined.
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

    var dom = new DOM ();
    console.log(dom.isArray([1,2,3,4,5])); 

})();

/*
EVENTOS

document = DOMContentLoaded --> manipular elementos html, disparada antes de elementos estáticos 
window = load --> espera tudo o que tudo que ta no window carregar

-> copiar arrays
Array.prototype.slice

-> saber o tipo de dado real - 
Object.prototype.toString
 */