/**
 *01) Crie uma função matemática que dados dois valores(passados com parametros)
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
 * 03-Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
 */

function pontenciacao(base, expoente){
    return Math.pow(base,expoente)
}
console.log(pontenciacao(4,2))

/**
 * 04-​Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultadoe o resto da divisão destes dois valores.
 * 
 */
console.log(divisao(10,5))


/**
 * 05- Lidar com números em JavaScript pode dar muita dor de cabeça. 
 * Você já viu o que acontece quando faz o seguinte comando no console: 
 *  console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. 
 * Outra coisa importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. 
 * Com isso, vamos fazerum exercício simples para mostrar dinheiro sempre da forma correta. 
 * Desenvolva uma função JavaScript paraque ela receba um valor como 0.30000000000000004 e
 * retorne R$0,30 (observe a vírgula e o ponto)
 * 
 */

function format(valor){
   return `R$ ${valor.toFixed(2).toString().replace(".", ",")}`

}
console.log(format(0.3000000))

/**
 * 06)​ Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
    primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
    retornará o valor da aplicação sob o regime de juros compostos.
 */

function jurosSimples(capInicial, txJuros, tempoAplicado){
    
    let acumulado = capInicial + (capInicial * ((txJuros/100) * tempoAplicado));
    return `JUROS SIMPLES: Capital inicial R$ ${capInicial} tempo aplicado ${tempoAplicado} taxa de juros ${txJuros} total do acumulado R$ ${acumulado.toFixed(2).toString().replace(".", ",")}`;
};

function jurosComposto(capInicial, txJuros, tempoAplicado){
    
    let acumulado = capInicial;
    
    for(let i = 1; i <= tempoAplicado ; i++){
         acumulado = acumulado + (acumulado * (txJuros/100))
    };

    return `JUROS COMPOSTO: Capital inicial R$ ${capInicial} tempo aplicado ${tempoAplicado} taxa de juros ${txJuros} total do acumulado R$ ${acumulado.toFixed(2).toString().replace(".", ",")}`;

};

console.log(jurosSimples(1000,6,12));
console.log(jurosComposto(10000,2,12));


/**
 * 07)​Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar.
 *  Dito isto,elabore uma função cujo objetivo é resolver a fórmula de Bhaskara.
 *  Para isso, sua função deve receber trêsparâmetros, “ax2”, “bx” e “c”, 
 * de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,-5, 12. 
 * Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado,
 *  mesmo que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, 
 * um string com a frase:“Delta é negativo”.
 * 
 */

const calDelta = (a,b,c) => Math.pow(b,2) - 4 * a * c;
const x1 = (a,b,delta1) => ((-(b)) + Math.sqrt(delta1))/(2 * a);
const x2 = (a,b,delta1) => ((-(b)) - Math.sqrt(delta1))/(2 * a);

function baskara(a,b,c){

   let resultado = [] 
   let delta = calDelta(a,b,c)
   if(delta < 0){
       return 'Delta negativo';
   }
   else
   {
       linha1 = x1(a, b,delta)
       linha2 = x2(a, b,delta)
       resultado.push(linha1); 
       resultado.push(linha2); 
       
       return resultado
   }

}

console.log(baskara(4,2,-6))
console.log(baskara(3,-5,12))


/**
 * 08)​Pedro joga N jogos de basquete por temporada.
 *  Para saber como está ele está progredindo, ele mantém registro de todos os as pontuações feitas por jogo. 
 *  Após cada jogo ele anota no novo valor e confere se o mesmo é maior ou menor que seu melhor e pior desempenho. 
 *  Dada uma lista string = “pontuação1 pontuação2pontuação3 etc..”,
 *  escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um vetor com o
 *  número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior jogo. (Número do pior jogo).
 * 
 **/
 

 let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 0, 56"
 
 
 function avaliaPontuacoes (stringPontuacoes) {
     let pontuacoes = stringPontuacoes.split(", ")
     let qtdQuebraDeRecords = 0
     let piorJogo = 1
     let maiorPontuacao = pontuacoes[0]
     let menorPontuacao = pontuacoes[0]
 
     for (let i = 1; i < pontuacoes.length; i++) {
         if(pontuacoes[i] > maiorPontuacao) {
             maiorPontuacao = pontuacoes[i]
             qtdQuebraDeRecords++
         }else if (pontuacoes[i] < menorPontuacao) {
             menorPontuacao = pontuacoes[i]
             piorJogo = i+1;
         }
     }
     return [qtdQuebraDeRecords, piorJogo]
 }
  
 console.log(avaliaPontuacoes(stringPontuacoes))

 
