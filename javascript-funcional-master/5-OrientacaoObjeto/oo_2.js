class Produto {

    constructor(nome, preco, desc = 0.4) {
        this.nome = nome
        this.preco = preco
        this.desc = desc
    }

    get nome() {
        return `Produto: ${this._nome}`
    }

    set nome(novoNome) {
        this._nome = novoNome.toUpperCase()
    }

    get preco() {
        return this._preco
    }
    
    set preco(novoPreco) {
        if(novoPreco >= 0) {
            this._preco = novoPreco
        }
    }

    get precoFinal() {
        return this.preco * (1 - this.desc)
    }
}

const p1 = new Produto('Caneta', 10)
// p1.nome = 'caneta'
p1.preco = -2
console.log(p1.nome )
console.log('Preço: '+ p1.preco)
console.log('Preço com desconto: '+ p1.precoFinal)

//Preco pode ter erros de arredondamento
const p2 = new Produto('Geladeira', 10000, 0.8)
console.log('Preço: '+ p2.preco)
console.log(p2.precoFinal)


console.log(typeof Produto)