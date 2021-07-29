//  OBJECT.CREATE

const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: 
    {   value: 'Bia',
        writable: false, // VALOR NOME NÃO ACEITA SER MUDADO (FINAL)
        enumerable: true //PERMITE SER LISTADO.
    }
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))// APARECE POR QUE O ATRIBUTO ENUMERABLE É TRUE

for(let key in filha2) {
    // Verifica se a propriedade pertense ao objeto
    filha2.hasOwnProperty(key) ?
        // ou veio por herança
        console.log(key) : console.log(`Por herança: ${key}`)
}