/**
 * 9)​ Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de classificação: Todo aluno recebe uma nota de 0 a 100. 
 * Alunos com nota abaixo de 40 são reprovados. As notas possuem a seguinte regra de arredondamento: 
 * Se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3, arredondar a nota para esse próximo múltiplo de 5. 
 * Se a nota for abaixo de 38, não é feito nenhuma rredondamento pois esta nota resulta na reprovação do aluno. 
 * Por exemplo, a nota 84 será arredondada para 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou seja, que evite a reprovação do aluno. 
 * No caso de a nota ser 38, o arredondamento é possível pois atingirá 40 e o aluno será aprovado.
 **/

const arredondamento = (nota) => {
    let i = 0
    let notaArredondada = nota
    while(i <= 3){
        if(notaArredondada % 5 == 0){
            return notaArredondada
        }
        notaArredondada ++
        i++
    }
    return nota
}

function mediaFinal(nota){
    if(nota >= 37){
        nota = arredondamento(nota)
        if(nota >= 40){
    
            return `Aprovado nota ${nota}`
        }
    }
    return `Reprovado`

}

console.log(mediaFinal(37))
console.log(mediaFinal(40))
console.log(mediaFinal(88))
console.log(mediaFinal(95))
console.log(mediaFinal(26))
console.log(mediaFinal(61))

/**
 * 10)​Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true ou false.
 * 
 **/

const divisivelPor = (a,b)=> {
    if(a % b == 0) return true
    return false
}

console.log(divisivelPor(30,3))


/** 
 * 11)​As regras para o cálculo dos anos bissextos são as seguintes:De 4 em 4 anos é ano bissexto;
 * De 100 em 100 anos não é ano bissexto;
 * De 400 em 400 anos é ano bissexto;
 * Prevalecem as últimas regras sobre as primeiras.
 * Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, 
 * imprimindo no console amensagem e retornando  true ou false.
 * */

function anoBissexto(ano){

    if(ano > 0){
        if(ano % 100 == 0){
            if(ano % 400 == 0)
                return `${ano} é bissexto`
            return `${ano} não e bissexto`
        }
        if(ano % 4 == 0){
            return `${ano} é bissexto`
        }
    }
    return `${ano} não é bissexto`
    
}

console.log(anoBissexto(0))
console.log(anoBissexto(4))
console.log(anoBissexto(100))
console.log(anoBissexto(400))
console.log(anoBissexto(800))
console.log(anoBissexto(2020))
console.log(anoBissexto(2021))
console.log(anoBissexto(1988))
console.log(anoBissexto(2000))
console.log(anoBissexto(2020))
console.log(anoBissexto(2052))
console.log(anoBissexto(2051))
console.log(anoBissexto(95))

/**
 * 12)​ Faça um algoritmo que calcule o fatorial de um número.
 **/

function fatorial(numero){
    let numFat = 1
    if(numero > 1){
        for(let i = 1; i <= numero ; i++ ){
            numFat = numFat * i  
        }
        return numFat
    }    
    return 1
}

function fatorialRecursiva (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(0))
console.log(fatorial(1))
console.log(fatorial(2))
console.log(fatorial(3))
console.log(fatorial(4))
console.log(fatorial(5))

/**
 * 13)​Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao dia. 
 * Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
 *
 **/

function eDiaUtil(diaDaSemana){
    let up = diaDaSemana.toUpperCase()
    switch(up){
        case 'SEGUNDA':
        case 'TERÇA':
        case 'QUARTA':
        case 'QUINTA':
        case 'SEXTA':
            console.log('Dia util')
        break;
        case'SABADO':
        case'DOMINGO':
            console.log('Dia não util')
        break;
        default:
            console.log('Algo deu errado')
        break;
    }
}

eDiaUtil('domingo')
eDiaUtil('Segunda')
eDiaUtil('TeRçA')
eDiaUtil('SABADO')

/**
 * 14)​Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três casos: 
 * Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos comescassez de kiwis”. 
 * Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. 
 * Teste com estas três opções .Crie também um default, que retornará uma mensagem de erro no console.
 **/

