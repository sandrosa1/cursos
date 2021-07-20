// Função Contrutora
function Produto(nome, preco, desc = 0.15) {
    this.nome = nome
    this.preco = preco
    this.desc = desc
   
    this.precoFinal = function() {
        return this.preco * (1 - this.desc)
    }
}

const p1 = new Produto('Caneta', 10)
console.log(`Produto: ${p1.nome}, Preço: ${p1.preco}`)
console.log(`Produto: ${p1.nome}, Preço com desconto: ${p1.precoFinal()}`)

const p2 = new Produto('Geladeira', 3000)
console.log(p2.preco)
console.log(p2.precoFinal())

