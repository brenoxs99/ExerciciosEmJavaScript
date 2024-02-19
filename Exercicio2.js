/*EXERCÍCIO 2
  Crie um programa que calcule a idade do usuário. O
  usuário deve digitar o ano de nascimento e o programa
  deve exibir quantos anos ele tem.*/

let name = prompt("Digite seu nome: ");
let anoNasc = prompt("\nDigite o ano que você nasceu: ");
let anoAtual = new Date().getFullYear(); // Funçao em "Js" que retorna o ano atual com 4 digitos.

let idadeUsu = anoAtual - anoNasc;
console.log("A sua idade é: " + idadeUsu);