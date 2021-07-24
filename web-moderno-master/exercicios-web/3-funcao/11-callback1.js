/**
 * CALL BACK -> passa uma função para outra função e quando determinado evento acontecer a função passada vai ser 
 * chamada de volta. O callback pode ser chamado umavez ou varias dependendo do contexto que a função e utilizada 
 */
const fabricantes = ["Mercedes", "Audi", "BMW"]


//Nessa situação o evento é a função imprimir que a função forEach chama enquanto tiver dados do fabricantes. A cada interação o console imprime o fabricante 
function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
//Há variavel ""a" e igual a fabricantes
fabricantes.forEach(function(a){
    console.log(a)
})
fabricantes.forEach(fabricante => console.log(fabricante))