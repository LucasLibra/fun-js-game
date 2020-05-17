// function f2 (){
//     return 2 + 3 * 5 / 7 + 4
//         +2;
// }

// console.log(f2())

// function comoComparar (criterio, a, b){
//     if(criterio == 'iguais')
//         return function(){ return a == b }
//     else 
//         return function(){ return a != b }
// }

// console.log(comoComparar('iguais',2, 3)())

// var minhaFuncao = function (){
//     console.log("Não tenho nome...")
// }

// minhaFuncao();

// function achaMaior(a, b){
//     return +a > +b ? a : b;
// }
// console.log(achaMaior(2,3));

// function hello (){
//     console.log("Oi")
// }

// hello();

// pessoa = new Object();
// pessoa.nome = "Ana";
// pessoa.idade = 23;
// pessoa['sexo'] = "F";
// console.log(pessoa);

// pessoa = {
//     nome: 'Ana',
//     endereco: {
//         rua: "Rua ABC",
//         bairro: "Pq. Amor",
//         numero: 123
//     }
// }
// console.log(pessoa.endereco.rua);
// console.log(pessoa['endereco'].numero);
// console.log(pessoa['endereco']['bairro']);


// pessoa = {
//     nome: "André",
//     idade: 25,
//     sexo: "M"
// }
// console.log (pessoa)
// console.log(pessoa.nome)
// console.log(pessoa['idade'])

//JSON = JavaScript Object Notation


// var itens = []
// console.log(itens)
// itens.push(1);
// itens.push(2);
// itens.push(3);
// console.log(itens)
// itens.pop()
// console.log(itens)
// itens.shift()
// console.log(itens)

// var numeros = new Array (1, 6, 5, 4, 1);
// console.log(numeros);

// var itens = ["Ana","Paula",23,43.2, true]
// for (var i = 0; i < itens.length; i++)
//     console.log(itens[i])


// for (var i = 1; i <= 10; i++){
//     if(i==5 || i == 7)
//         continue;
//     console.log(i);
// }

// var i = 1;

// do{
//     console.log(i);
//     i++;
// } while (i <=10);

// while (i <= 10){
//     console.log(i)
//     i++;
// }

// for (var i = 1; i <= 10; i++)
//     console.log(i)


// a = prompt ("Primeiro número")
// b = prompt ("Segundo número")

// alert ((+a > +b ? a : b) + " é o maior");


// var nota = prompt ("Qual a sua nota?");
// console.log(typeof(nota))
// switch (+nota){
//     case 10:
//     case 9:
//         alert("A")
//         break
//     case 8:
//     case 7:
//         alert("B")
//         break
//     case 6:
//     case 5:
//         alert("C")
//         break
//     default:
//         alert("R")
// }

// var idade = prompt ("Qual a idade?");
// if (idade >= 18)
//     alert("Pode dirigir")
// else
//     alert("Não pode dirigir")


// nome = prompt("Qual é seu nome?");
// alert("Oi, " + nome);

// var u;
// var n = 2;
// var n = null;

// var x = true;
// var y = false;

// var n1 = 2;
// var n2 = 2.2;

// var s1 = "Ana";
// var s2 = 'Maria';
// var s3 = `Ela se chama ${s1}`;
// var s4 = 'Aspas duplas "aqui"';

// console.log (typeof (s1));
// console.log (typeof (n1));
// console.log (typeof (n2));
// console.log (typeof (x));
// console.log (typeof (u));
// console.log (typeof (n));
// x = 2;
// console.log (typeof (x));


//console.log("Hello, Javascript a partir do arquivo!");