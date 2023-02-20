const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
   }
   
   const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
   }

   const guerreiro = {...fichaGuerreiro, ...equipoGuerreiro} // juntando dois objetos com spread

    console.log(guerreiro)