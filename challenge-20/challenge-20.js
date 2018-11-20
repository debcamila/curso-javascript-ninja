(function(win, doc){
    'use strict';

    /*
    1. Envolva todo o conteúdo desse desafio em uma IIFE.
    2. Adicione a diretiva 'use strict';
    3. Passe por parâmetro para a IIFE os objetos window e document.
    4. Dessa vez não é necessário criar um HTML. Ele já existe, e vamos utilizar
    a marcação criada nele para fazer nosso desafio ;)

    O HTML NÃO PODE ser alterado!

    EM JS, O ESCOPO É A FUNÇÃO EM QUE O CÓDIGO ESTÁ INSERIDO;
    - variável fora da função, é possivel acessar-la dentro de qualquer função que esteja no mesmo escopo;
    - variavel dentro da função, essa variável não está acessível fora dela; Qualquer variável criada dentro de uma função que tenha o mesmo nome de uma variável criada fora dessa função(escopo global)
    a variável mais interna terá procedencia sobre a variavel externa;
    */

    /*
    Ao carregar a página, pergunte ao usuário "Qual o seu nome?". Atribua o
    resultado à uma variável chamada `username`. Se o usuário não digitar um
    nome, `username` deve receber "Desconhecido".
    Com a resposta, mostre um alert com a mensagem "Bem vindo [USERNAME]!"
    */

    var $username = prompt('Qual o seu nome?');
    if(username) //se o nome que o usuario digitou é TRUE
        alert('Bem vindo ' +username+ ' !');
    else
        console.log('Desconhecido');

    //OU PODE SER ASSIM
    //var $inputUsername = dic.querySelector('input[type="text"]');
    
    /*
    Agora, pergunte ao usuário "Qual o seu e-mail?", atribuindo o resultado à
    uma variável chamada `email`.
    */
    var email = prompt('Qual o seu e-mail?');

    /*
    - Selecione o input de "Nome", atribuindo-o à uma variável chamada
    `$inputUsername`.
    */
    var $inputUsername = doc.querySelector('input[type="text"]'); // nao é boa prática

    /*
    - Selecione o input de "Email", atribuindo-o à uma variável chamada
    `$inputEmail`.
    */
    var $inputEmail = doc.querySelector('input[type="email"]');

    /*
    - Selecione o campo de "Mensagem", atribuindo-o à uma variável chamada
    `$message`.
    */
    var $message = doc.querySelector('textarea');

    /*
    - Selecione o botão de envio do formulário, atribuindo-o à uma variável
    chamada `$button`.
    */
    var $button = doc.querySelector('button');
 
    /*
    Preencha os campos de "Nome" e "Email" que estão no documento com os valores
    entrados pelo usuário.
    */
    $inputUserName.dado = username;
    $inputEmail.dado = email;


    /*
    Adicione um listener de evento de click ao botão que faça o seguinte:
    1. Verificar se todos os campos estão preenchidos:
    - Mostrar um alert para cada campo não preenchido, como abaixo:
    - Se o campo de "Nome" não estiver preenchido, mostrar:
        - "Preencha o nome do usuário!"
    - Se o campo de "Email" não estiver preenchido, mostrar:
        - "Preencha o e-mail!"
    - Se o campo de "Mensagem" não estiver preenchido, mostrar:
        - "Preencha a mensagem!"
    - Se o campo de "Email" for inválido, mostrar:
        - "Entre com um e-mail válido!"

    2. Para verificar se o e-mail é válido use a função `isValidEmail`, passando
    o e-mail que foi entrado no campo de "Email" por parâmetro. (A função
    `isValidEmail` será criada logo abaixo).

    3. Se tudo estiver OK, pergunte ao usuário:
        - "Tem certeza que deseja enviar o formulário?"
    Se for confirmado, mostre um alerta com a mensagem:
        - "Enviado com sucesso!"
    Caso contrário, mostre um alerta com a mensagem:
        - "Não enviado."
    */
     $button.addEventListener('click', function(event){
         event.preventDefault();
        if(!$inputUsername.dado)//se o nome for false
            return alert('Preencha o nome do usuário!');

        if(!$inputEmail.dado)
            return alert('Preencha o e-mail');

        if(isValidEmail($inputEmail.dado))
            return alert('Entre com um e-mail válido!')

        if(!$message.dado)
            return alert('Preencha a mensagem!');

        if(confirm('Tem certeza que deseja enviar o formulário?'))
            return alert('Enviado com sucesso!');
            
        return alert('Não enviado');
     }, false);


    /*
    Crie uma função chamada `isValidEmail`, que será usada na validação do
    envio do formulário.
    Essa função deve receber o e-mail por parâmetro e verificar se é um e-mail
    válido.
    As regras para validação são:
        - O nome do usuário (antes do arroba), pode ser qualquer caractere
        alfanumérico, incluindo o underscore, sinal de "+" e o ponto;
        - Após o arroba, o domínio pode conter somente caracteres alfanuméricos
        e o underscore;
        - Para a extensão, o domínio deve vir seguido de um ponto, e no mínimo
        2 caracteres alfanuméricos;
        - O final do domínio é opcional, mas se existir, deve começar com um
        ponto, seguido de no máximo 2 caracteres alfanuméricos.

    Alguns e-mails válidos que podem ser usados para testar:
        - "meu.email+categoria@gmail.com"
        - "juca_malandro@bol.com.br"
        - "pedrobala@hotmail.uy"
        - "sandro@culinaria.dahora"

    Alguns e-mails inválidos:
        - "walter-da-silva@maraca.br"
        - "rita-marica@titica.a.b"
        - "agua_@evida.br.com"
    */
    function isValidEmail(email){//nao pode retornar uma String e sim boolean
        return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email)
    }

})(window, document);


