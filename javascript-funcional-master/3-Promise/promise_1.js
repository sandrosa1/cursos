
// Exemplo 1
let p1 = new Promise(function(cumprirPromesa){
//    Só devolve um valor 
    cumprirPromesa(3);
});

p1.then(function(valor){
    console.log(`Promise 1-> ${valor}`);
});



// Exemplo 2
let p2 = new Promise(function(cumprirPromesa){
    //    Mais valores em forma de objeto
        cumprirPromesa({
            x:3,
            y:6
        });
    });

p2.then(function(valor){
    console.log(`Promise 2 Primerio valor-> ${valor.x} segundo valor->${valor.y}`);
});
    
    

// Exemplo 3
let p3 = new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel']);
});

p3.then (valor => console.log('Promise 3-> '+ valor));

// Exemplo 4
let p4 = new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel']);
});

p4
    .then (valor => valor[1]) //Pega o nome na posição 1,(Segundo nome)
    .then (valor => valor[0]) // Pega primeira letra
    .then (valor => valor.toLowerCase()) // Muda a letra para minuscula
    .then(console.log)


//Exemplo 5
//  Organizando exemplo 4
const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)
