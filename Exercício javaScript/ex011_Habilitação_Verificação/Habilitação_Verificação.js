//============================//
// Verificando se pode dirigir//
//============================//

alert("Bem-vindo ao Verificando Habilitação")


let idade = parseInt(prompt("Digite sua idade: "))
let possuiCnh = prompt("Já possui CNH: [Sim/Não]")


possuiCnh = possuiCnh.toLocaleLowerCase()


if(idade == 18 && possuiCnh == "sim"){
    alert("Parabéns você pode dirigir!!")
}
else{
    alert("Ainda nãopode dirigir!!!")
}

