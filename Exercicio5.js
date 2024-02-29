/*EXERCÍCIO 5
Crie um programa que verifique se um número é par ou
ímpar. Solicite um número ao usuário e exiba o resultado.*/

let num = prompt("Digite um numero: ");
if((num % 2 == 0) && (num != 0)){
    console.log("\nO numero digitado é Par!");
}
else if(num % 2 != 0){
    console.log("\nO número digitado é Ímpar!")
}else{
    console.log("O número digitado é 0, ele é neutro!");
}