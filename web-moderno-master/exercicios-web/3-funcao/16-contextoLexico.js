const valor = 'Global'

function minhaFuncao() {
    //Vai buscar no escopo mais proximo
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    //Ela procura não no local onde a função foi chamada e sim onde foi definida
    minhaFuncao()
}

exec()