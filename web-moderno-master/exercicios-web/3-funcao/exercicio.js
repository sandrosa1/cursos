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