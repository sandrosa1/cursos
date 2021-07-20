const fs = require('fs')
const path = require('path')

function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo) {
            resolve(conteudo.toString())
        })
    })
}

const caminho = path.join(__dirname, 'dados.txt')

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n')) // Cria um array
    .then(linhas => linhas.join(',')) // criando uma string com array recebido
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)