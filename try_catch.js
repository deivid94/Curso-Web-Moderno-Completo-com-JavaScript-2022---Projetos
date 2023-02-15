function tratarError (error){
  throw new Error ('deu tudo errado')
}

function imprimirNome (obj) {
  try {
  console.log(obj.name.toUpperCase() + '!!!!')
  } catch (err) {

    tratarError(err)

  }
}

const obj = {nome: 'Roberto'}
imprimirNome(obj)