
/*

spread: conceito basico é usado para separar um objeto ou array em pedacos e usalos separadamente

tambem pode ser usado para juntar varias coisas 

RESUMINDO SERVER PARA JUNTA OU SEPARAR ARRAYS! 

*/

const cliente = {
    nome:"Deivid",
    sobrenome:"Martins",
    telefone: ["(48) 996197294","48 30154025"],
    email: "deivid@teste.com",

}

cliente.endereco =  [
    {
        Rua: "Joao Romalino da rosa",
        numero:50,
        bairro:"jamaica"
    }
]

     function ligarParaCliente (numeroComercia, NumeroResidencial){
           // console.log (`ligando para ${cliente.telefone[0]}`)
           //console.log (`ligando para ${cliente.telefone[1]}`)
     }

     ligarParaCliente(...cliente.telefone) // spread [...]


     // enviar uma encomanda
     const encomenda = {
        destinatario: `${cliente.nome} ${cliente.sobrenome}`,
        ...cliente.endereco[0],
        
    }
     console.log(encomenda)

