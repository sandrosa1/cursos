const escola = "Cod3r"

console.log(escola.charAt(4)) 
console.log(escola.charAt(5))//Não da erro
console.log(escola.charCodeAt(3)) // Da o numero na tabela ascii
console.log(escola.indexOf('3')) // Navega pelo indíce

console.log(escola.substring(1)) // Inicia de uma posição
console.log(escola.substring(0, 3))// Inícia e termina

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")

console.log(escola.replace(3, 'e'))// Pode utilizar REGEX
console.log(escola.replace(/\d/, 'e'))// Pode utilizar REGEX

console.log('Ana,Maria,Pedro'.split(',')) //Converte em uma Array

console.log('Ana,Maria,Pedro'.split(/,/)) //Com Regex