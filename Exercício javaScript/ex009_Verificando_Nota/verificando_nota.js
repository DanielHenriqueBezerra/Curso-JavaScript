let nota1 = Number(prompt("Digite a primeira nota: "))
let nota2 = Number(prompt("Digite a segunda nota: "))
let nota3 = Number(prompt("Digite a terceira nota: "))
let nota4 = Number(prompt("Digite a quarta nota: "))


let media = 6

let calculandoMedia = (nota1 + nota2 + nota3 + nota4) / 4


if( calculandoMedia >= media){
    alert("Parabéns você foi aprovado!!!")
}
else{
    alert("infelizmente você foi reprovado!")
}

