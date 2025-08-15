const apresentacao = ("Seja Bem-vindo ao Categoria de idade!")
let idadeUsuario = Number(prompt("Digite sua idade:"))


if(idadeUsuario < 12){
    alert("O conteudo que você ira assistir é infantil!")
}else if(idadeUsuario >= 12 && idadeUsuario <=17 ){
    alert("O conteudo que você ira assistir é Teen!")
}else if(idadeUsuario >= 18 && idadeUsuario <= 60){
    alert("O conteudo que você ira assistir é Adulto!")
}else{
    alert("O conteudo que você ira assistir é Sênior!")
}


