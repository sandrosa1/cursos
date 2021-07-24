// Aqui na função literal o this aponta para o modulo da função
let comparaComThis = function (param) {
    console.log(this === param)
}
//No NODE o objeto global  se da pelo nome global
comparaComThis(global) // Se passar o parametro this ele não e o this "Estranhesas da linguagem"

//PARA TESTAR NO NAVEGADOR
// let comparaComThisNoBrowser = function (param){
//     console.log(this === param)
// }
//No navegador o objeto global se da pelo nome window
// comparaComThisNoBrowser(window)



const obj = {}
//Associando a função comparaComThis ao  OBJ através da função bind
comparaComThis = comparaComThis.bind(obj)
//Agora global e false
comparaComThis(global)
//oblj e true
comparaComThis(obj)

// Aqui na fução ARRON o this aponta para o modulo da função
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)


//Teste Radical
comparaComThisArrow = comparaComThisArrow.bind(obj)
// A Arron function e mais forte que o bind e mantém a referência
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)