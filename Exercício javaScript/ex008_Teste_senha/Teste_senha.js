let cadastroUsuario = prompt("Escolha sua senha: ") 
let senhaUsuario = prompt("Digite sua senha: ")

//=====================//
//   Usando if e else  //
//=====================//

// if(cadastroUsuario == senhaUsuario){

//     alert("Entrada autorizada!")
// }
// else{
//     alert("Acesso Negado!!!")
// }



//=====================//
//Usando Loop com While//
//=====================//
while (cadastroUsuario != senhaUsuario){

    alert("Senha Incorreta. Tente novamente!")
    senhaUsuario = prompt("Digite a senha novamente: ")
}
(alert("Acesso Autorizado!!!"))