const clientes = require('../clients_exercice.json')

function encontrarObj (lista, chave, valor){
    return  lista.find((item) => item[chave].includes(valor))
}

const encontrado = encontrarObj(clientes, "nome", "Olva")

console.log(encontrado)