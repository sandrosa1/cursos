// ENTENDENDO UM POUCO MAIS SOBRE FUNÇÃO E PROTOTYPE

function MeuObjeto() {}
//Verifiacando se o atributo existe
console.log(MeuObjeto.prototype)

//Criando duas enstâncias atravéis de funções construtoras
const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
//Verificando se os objetos apontam para mesmo prototypo
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

//Criando parametros para prototype
MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}
// Vai utilizar atributos nome do prototypo
obj1.falar()

//Vai utilar atributo nome do obj
obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

// Resumindo a loucura...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)//true
console.log(MeuObjeto.__proto__ === Function.prototype)//True
console.log(Function.prototype.__proto__ === Object.prototype)//True
console.log(Object.prototype.__proto__ === null)