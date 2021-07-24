/**
 * Crie uma função matemática que dados dois valores(passados com parametros)
 *  mostre no console a soma.subtração, multiplicação e divisão desses valores;
 */
const soma = (a,b) => a + b;
const subtracao = (a,b) => a - b;
const multiplicacao = (a,b) => a * b;
const divisao = (a,b) => a / b;

function resposta(a,b){
    console.log('Soma = '+ soma(a,b));
    console.log('Subtração = ' + subtracao(a,b));
    console.log('Multiplicação = '+ multiplicacao(a,b));
    console.log('Divisaão = ' + divisao(a,b));
}

resposta(10, 9);

/**
 * 02)​ Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
 * Equilátero: Os três lados são iguais. 
 * Isósceles:  Dois lados iguais. 
 * Escaleno: Todos os lados são diferentes.
 * Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua 
 * classificação quantoao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições 
 * matemáticas de existência de umtriângulo).
 */
function  qualTriangulo(a, b,c){
   
    let msg = ''

    if(a != b && a != c && b != c){
        msg = 'Escaleno'
    }
    else if(a == b && a == c && b == c){
        msg = 'Equilatero'
    }
    else{
        msg = 'Isósoles'

    }
    return msg
    
}

console.log(qualTriangulo(1,2,3))
console.log(qualTriangulo(2,2,2))
console.log(qualTriangulo(2,2,3))

/**
 * Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
 */

function pontenciacao(base, expoente){
    return Math.pow(base,expoente)
}
console.log(pontenciacao(4,2))

/**
 * ​Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultadoe o resto da divisão destes dois valores.
 * 
 */
console.log(divisao(10,5))