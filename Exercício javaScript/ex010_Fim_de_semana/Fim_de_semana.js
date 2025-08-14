let ehDiaDeSemana = prompt("É dia de semana? [Sim/Não]")


//=========================================//
//Usando if e else sem o .toLocaleLowerCase//
//=========================================//

// if(ehDiaDeSemana == "sim" || ehDiaDeSemana == "Sim"){
//     alert("Vá trabalhar!!!")
// }
// else{
//     alert("Dia de descanso, va dormir!!!")
// }


//============================================//
//Usando o .toLocaleLowerCase para deixar tudo minusculo//
//============================================//


ehDiaDeSemana = ehDiaDeSemana.toLocaleLowerCase()
if(ehDiaDeSemana == "sim"){
    alert("Vá trabalhar!!!")
}
else{
    alert("Dia de descanso, va dormir!!!")
}







