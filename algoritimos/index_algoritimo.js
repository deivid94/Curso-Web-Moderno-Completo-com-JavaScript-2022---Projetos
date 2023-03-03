// Exercicio verificar qual, numero é o menor!

const livros = require('./listaLivros')

            
console.log(livros)

let maisBarato = 0

for (let atual = 0; atual < livros.length; atual++){
    if (livros[atual].preco < livros[maisBarato].preco){
        maisBarato = atual
    }
}

console.log(`o livro mais barato é ${livros[maisBarato].preco}, é o nome do livro é ${livros[maisBarato].nome}`)