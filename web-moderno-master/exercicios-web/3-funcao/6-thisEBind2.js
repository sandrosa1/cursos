function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() {
        //this,idade++ //this não funciona nessa situação, Mas podemos iniciar a função com bind passando o parametro tis bind(this)
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa