const clientes = require('../clients_exercice.json')

function filtrarClientesSemComplemento(clientes){
return clientes.filter((cliente) => {

    return (cliente.endereco.apartamento &&
           cliente.endereco.hasOwnProperty("complemento")
        )

})

}

const filtrados = filtrarClientesSemComplemento(clientes)
console.log(filtrados)