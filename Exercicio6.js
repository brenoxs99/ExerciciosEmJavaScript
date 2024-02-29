/*EXERCÍCIO_6
Crie um programa que mostre os números numa
sequência, como se estivesse contando. Peça ao usuário
para inserir o último número. Por exemplo: Usuário digita
10. Ele deve contar 1, 2, 3, 4 ... até chegar em 10.*/

let num = prompt("Digite o quantos numeros você deseja exibir: ");
let i=1;
for(i; i < num; i++){
    console.log(i);
}
console.log(num);