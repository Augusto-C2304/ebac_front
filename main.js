// Classe abstrata Livro
class Livro {
    constructor(titulo, autor, ano) {
        if (this.constructor === Livro) {
            throw new Error("Livro é uma classe abstrata e não pode ser instanciada diretamente.");
        }
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
    }

    descrever() {
        throw new Error("Método 'descrever()' deve ser implementado.");
    }
}


class LivroFiccao extends Livro {
    constructor(titulo, autor, ano, genero) {
        super(titulo, autor, ano);
        this.genero = genero;
    }

    descrever() {
        return `${this.titulo} é um livro de ficção no gênero ${this.genero}, escrito por ${this.autor} em ${this.ano}.`;
    }
}


class LivroNaoFiccao extends Livro {
    constructor(titulo, autor, ano, tema) {
        super(titulo, autor, ano);
        this.tema = tema;
    }

    descrever() {
        return `${this.titulo} é um livro de não-ficção sobre ${this.tema}, escrito por ${this.autor} em ${this.ano}.`;
    }
}


const livro1 = new LivroFiccao("1984", "George Orwell", 1949, "Distopia");
const livro2 = new LivroNaoFiccao("Sapiens: Uma Breve História da Humanidade", "Yuval Noah Harari", 2011, "História");
const livro3 = new LivroFiccao("O Senhor dos Anéis", "J.R.R. Tolkien", 1954, "Fantasia");

console.log(livro1.descrever());
console.log(livro2.descrever());
console.log(livro3.descrever());