const quitanda = (fruta) => {
    let temNaQuitanda = fruta.toUpperCase()
    switch(temNaQuitanda){
        case 'MAÇÃ':
            console.log('Não vendemos está fruta aqui.')
        break;
        case'KIWI':
            console.log('Estamos com escassez de kiwis')
        break;
        case 'MELANCIA':
            console.log('Aqui esta, são 3 reais o kilo')
        break;
        default:
            console.log('Erro ao digitar')
        break;
    }
}
quitanda('maçã')
quitanda('Kiwi')
quitanda('Melancia')
quitanda('maracuja')


 /**
 * 15)​Um homem decidiu ir à uma revenda comprar um carro. 
 * Ele deseja comprar um carro hatch, e a revenda possui, além de carros hatch, sedans, motocicletas e caminhonetes. 
 * Utilizando uma estrutura switch, caso o comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: 
 * “Tem certeza que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, 
 * retorne no console:“Não trabalhamos com este tipo de automóvel aqui”.
 * */

 const concessionaria = (modelo) => {
    switch(modelo){
        case'hatch':
            console.log('Compra efetuada com sucesso.')
        break;
        case 'sedans':
        case 'motocicletas':
        case 'caminhonetes':
            console.log('Tem certeza que não prefere este modelo?')
        break;
        default:
            console.log('Não trabalhamos com este tipo de automóvel aqui')
        break;
    }
 }

concessionaria('hatch')
concessionaria('sedans')
concessionaria('moto')

 /**
 * 16)​ Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica O programa recebe como
 *  parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
    numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
    3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
 */


  const calculadora = (num1,operador,num2)=>{
      switch(operador){
        case '+':
            return num1 + num1;
        case '-':
            return num1 - num1;
        case '*':
            return num1 * num1;
        case '/':
            return num1 / num1;
        default:
            return 'Opção invalida'
      }
  }  

  console.log(calculadora(2,'+',2))
  console.log(calculadora(2,'-',2))
  console.log(calculadora(2,'*',2))
  console.log(calculadora(2,'/',2))
  console.log(calculadora(2,'=',2))

/**
 * 17)​ Um funcionário irá receber um aumento de acordo com o seu plano de
 *  trabalho, de acordo com a tabela abaixo:
 *  Plano Aumento
 *  A 10%
 *  B 15%
 *  C 20%
 *  Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
 *  novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
 */

const aumento = (salario,plano) => {
    switch(plano){
        case 'A':
            return salario + (salario * 0.10)
        case 'B':
            return salario + (salario * 0.15)
        case 'C':
            return salario + (salario * 0.20)
        default:
            return 'Plano inválido'
    }
}
console.log(aumento(1000,'A'))
console.log(aumento(1000,'B'))
console.log(aumento(1000,'C'))
console.log(aumento(1000,'D'))

/**
 * 18)​ Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
 *  switch. Crie um case default que escreva ‘Número fora do intervalo.’
 */

const numeros = (num) => {
    switch(num){
        
        case 1:
            return 'Um';
        case 2:
            return 'Dois';
        case 3:
            return 'Três';
        case 4:
            return 'Quatro';
        case 5:
            return 'Cinco';
        case 6:
            return 'Seis';
        case 7:
            return 'Sete';
        case 8:
            return 'Oito';
        case 9:
            return 'Nove';
        case 10:
            return 'Dez';
        default:
            return 'Numéro fora do intervalo'
    }
}

console.log(numeros(1))
console.log(numeros(5))
console.log(numeros(11))
console.log(numeros(7))
console.log(numeros(3))

/**
 * 19) ​ O cardápio de uma lanchonete é o seguinte:
 * Código    Descrição do Produto     Preço
 * 100       Cachorro Quente          R$ 3,00
 * 200       Hambúrguer Simples       R$ 4,00
 * 300       Cheeseburguer            R$ 5,50
 * 400       Bauru                    R$ 7,50
 * 500       Refrigerante             R$ 3,50
 * 600       Suco                     R$ 2,80
 * Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
 * a ser pago por aquele lache. Considere que a cada execução somente será calculado um item. Use o
 * comando switch. Crie um caso default para produto não existente.
 */

 const produto = {
    codigo:{
        100:{
            tipo:'Cachorro quente',
            preco: 3.00
        }, 
        200:{
            tipo:'Hamburguer Simples',
            preco: 4.00
        },
        300:{
            tipo: 'Cheeseburguer',
            preco: 5.50
        },
        400:{
            tipo: 'Bauru',
            preco: 7.50
        },
        500:{
            tipo: 'Refrigerante',
            preco: 3.50
        },
        600:{
            tipo: 'Suco',
            preco: 2.80
        }

    },
    pedido: function(num,quantidade){
        if(this.codigo[num]){
            let total = this.codigo[num].preco * quantidade;
            console.log(`Pedido: ${quantidade} ${this.codigo[num].tipo}, total = R$ ${total.toFixed(2)}`)
        }else{
            console.log('Código inválido.')
        }
        
    }
        
}

