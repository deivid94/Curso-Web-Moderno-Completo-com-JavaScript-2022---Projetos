function troca(lista,analise){
    let itemAnalise = lista[analise];
    let ItemAnterior = lista[analise - 1];

    listaAnalise = ItemAnterior;
    lista[analise - 1] = itemAnalise;

    analise--
}

module.exports = troca