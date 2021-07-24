//Armazendo um função anonima em uma variavél
const soma = function (x, y) {
    return x + y
}

const subtracao = function (x, y){
    return x - y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}


imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, subtracao)
imprimirResultado(3, 4, function (x, y) {
    return x * y
})
//Arron function como parametro
imprimirResultado(3, 4, (x, y) => x / y)


//Função anônima dentro de um objeto
const pessoa = {
    falar: function () {
        console.log('Opa')
    },

    //Nova syntax
    chorar() {
        console.log('Ueeee Ueeee')
    }
}
//Acessa através do atributo
pessoa.falar()
pessoa.chorar()