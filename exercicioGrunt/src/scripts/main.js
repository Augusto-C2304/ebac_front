function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;

    this.apresentar = function() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    };
}

let pessoa1 = new Pessoa("João", 30);
pessoa1.apresentar(); // Saída: Olá, meu nome é João e tenho 30 anos.
