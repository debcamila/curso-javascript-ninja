(function(){
    /*
    Envolva todo o conteúdo desse arquivo em uma IIFE.
    */

    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */

    var person = {
        name: 'Capitu',
        lastname: 'Alves',
        age: 9
    };
    console.log( 'Propriedades de "person":' );

    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    KEYS RETORNA UM ARRAY COM AS PROPRIEDADES DO OBJETO
    */ 
    console.log(Object.keys(person));

    /*
    Crie um array vazio chamado `books`.
    */
    var books = [];

    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */

    books.push({name: 'Livro1', pages: 730});
    books.push({name: 'Livro2', pages: 209});
    books.push({name: 'Livro3', pages: 502});
    console.log( '\nLista de livros:' );

    /*
    Mostre no console todos os livros.
    */

    console.log(books);

    /*
    Remova o último livro, e mostre-o no console.
    */

    console.log (books.pop());  
    console.log( '\nLivro que está sendo removido:' );
  
    /*
    Mostre no console os livros restantes.
    */
    console.log(books);
    console.log( '\nAgora sobraram apenas esses livros:' );

    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    books = JSON.stringify(books);
    console.log( '\nLivros em formato string:' );

    /*
    Mostre os livros nesse formato no console:
    */
    console.log(books);

    /*
    Converta os livros novamente para objeto.
    */
    books = JSON.parse(person);
    console.log( '\nAgora os livros são objetos novamente:' );

    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    for (var i = 0; i < books.lenght; i++){
        for(var prop in books[i]){//percorre as propriedades
        console.log(prop + ': ' +books[i][prop]); //prop= propriedade; books[i]=indice ; books[i][prop] = o valor/propriedade daquele indice
        //ou pode ser books[i].name, porém se eu quiser mudar alguma prop esse vai ser ruim -> faço um mais generico
        }
    }

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    var myName = ['c', 'a', 'p', 'i', 't', 'u'];

    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    console.log(myName.join(''));
    console.log( '\nMeu nome é:' );

    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    console.log(myName.reverse().join(''));
    console.log( '\nMeu nome invertido é:' );
    
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
    console.log(myName.sort()); //LETRAS MAIUSCULAS VEM NA FRENTE E DEPOIS VEM AS OUTRAS
    console.log( '\nAgora em ordem alfabética:' );

})();

