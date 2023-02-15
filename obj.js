// manipulando objetos em javascript
const pessoas = {
  nome:"Deivid",
  sobrenome:"Martins",
  idade:28,
  sexo:"Masculino",
    endereco: {
      rua:"Rua Bertholdo Ricardo Beling",
      numero: 50,

    }
  

}

// Acessando os dados dentro dos objetos!
// com a conotacao de . (ponto)

console.log (` Nome da pessoa é:  ${pessoas.nome} ${pessoas.sobrenome} do genero ${pessoas.sexo}`)


//alterando dados do objeto

pessoas.telefone = "48 30930590"
console.log(pessoas)