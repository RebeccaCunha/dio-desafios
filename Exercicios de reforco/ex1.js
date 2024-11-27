/*Planetas Favoritos
Crie um código para listar seus planetas favoritos. Ele deve:

Armazenar informações sobre pelo menos 5 planetas em um array bidimensional. Cada subarray deve conter:
O nome do planeta.
Um motivo pelo qual você gosta dele.
Uma nota de favoritismo para o planeta (de 0 a 10).
Exibir uma mensagem sobre um dos planetas favoritos usando console.log e template literals.*/

let planetasFavoritos = [
    ['Saturno', 'eu acho o mais bonito por todo seu anel', "10/10"],
    ['Netuno', 'acho o tom de azul sólido e misterioso', "8/10"],
    ['Marte', 'o vermelho remete a guerras espaciais', "8/10"],
    ['Júpiter', 'por todo seu tamanho e tempestades assustadoramente incríveis', "10/10"],
]

console.log(`Um dos meus planetas favoritos é o ${planetasFavoritos[3][0]}, ${planetasFavoritos[3][1]}, e na minha escala de favoritismo, ele é ${planetasFavoritos[3][2]}!`)


