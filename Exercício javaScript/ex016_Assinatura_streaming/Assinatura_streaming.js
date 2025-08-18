let opcaoPlano = Number(prompt("Escolha uma das opções:\n[ 1 ] Básico | R$ 25,00\n[ 2 ] Premium | R$ 35,00\n[ 3 ] Ultra | R$ 50,00."))
let opcaoTela = Number(prompt("Quantas telas você deseja\n[ 1 ] 1-2 R$0,00\n[ 2 ] 3-4 R$5,00 por tela extra\n[ 3 ] 4 + R$7,50 por tela extra."))

/*
 Valores Planos
*/

const planoBasico  = 25
const planoPremium = 35
const planoUltra   = 50

let valorTotal = 0 
            //===============//
            //  Plano Básico //
            //===============//

if(opcaoPlano === 1 && opcaoTela === 1 ){
    valorTotal = planoBasico
    alert("[ Plano Contratado com sucesso ]\n              [ Plano Básico ]\nO valor do seu plano é : R$ " + valorTotal)
}
else if(opcaoPlano === 1 && opcaoTela === 2){
    valorTotal = planoBasico + 5
    alert("[ Plano Contratado com sucesso ]\n              [ Plano Básico ]\nO valor do seu plano é : R$ " + valorTotal)
}
else if(opcaoPlano === 1 && opcaoTela === 3){

    valorTotal = planoBasico + 7.50
    alert("[ Plano Contratado com sucesso ]\n              [ Plano Básico ]\nO valor do seu plano é : R$ " + valorTotal)
}

            //===============//
            // Plano Premium //
            //===============//
if(opcaoPlano === 2 && opcaoTela === 1){

    valorTotal = planoPremium
    alert("[ Plano Contratado com sucesso ]\n              [ Plano Premium ]\nO valor do seu plano é : R$ " + valorTotal)
}
else if(opcaoPlano === 2 && opcaoTela === 2){
    valorTotal = planoPremium + 5
     alert("[ Plano Contratado com sucesso ]\n              [ Plano Premium ]\nO valor do seu plano é : R$ " + valorTotal)
}
else if(opcaoPlano === 2 && opcaoTela === 3){
    valorTotal = planoPremium + 7.50
     alert("[ Plano Contratado com sucesso ]\n              [ Plano Premium ]\nO valor do seu plano é : R$ " + valorTotal)
}



            //===============//
            // Plano Ultra //
            //===============//

if(opcaoPlano === 3 && opcaoTela === 1){
    valorTotal = planoUltra
    alert("[ Plano Contratado com sucesso ]\n              [ Plano Ultra ]\nO valor do seu plano é : R$ " + valorTotal)
}
else if(opcaoPlano === 3 && opcaoTela === 2){
    valorTotal = planoUltra + 5
    alert("[ Plano Contratado com sucesso ]\n              [ Plano Ultra ]\nO valor do seu plano é : R$ " + valorTotal)
}
else if(opcaoPlano === 3 && opcaoTela === 3){
    valorTotal = planoUltra + 7.50
    alert("[ Plano Contratado com sucesso ]\n              [ Plano Ultra ]\nO valor do seu plano é : R$ " + valorTotal)
}




             //===============//
            //     ChatGpt    //
            //===============//
// // Este script vai calcular o valor do plano baseado na escolha do usuário

// document.getElementById('planoForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Evita o envio do formulário
    
//     // Obtém os valores selecionados
//     let opcaoPlano = Number(document.getElementById('plano').value);
//     let opcaoTela = Number(document.getElementById('telas').value);

//     // Definição dos valores dos planos
//     const planoBasico  = 25;
//     const planoPremium = 35;
//     const planoUltra   = 50;

//     let valorTotal = 0;
//     let mensagem = '';
//     let sucessoMensagem = '';
    
//     // Calculo baseado no plano escolhido e na quantidade de telas
//     if (opcaoPlano === 1) { // Plano Básico
//         if (opcaoTela === 1) {
//             valorTotal = planoBasico;
//         } else if (opcaoTela === 2) {
//             valorTotal = planoBasico + 5;
//         } else if (opcaoTela === 3) {
//             valorTotal = planoBasico + 7.50;
//         }
//         mensagem = `[ Plano Básico ]\nO valor do seu plano é: R$ ${valorTotal.toFixed(2)}`;
//         sucessoMensagem = "Plano Básico contratado com sucesso!";
//     }
//     else if (opcaoPlano === 2) { // Plano Premium
//         if (opcaoTela === 1) {
//             valorTotal = planoPremium;
//         } else if (opcaoTela === 2) {
//             valorTotal = planoPremium + 5;
//         } else if (opcaoTela === 3) {
//             valorTotal = planoPremium + 7.50;
//         }
//         mensagem = `[ Plano Premium ]\nO valor do seu plano é: R$ ${valorTotal.toFixed(2)}`;
//         sucessoMensagem = "Plano Premium contratado com sucesso!";
//     }
//     else if (opcaoPlano === 3) { // Plano Ultra
//         if (opcaoTela === 1) {
//             valorTotal = planoUltra;
//         } else if (opcaoTela === 2) {
//             valorTotal = planoUltra + 5;
//         } else if (opcaoTela === 3) {
//             valorTotal = planoUltra + 7.50;
//         }
//         mensagem = `[ Plano Ultra ]\nO valor do seu plano é: R$ ${valorTotal.toFixed(2)}`;
//         sucessoMensagem = "Plano Ultra contratado com sucesso!";
//     } else {
//         mensagem = "Escolha um plano válido.";
//         sucessoMensagem = "";
//     }

//     // Exibe o valor do plano
//     const resultadoDiv = document.getElementById('resultado');
//     resultadoDiv.style.display = 'block';
//     resultadoDiv.textContent = mensagem;

//     // Exibe a mensagem de sucesso
//     const sucessoDiv = document.getElementById('sucesso');
//     if (sucessoMensagem) {
//         sucessoDiv.style.display = 'block';
//         sucessoDiv.textContent = sucessoMensagem;
//     } else {
//         sucessoDiv.style.display = 'none';
//     }

//     // Caso algo tenha dado errado, exibe uma mensagem de erro
//     const erroDiv = document.getElementById('erro');
//     if (valorTotal === 0) {
//         erroDiv.style.display = 'block';
//         erroDiv.textContent = "Erro ao calcular o valor, por favor tente novamente.";
//     } else {
//         erroDiv.style.display = 'none';
//     }
// });

