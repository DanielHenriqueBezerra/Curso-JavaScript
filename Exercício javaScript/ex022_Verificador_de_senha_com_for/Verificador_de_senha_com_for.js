let senhUsuario = 12345

for(let senha = 0; senha <= 3; senha++){
  let verificandoSenha = parseInt(prompt("Digite sua senha:"))
    
  if (verificandoSenha === senhUsuario ){
    
    alert("Sistema liberado, seja bem-vindo!")
    break
  }
  else{
    alert("Senha incorreta, tente novamente")
    
  }

  if (senha === 2){
    alert("Senha bloqueada, você tentou  3 vezes!" )
    
  }
  
}