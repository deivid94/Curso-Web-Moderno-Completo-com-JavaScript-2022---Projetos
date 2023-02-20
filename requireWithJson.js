// GET JSON/ CONVERT TO STRINF, CONVERT TO JSON AGAIN


const clientes = require("./cliente.json")


const listClient = Object.keys(clientes)

const jsonToString = JSON.stringify(clientes) // convert object to strinf

console.log (typeof(jsonToString)) 

const jsonParse = JSON.parse(jsonToString)

console.log(typeof(jsonParse))
