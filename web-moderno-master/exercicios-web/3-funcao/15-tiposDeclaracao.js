console.log(soma(3, 4))

// function declaration e a unica que pode ser chamada antes
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression melhor para debugs mais não e muito utilizadas
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))