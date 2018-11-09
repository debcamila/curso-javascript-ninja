(function(){ 
    'use strict';//para variavel nao declarada ou qualquer problemas, o strict nao deixa esse problemas passarem direto, ele reporta
    /*
    1. Envolva todo o conteúdo desse desafio em uma IIFE.
    2. Adicione a diretiva 'use strict';
    3. Crie um arquivo index.html e adicione esse script à ele.
    */

    /*
    Declare uma variável chamada `name` que receba seu primeiro nome.
    Mostre no console todas as letras do seu nome separadas, com a frase:
    - "[LETRA] é a [POSIÇÃO]ª letra do meu nome."
    Ex: no caso do nome ser "Fernando", deve mostrar as frases:
    - "F é a 1ª letra do meu nome."
    - "e é a 2ª letra do meu nome."
    E assim por diante, até a última.
    */
    console.log( 'As letras do seu nome:' );
    var name = 'Deborah';
    var tam = name.length;//propriedade nao muda nunca, o tam do vetor nome será sempre 7 por isso colocar o length em uma variavel
    for(var i = 0; i < tam; i++){
        console.log(name[i]+ ' é a '  +(i+1)+ ' ª letra do meu nome.');//podia ser: name.charAt(i)
    }
 
    /*
    - Declare uma variável chamada `fullName`, que receba seu nome completo,
    escrito no formato de slug (caixa baixa e palavras separadas por um traço).
    Ex: o nome "Fernando Daciuk" ficaria "fernando-daciuk"
    - Faça a primeira letra de cada nome ficar em caixa alta, e troque o traço
    por um espaço.
    - Detalhe: o código que você escrever abaixo deve funcionar para qualquer
    nome, então fique à vontade para usar as artimanhas que já viu até agora no
    curso para fazer isso funcionar corretamente :)
    - Mostre no console o nome no formato slug, e o resultado final. Use um
    console.log para cada formato.
    */
    console.log( '\nNome convertido à partir de um slug:' );
    var fullName = 'deborah-camila-alves-pereira';
    var newFullName = fullName.split('-').map(function(name){
        return name.charAt(0).toUpperCase() + name.slice(1);
    }).join(' ');
    console.log(fullName);
    console.log(newFullName);

    /*
    - Crie um array com 5 nomes. Reduza esses nomes a uma única string, separando
    cada nome por vírgula. Entre o penúltimo e o último nome, o separador deve
    ser um "e". No final, concatene com a frase: " são meus amigos.".
    O resultado final deve ficar mais ou menos assim:
    - "João, Maria, Roberto, Pedro e Marcos são meus amigos."
    - Detalhe: o código abaixo deve funcionar com um array de qualquer tamanho.
    5 nomes foi somente uma sugestão ;)
    */
    console.log( '\nMeus pets:' );
    var pets = ['Capitu', 'Pretinha', 'Branquinha', 'Lilica', 'Agregada'];
    var frase = pets.reduce(function(acumulado, atual, index){
        var separador = pets.length - 1 === index ? ' e ' : ', ';
        return acumulado + ', ' + atual;
    }).concat(' são meus pets/filhas');
    console.log(frase);

    /*
    Usando o replace(), faça a string "Roberto" virar "Roberta".
    Mostre o resultado no console.
    */
    console.log( '\nEra "Roberto", agora é:' );
    console.log('Roberto'.replace('to', 'ta'));

    /*
    Mostre no console a parte "nando" da string "Fernando". Use o método que
    faz a busca do final para o início da string.
    */
    console.log( '\nParte de uma string:' );
    //console.log('Fernando'.slice('Fernando'.lastIndexOf('nando')));
    console.log('Fernando'.substring(8, 3));

    /*
    Declare uma variável chamada `myName`, que receba o seu primeiro nome,
    escrito de forma natural.
    Mostre no console esse nome, mas com as letras intercalando entre maiúsculas
    e minúsculas.
    - Detalhe: o código abaixo deve funcionar da mesma forma para qualquer nome,
    de qualquer tamanho, escrito de qualquer forma.
    Ex.: Nomes que deveriam funcionar: "Fernando", "RoBertO", "gabriEla", etc.
    */
    console.log( '\nNome com letras intercaladas entre caixa alta e baixa:' );
    var myName = 'Deborah';
    var tam = myName.length;
    var myNewName = [];
    for(var i = 0; i < tam; i++){
        myNewName.push(i % 2 === 0 ? myName[i].toLowerCase() : myName[i].toUpperCase() );
        console.log(myNewName);
    }
    console.log(myNewName.join(''));
})();
