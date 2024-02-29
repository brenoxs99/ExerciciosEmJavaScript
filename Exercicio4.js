/*EXERCÍCIO 1
Crie um programa que determine se um número é positivo, negativo ou zero. 
Solicite um número ao usuário e exiba o resultado.*/

//Use o módolo "readLine" se estiver rodando seus códigos em Node.js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um número para verificar se ele é (NEGATIVO), (POSITIVO) ou (0): ", (NUM) => {
    if(NUM > 0){
        console.log("\nO número informado é POSITIVO!");
    }
    else if(NUM < 0){
        console.log("\nO número informado é NEGATIVO!");
    }else{
        console.log("\nO número informado é igual a 0!");
    }
    
  rl.close();
});