let senhaCadastro = 12345;
let senhaCorreta;

                  //============//
                  //Usando o !==//
                  //============//
while(senhaCorreta !== senhaCadastro){

  senhaCorreta = parseInt(prompt("Digite sua senha: "))

  if(senhaCorreta === senhaCadastro){
    alert("Senha correta! ")
  break
  }else{
      alert("Senha errada,tente de novo!")
    }
  }
  
                //===========//
                //Usando true//
                //===========//

while(true){

  senhaCorreta = parseInt(prompt("Digite sua senha: "))

  if(senhaCorreta === senhaCadastro){
    alert("Senha correta! ")
  break
  }else{
      alert("Senha errada,tente de novo!")
    }
  }
  
  
  