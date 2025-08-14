let quantidadeNoEstoque = 10
let nomeDoProduto = "Monitor Gamer"
let quantidadeDesejada = parseInt(prompt("Quantas unidades você deseja comprar?"))

// if(quantidadeDesejada > quantidadeNoEstoque){
//     alert("Desculpe, não temos estoque suficiente para a sua compra.")
// }
// else{
//     alert("Pedido realizado com sucesso!")
//     quantidadeNoEstoque = quantidadeNoEstoque - quantidadeDesejada 
//     alert("Estoque atual do produto: " + quantidadeNoEstoque) 
// }

if(quantidadeDesejada > quantidadeNoEstoque){

    alert("Solicitação não pode ser atendida.Estoque insuficiente.")
}else if( quantidadeDesejada === quantidadeNoEstoque){
    alert("Compra realizada! Você levou as últimas unidades do nosso estoque!")
}else if( quantidadeDesejada <= 0){
    alert("Quantidade inválida. Por favor, insira um número maior que zero.")
}else{
    alert("A compra é válida e não esgota o estoque.")
    alert("Pedido confirmado!")
}