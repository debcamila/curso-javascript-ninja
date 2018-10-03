(function(){
    // Envolva todo o código desse arquivo em uma IIFE (incluindo esse comentário).

    /*
    Crie uma variável chamada `once`, que recebe `false` como seu valor.
    Crie um loop que execute enquanto essa variável for verdadeira. Dentro do
    loop, mostre no console a mensagem:
    'Entrou ao menos uma vez!'
    Qual loop você deve usar para que essa mensagem seja mostrada no console?
    */

    //lembrar que o WHIle entra quando a instruçao é true e o DO WHILE  ele faz e deps verifica se aquilo é true
    //continue nao compila o que ta abaixo ele volta pro inicio do 'for', ele pula um estado

    var once = false;
    do{
        console.log('Entrou ao menos uma vez!');
    }while(once);

    /*
    Crie um objeto chamado `person`, que receba as seguintes propriedades:
    - 'name', 'age', 'weight' e 'birthday'. Preencha com os valores corretos
    para o nome, idade, peso e data de nascimento dessa pessoa.
    */
    
    var person = {
        name : 'Anne Kelly',
        age :  22,
        weight : 69,
        birthday : '13/12/1995',
    };

    /*
    Use um loop para percorrer o objeto criado acima, mostrando no console
    a frase:
    'The [PROPERTY] of person is [VALUE]'
    Aproveite e crie uma variável `counter` que vai contar quantas propriedades
    esse objeto tem.
    Após o loop, mostre a frase:
    'The person has [COUNTER] properties'
    */

    var counter = 0;
    for (var prop in person){//loop para percorrer um objtps e nao souber a qntd de propriedade que tem o obejto, se a gente souber a qntd usa o for normal
        console.log('The ' +prop+ ' of person is ' +person[prop]+ ' .');
        counter++;
    }
    console.log('The person has ' +counter+ ' properties.');

    /*
    Crie uma função chamada `moreThan`, que vai verificar se a pessoa (objeto
    criado acima) é mais velha que a idade passada por parâmetro.
    Se verdadeiro, retornar `true`. Senão, retornar false.
    Após a função, mostrar a mensagem no console:
    'The person has more than 25 years old? [TRUE/FALSE]'
    */

    function moreThan(age){
        if(person.age > age){
            return true;
        }
        return false;
        console.log('The person has more than 25 years old?', moreThan(25));
    }

    /* ou eu uso no o if e deixo só o 
    return person.age > age ? true : false 
    ou
    deixo o return person.age > age
    */

    /*
    Faça um loop de 0 a 20, que adicione cada número como um item de um
    array chamado `numbers`. Se o contador for maior que 10, saia do loop.
    Mostre no console os números no array.
    */

    console.log( 'De 0 a 10:' );
    var numbers = [];
    for(var num = 0; num < 20; num++){
        if(num > 10){
            break;
        }
        numbers.push(num); //adiciono todos os numeros no array
    }
    console.log(numbers);

    /*
    Faça outro loop de 0 a 20, que adicione a um array chamado `numbers` (já
    criado acima, só precisa ser reiniciado) números de 0 a 20, inclusive
    esses. Se o número for ímpar, pular para o próximo número.
    Mostrar no console os números do array.
    */

    console.log( 'Pares de 0 a 20:' );
    numbers = [];
    for(var num = 0; num < 20; num++){
        if(num % 2 === 1){
            continue;
        }
        numbers.push(num); //adiciono todos os numeros no array
    }
    console.log(numbers);

}());
