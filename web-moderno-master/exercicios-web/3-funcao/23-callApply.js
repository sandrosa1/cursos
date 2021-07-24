function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
//Chamando a função diretamente
console.log('Chamando a função diretamente acessa o this através do global '+ getPreco())
//Chamando a função como um objeto
console.log('Chamando a função através do objeto produto '+produto.getPreco())

const carro = { preco: 49990, desc: 0.20 }
console.log('Executando através da função  call ' + getPreco.call(carro))
console.log('Executando através da função  aplly ' +getPreco.apply(carro))

//A diferença está na passada dos parâmetros no appy utiliza-se um array para passar os parâmetros
console.log('Executando através da função  call ' +getPreco.call(carro, 0.17, '$'))
console.log('Executando através da função  aplly ' +getPreco.apply(carro, [0.17, '$']))
console.log('Executando através da função  aplly ' +getPreco.apply(global, [0.17, '$']))