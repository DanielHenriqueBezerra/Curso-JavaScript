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
