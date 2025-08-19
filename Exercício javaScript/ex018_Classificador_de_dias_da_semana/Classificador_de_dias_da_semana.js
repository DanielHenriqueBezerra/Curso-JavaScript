let diaSemana = parseInt(prompt(`Digite um número da semana, considerado o 1ª dia como domingo:
    [ 1 ] Domingo
    [ 2 ] Segunda
    [ 3 ] Terça
    [ 4 ] Quarta
    [ 5 ] Quinta
    [ 6 ] Sexta
    [ 7 ] Sábado`))
switch(diaSemana){
    
    case    2:
    case    3:
    case    4:
    case    5:
    case    6:
    
    alert(`Dia da semana, se prepapre para trabalhar!`)
    break
    
    case    1:
    case    7:
    alert(`Final de semana, dia de curtir!!!`)
    default:
        alert(`Número inválido!
        Escolha as opções de 1 à 7`)
    
}