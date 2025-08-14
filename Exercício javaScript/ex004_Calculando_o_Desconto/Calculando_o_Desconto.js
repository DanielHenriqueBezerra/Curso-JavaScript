let valorproduto = parseFloat(prompt("Digite o valor do produto: "))

let valordesconto = parseFloat(prompt("Qual foi o valor do desconto: "))

valorfinal = valorproduto + (valorproduto * valordesconto / 100)

console.log("O valor final do seu produto é de :R$ " + valorfinal)