/*
- IF, WHILE e FOR : Com uma linha não precisam das chaves;

METODOS DE WINDOW (podemos chamar os metodos sem colocar na frente a palavra window)
- window.alert --> coloca uma mensagem de alerta na tela apra o usuário;
- window.prompt --> faz uma pergunta na tela e espera uma resposta: confirma ou cancela; 
- window.confirm --> retorna um booleano, true se eu clicar em ok ou false se eu clicar em false, é tipo se eu quiser ter certeza em mandar algo, usuario confirmar algo 
- window.document --> objeto, representa o documento o HTML

- DOM (DOCUMENT OBJECT MODEL) - é tipo uma árvore, o root element é o <html> os filhos sao o <head> e o <body> e abaixo tera varios nodes, por exemplo
 .objeto criado para quando temos uma estrutura HTML ou XML, representa o document em formato de objeto js!

- Quando eu quero selecionar um elemento a partir do id --> doc.getElementById('') : vou selecionar um objeto atraves do id
ex: console.log(doc.getElementById('my-link'));

- Quando eu quero selecionar um elemento a partir da classe --> doc.getElementsByClassName(''): o resultado me traz um array
ex: console.log(doc.getElementByClassName('my-link'));

- Selecionar elementos a partir da tag --> doc.getElementsByTagName
console.log(doc.getElementByTagName('a'));

- Selecionar pelo nome/campo
console.log(doc.getElementsByName('my-link'));

- Selecionar o primeiro elemento que ele achar
console.log(doc.querySelector('input'));

- Selecionar todos os elementos que ele achar
$inputs = doc.querySelectorAll('input');
$inputs = doc.querySelectorAll('[type="text"]');
$inputs = doc.querySelectorAll('.input');
$inputs = doc.querySelector('#username');

getter- pegar, obter algum dado
setter- atribuir valor, setando um novo valor pra ele(mudando o valor)

INTRODUÇÃO A EVENTOS
- .addEventListener('click') --> adiciona eventos nas propriedades, no caso aqui o evento da funcao de click. Pode receber 3 parametros
 */