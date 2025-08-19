let seg = parseFloat(prompt(`Horas utilizadas pelo seu filho na Segunda:
(Formato: horas.minutos(10.5))`))
let ter = parseFloat(prompt(`Horas utilizadas pelo seu filho na Terça:
(Formato: horas.minutos(10.5))`))
let qua = parseFloat(prompt(`Horas utilizadas pelo seu filho na Quarta:
(Formato: horas.minutos(10.5))`))
let qui = parseFloat(prompt(`Horas utilizadas pelo seu filho na Quinta:
(Formato: horas.minutos(10.5))`))
let sex = parseFloat(prompt(`Horas utilizadas pelo seu filho na Sexta:
(Formato: horas.minutos(10.5))`))
let sab = parseFloat(prompt(`Horas utilizadas pelo seu filho na Sábado:
(Formato: horas.minutos(10.5))`))
let dom = parseFloat(prompt(`Horas utilizadas pelo seu filho na Domingo:
(Formato: horas.minutos(10.5))`))


let somaDias = seg + ter + qua + qui + sex + sab + dom

if(somaDias <= 13){
    alert(`O uso do celular está saudável!
Total de horas:` + somaDias + ` Horas.`)
}
    else if(somaDias >= 14 && somaDias <= 28){
        alert(`O uso do celular é considerado norma!
            Total de horas:` + somaDias + ` Horas.`)
    }
        else if(somaDias >= 29 && somaDias<= 42){
            alert(`                 [ Atenção!!! ] 
    O uso de celular é elevado e pode ser prejudicial!
    Total de horas:` + somaDias + ` Horas.`)
        }
            else if(somaDias > 42 && somaDias < 168 ){
            alert(`                 [ Cuidado!!! ] 
    O uso é excessido e requer intervenção
    Total de horas: ` + somaDias + ` Horas.`)
            }
                else if (somaDias > 7 * 24){
                    alert(`Valor irreal, digite um valor abaixo 168 horas!`)
                }

                