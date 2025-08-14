// ---------------------------
// 1. Tipos de variáveis
// ---------------------------
var myvar1 = true;
console.log("Tipo:" + typeof myvar1);

var myvar2 = null;
console.log("Tipo:" + typeof myvar2);

var myvar3;
console.log("Tipo:" + typeof myvar3);

var myvar4 = 42;
console.log("Tipo:" + typeof myvar4);

var myvar5 = "Olá mundo";
console.log("Tipo:" + typeof myvar5);

var myvar6 = [1, 2, 3];
console.log("Tipo:" + typeof myvar6);

var myvar7 = { nome: "João" };
console.log("Tipo:" + typeof myvar7);

var myvar8 = function () {};
console.log("Tipo:" + typeof myvar8);

var myvar9 = 1234567890n;
console.log("Tipo:" + typeof myvar9);


// ---------------------------
// 2. Lista de alunos
// ---------------------------
let aluno1 = "Joana";
let aluno2 = "Samuel";
let aluno3 = "Vitória";
console.log(`Os alunos são:
    ${aluno1}
    ${aluno2}
    ${aluno3}`);


// ---------------------------
// 3. Média de notas
// ---------------------------
let nota1 = 10;
let nota2 = 8;
let nota3 = 7;
let nota4 = 3;

let mediafinal = (nota1 + nota2 + nota3 + nota4) / 4;
console.log("A média final é " + mediafinal);


// ---------------------------
// 4. Conversão de temperatura
// ---------------------------
let celsius = 34;
let fahrenheit = (celsius * 1.8) + 32;
console.log("A temperatura em Fahrenheit é " + fahrenheit);


// ---------------------------
// 5. Cálculo de desconto fixo
// ---------------------------
let valorProduto = 10;
let valorDescontoFixo = valorProduto * 0.1;
let valorResultado = valorProduto - valorDescontoFixo;
console.log("O seu desconto é de: R$ " + valorResultado);


// ---------------------------
// 6. Cálculo de juros sobre fatura
// ---------------------------
let juros = Number(prompt("Qual a porcentagem de juros?"));
let fatura = Number(prompt("Qual o valor da fatura?"));

let valorFatura = fatura + (fatura * juros / 100);
alert("O valor da fatura com juros é: R$ " + valorFatura.toFixed(2));


// ---------------------------
// 7. Cálculo de desconto sobre produto
// ---------------------------
let valorInicial = Number(prompt("Digite o valor do produto"));
let valorDesconto = Number(prompt("Digite a porcentagem de desconto"));

let valorComDesconto = valorInicial - (valorInicial * valorDesconto / 100);
alert("O valor do produto com desconto é: R$ " + valorComDesconto.toFixed(2));

// ---------------------------
// 8. Declarar Produto
// ---------------------------

let nomeDoProduto = "Camiseta";
let precoOriginal = 50;
let descontoPercentual = 10;
alert("O produto a venda é: " + nomeDoProduto);
alert("O preço original é R$ " + precoOriginal);

let valorDoDesconto = (precoOriginal * descontoPercentual /100);

alert("O desconto em reais é de R$ " + valorDoDesconto );

let precoFinal = precoOriginal - valorDoDesconto;

alert("O preço final com o desconto é R$ " + precoFinal);

let quantidadeNoEstoque = 15;

// ---------------------------
// 8. Produto
// ---------------------------

let quantidadeDesejada = parseInt(prompt("Quantas unidades você deseja comprar: "))


// ---------------------------
// 8. Produto
// ---------------------------
let valorTotalDaCompra = quantidadeDesejada * precoFinal

alert("O valor total da sua compra de " + nomeDoProduto + " na quantidade de " + quantidadeDesejada + " será de: " + valorTotalDaCompra)


// ---------------------------
// 9. Idade Proximo ano
// ---------------------------

let idade = parseInt(prompt("Qual sua idade? "))

let idadeProxAno = idade + 1

alert("Sua idade proximo ano vai ser " + idadeProxAno)


// ---------------------------
// 10. Decimo terceiro Atividade
// ---------------------------

let salario = parseFloat(prompt("Digite o valor do seu salário"));

let mesesTrabalhado = parseInt(prompt("Quantos meses você trabalhou esse ano"));

let decimoTerceiro = (salario/12) * mesesTrabalhado;

alert("O valor do seu 13° salário será R$:" + decimoTerceiro.toFixed(2));



// ---------------------------
// 10. Decimo terceiro Atividade
// ---------------------------


let idadeDaPessoa = parseInt(prompt("Digite sua idade"));

if (idadeDaPessoa >= 18){
    alert("Você pode dirigir");
}else{
    alert("Você é de menor");
}


// ---------------------------
// 10. Saldo
// ---------------------------

let saldo = 400

let valorDaCompra = parseInt(prompt("Digite o valor da sua compra"))

if(valorDaCompra <= saldo ) {
    saldo = saldo - valorDaCompra
    alert("Compra realizada com sucesso, saldo restante: " + saldo.toFixed(2))
}else{
    alert("Saldo insuficiente, você tem apenas R$: " + saldo)
}


