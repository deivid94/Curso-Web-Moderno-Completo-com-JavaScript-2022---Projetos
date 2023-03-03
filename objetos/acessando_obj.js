const objPersonagem ={ 
  nome: "Ganfalf",
  classe: "Mago",
  nivel: "20",
  aliado: {
    nome:"saruman",
    classe: "mago"
  }, 

  status:"desaparecido"
  
}

console.log(objPersonagem)
// se quizermos deletar um atributo

delete objPersonagem.aliado

console.log(objPersonagem)

objPersonagem.status = "mago"