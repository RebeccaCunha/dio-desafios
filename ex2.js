/*Desafio: Cadastro Simples de Usuários
Objetivo:
Criar um sistema onde:

Você armazena os dados de uma pessoa.
Mostra esses dados formatados no console.
Requisitos:
Criar um objeto para armazenar as informações do usuário, como:
Nome
Idade
E-mail
Cidade
Estado civil
Adicionar uma função/método no objeto para exibir as informações em uma mensagem completa.*/

let usuario = {
    nome: 'Rebecca',
    idade: 30,
    email: 'emailficticio@gmail.com',
    cidade: 'Rio de Janeiro',
    estadoCivil: 'Casada',

    exibirDados () {
        console.log(`Nome: ${usuario.nome}, Idade: ${usuario.idade}, Email: ${usuario.email}, Cidade: ${usuario.cidade}, Estado civil: ${usuario.estadoCivil}.`)
    }
}


usuario.exibirDados()

// Utilize o 'this.' pois é mais flexível, pro caso do nome do objeto ser alterado no futuro e não precisar mudar manualmente!!