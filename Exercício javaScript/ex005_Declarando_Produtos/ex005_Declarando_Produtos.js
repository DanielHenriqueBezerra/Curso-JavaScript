
//Declarando produtos

let nomeDoProduto = "Camiseta"
let precoOriginal = 50
let descontoPercentual = 10

alert("O produto à venda é: " + nomeDoProduto);
alert("O preço original é R$: " + precoOriginal);

let valorDoDesconto = (precoOriginal * descontoPercentual / 100);

alert("O desconto em reais é R$: " + valorDoDesconto);

let precoDoFinal = precoOriginal - valorDoDesconto; 

alert("O preço final com o desconto é R$ : " + precoDoFinal);

let quantidadeNoEstoque = 15;

let quantidadeDesejada = parseInt(prompt("Quantas unidades desejada você quer: "))

let valorTotalDaCompra = quantidadeDesejada * precoDoFinal

alert("O valor total da sua compra de " + quantidadeDesejada + " unidades de " + nomeDoProduto + " será de R$ " + valorTotalDaCompra)



