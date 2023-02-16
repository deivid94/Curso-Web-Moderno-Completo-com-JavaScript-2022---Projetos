const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
    saldo:200,

    efetuaPagamento: function (valor){
        if (valor>this.saldo){
            console.log(`${this.nome}, voce nao pode comprar esse produto, SALDO: ${this.saldo}, VALOR DA COMPRA ${valor}`)
        }else {
            this.saldo-=valor
            console.log(`Pagamento efeutado com sucesso, seu saldo é de: ${this.saldo}`)
        }
    }
  }

  cliente.efetuaPagamento(100)
