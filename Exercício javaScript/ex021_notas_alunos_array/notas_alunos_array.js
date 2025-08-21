let alunos = ["Pedro", "Ana", "Luiz", "Paulo","Silvio"]
let notaAlunos = "Notas dos alunos:\n";

for( let aluno of alunos ){
    let notas = parseFloat(prompt(`Digite a nota do aluno: ${aluno}` ))
    notaAlunos +=`${aluno}: ${notas}\n`
     
}
alert(notaAlunos)





