let xp_bonus = prompt("Digite a sua pontuação: ")


if(xp_bonus <= 1000){
    alert("Seu nível é Novato!\nParabêns você recebeu 100 XP.")
}else if(xp_bonus >= 1001 &&  xp_bonus <= 5000){
    alert("Seu nível é Aprendiz!\nParabêns você recebeu 500 XP.")
}else if(xp_bonus >= 5001 &&  xp_bonus <= 10000){
    alert("Seu nível é Expert!\nParabêns você recebeu 1000 XP.")
}else{
    alert("Seu nível é Mestre!\nParabêns você recebeu 2000 XP.")
}