produto.pedido(100,3)
produto.pedido(200,3)
produto.pedido(300,3)
produto.pedido(400,3)
produto.pedido(500,3)
produto.pedido(600,3)
produto.pedido(700,3)

/**
 * 20)​ Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
 * para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
 * Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
 * informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
 * nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
 */


const troco = (valor,cem = 0,cinquenta = 0, dez=0,cinco = 0, um = 0) => {
    
    if(valor >= 100){
        cem ++
        return troco(valor -100,cem ,cinquenta , dez,cinco, um )
    }
    else if(valor >= 50){
        cinquenta ++
        return troco(valor -50,cem ,cinquenta , dez,cinco, um )
    }
    else if(valor >= 10){
        dez ++
        return troco(valor -10,cem ,cinquenta , dez,cinco, um )
    }
    else if(valor >= 5){
        cinco ++
        return troco(valor -5,cem ,cinquenta , dez,cinco, um )
    }
    else if(valor >= 1){
        um ++
        return troco(valor -1,cem ,cinquenta , dez,cinco, um )
    }
    else{

        console.log(`${cem} notas de cem, ${cinquenta} notas de cinquenta, ${dez} notas de dez, ${cinco} notas de cinco,${um} notas de um`)
    }


}

troco(378)
/**
 * 21)​ Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
 * considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
 * de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
 * idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
 */

function convenio(idade){
    if(idade > 60)
    return 'Valor R$230,00'
    if(idade > 30)
    return 'Valor R$195,00'
    if(idade >= 10)
    return 'Valor R$150,00'
    if(idade > 0)
    return 'Valor R$180,00'
}
console.log(convenio(61))
console.log(convenio(31))
console.log(convenio(30))
console.log(convenio(10))
console.log(convenio(9))

/**
 * 22)​ Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
 * parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro...) que foi paga e o valor da anuidade. A
 * anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
 * compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
 */

 function calcularValor(mes, valor){
    if(mes > 0 && mes < 13) {
        atraso = mes - 1
        return (valor * ((1 + (5/100))**atraso)).toFixed(2)
    } else {
        return 'Mês inválido.'
    }
}

console.log(calcularValor(4, 100))

/**
 * 23)​ Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
 * aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
 * aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
 * "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
 */


function calcularNotaFinal(codAluno, nota1, nota2, nota3){
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a,b) => a < b ? 1 : -1)

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(`Código do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

calcularNotaFinal(123, 2.8, 6, 3.5)

/**
 * 24)​ Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while.
 */

 (function () {
    let i = 11
    while(i > 0){
        console.log(i+ '- Olá mundo!')
        i--
    }
})()


/**
 * 25) ​ Escrever um programa para exibir os números de 1 até 50 na tela.
 */

(function (){
    for(let i = 1; i <= 50; i++){
        console.log(i)
    }
})()

/**
 * 26)​ Fazer um programa para encontrar todos os pares entre 1 e 100.
 */

 (function (){
    for(let i = 1; i <= 100; i++){
        if(i % 2 == 0){
            console.log(i)
        }
    }
})()

/**
 * 27)​ Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
 * crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
 * quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
 */


function calcularCrescimento(altura1, taxa1, altura2, taxa2) {
    if(altura1 == altura2){
        if (taxa1 > taxa2) {
            return 'A criança 1 ultrapassará a criança 2 em 1 ano.'
        } else if(taxa1 < taxa2) {
            return 'A criança 2 ultrapassará a criança 1 em 1 ano.'
        }else{
            return 'As crianças tem igual altura e crescimento.'
        }
    } else {
        if (altura1 > altura2) {
            if(taxa1 >= taxa2){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return `A criança menor ultrapassará a maior em ${calcularTempo(altura1, taxa1, altura2, taxa2)} anos` 
            }
        } else {
            if(taxa2 >= taxa1){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return `A criança menor ultrapassará a maior em ${calcularTempo(altura1, taxa1, altura2, taxa2)} anos` 
            }
        }
    }
}

function calcularTempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior){
    let qtdAnos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdAnos++
    }
    //console.log(qtdAnos)
    return qtdAnos
}

console.log(calcularCrescimento(150, 2, 130, 4));