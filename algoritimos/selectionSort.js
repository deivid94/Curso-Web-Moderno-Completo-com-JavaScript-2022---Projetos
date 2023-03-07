const livros = require('./listaLivros')
const menorValor = require('./menorValor')

livros.forEach((_, indice) => {
let menor = menorValor(livros, indice)

let livroAtual = livros[indice]
let livroMenorValor = livros[menor]

livros[indice] = livroMenorValor
livros[menor] = livroAtual

})

console.log(livros)