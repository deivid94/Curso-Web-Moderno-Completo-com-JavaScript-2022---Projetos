//Destruring é uma nova forma de acessar os atributos de um elemento
// array, objeto


const pessoa = {
  nome: "Deivid",
  sobrenome: "Martins",
  email: "deivid.appgame@com.br",
  idade: 28,
  profissisao: "Desenvolvedor",
  endereco: {
    rua:"Bertholdo Ricardo beling",
    numero:"50"
  } 
}

   const { email, profissisao} = pessoa

    console.log(email, profissisao)

    // atribuindo  os valores retornados a uma nova variavel
const { nome: ident, idade: age } = pessoa

console.log(ident,age)

// acessando atributos dentro de outros atributos

const {endereco: {rua, numero}} = pessoa

console.log(rua,numero)