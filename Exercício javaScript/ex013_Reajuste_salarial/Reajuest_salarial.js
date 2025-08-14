let salarioAtual =  Number(prompt("Qual o seu salário atual?"))



// if(salarioAtual < 1509){
//     reajuste15 = salarioAtual + ((salarioAtual * 15)/100)
//     alert("O seu novo salário com o aumento de 15% é de: R$" + reajuste15)
// }
// else if(salarioAtual <= 3018){
    
//        reajuste10 =  salarioAtual +( (salarioAtual * 10 )/ 100 )
//        alert(" O seu novo salário com o aumento de 10% é de: R$" + reajuste10)
// }else{
//     reajuste5 = salarioAtual +(( salarioAtual * 5) / 100)
//     alert("Seu novo salário com o aumento de 5% é de R$" + reajuste5)
// }
   

if(salarioAtual < 1509){
    salarioAtual *= 1.15
    alert("O seu novo salário com o aumento de 15% é de: R$" + salarioAtual)
}
else if(salarioAtual <= 3018){
    
       salarioAtual *= 1.10
       alert(" O seu novo salário com o aumento de 10% é de: R$" + salarioAtual)
}else{
    salarioAtual *= 1.05
    alert("Seu novo salário com o aumento de 5% é de R$" + salarioAtual)
}
   

    
    