


const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
  };
  
  cliente.enderecos = [
    {
      rua: "R. Joseph Climber",
      numero: 1337,
      apartamento: true,
      complemento: "ap 934",
    },
  ];

  const listaObjetos = Object.keys(cliente)


  if (!listaObjetos.includes("email")){
    console.error("é necessario ter um endereco cadastrado")
  }else {
    console.log("esta propriedade existe dentro do objeto")
  }