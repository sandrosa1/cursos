// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}


//As chaves agora representam o operador destructuring que tem  a função de tirar algo de uma estrutura e colocar em uma variavel

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

// se não houver o atributo volta undefined, pode tratar colocando um valor padrão para retornar
const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)


const {endereco} = pessoa
console.log(endereco)

//Desta maneira o destructuring retira somente os atributos do endereço
const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

//O dado precisa existir para não dar erro
//const { conta: { ag, num } } = pessoa
//console.log(ag, num)