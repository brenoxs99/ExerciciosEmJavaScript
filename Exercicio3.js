//Crie um programa que converta graus Celsius para Fahrenheit. 
//Peça ao usuário a temperatura em Celsius 
//e depois exiba o equivalente em Fahrenheit.
    //Dica a fórmula de conversão é: Fahrenheit = (Celsius * 9/5) + 32;


    /*ESSA VERSÃO DO CÓDIGO SERIA PARA RODAR NO PRÓPRO NAVEGADOR
     ULTILIZEI NELA O MÉTODO PROMPT(); PARA SOLICITAR DADOS DO USUÁRIO
     ------------------------------------------------------------------*/

    let Celsius = prompt('Digite a temperatura em Celsius: ');
    let Fahrenheit = (Celsius * 9/5) + 32; 
    console.log(Celsius + ' graus em Celsius equivalem a ' + Fahrenheit +' graus em Fahrenheit');


    /*PORÉM SE VOCE ESTÁ RODANDO SEUS "Scripts.js" NO AMBIENTE Node.js 
      O MÉTODO PROMPT NÃO ESTÁ DISPONÍVEL COM FUNÇÃO, LOGO CÓDIGO ACIMA 
      IRÁ APRENSENTAR ERROS. MAS LOGO ABAIXO, FIZ UMA SEGUNDA VERSÃO DESTE *Exercício*
      PARA QUE CONSIGA RODAR EM AMBIENTE Node.js .
      ------------------------------------------------------------------*/

    let Fahrenheit;
    const readline = require('readline');//Importando módolo (readline) para receber dados de entrada do teclado.
    
    const rl = readline.createInterface({ //Criando uma interface de leitura usando 
        input: process.stdin,             //o método 'createInterface()' do módolo 'readline'
        output:process.stdout
    });

    rl.question('Digite a temperatura em Celsius: ', (Celsius) => { //Usando o método question() da interface rl para fazer uma pergunta ao usuário
        Fahrenheit = (Celsius * 9/5) + 32;                          //O segundo argumento é uma função que recebe a resposta do usuário  
        console.log(Celsius + ' graus em Celsius equivalem a ' + Fahrenheit +' graus em Fahrenheit');              //que irá armazenar a resposta na variável celcius
        rl.close(); //Encerrando a execução do programa.
    });

    
    


