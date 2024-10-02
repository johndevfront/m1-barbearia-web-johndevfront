const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],
  
    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
};
  
function buscaCortePorId(id) {
    for(let i = 0; i < barbearia.cortes.length; i++) {
         barbearia.cortes[i]

        if( barbearia.cortes[i].id == id) {
            return barbearia.cortes[i];
        }
    
    }
        return "Corte não encontrado"
    }
    
 console.log(buscaCortePorId())
   
 function buscaBarbaPorId(id) {
    for (let i = 0; i < barbearia.barbas.length; i++) {
        barbearia.barbas[i]

        if(barbearia.barbas[i].id == id) {
            return barbearia.barbas[i];
        }

    }
    return "Barba não encontrada"
}

console.log(buscaBarbaPorId())


function verificaStatusBarbearia() {
    if(barbearia.estaAberto ) {
        return `Estamos abertos`
    }else {
        return `Estamos fechados`
    }
}

console.log(verificaStatusBarbearia())



function retornaTodosCortes() {
    for (let i = 0; i < barbearia.cortes.length; i++) {
        return barbearia.cortes

    }
}

console.log(retornaTodosCortes())



function retornaTodasBarbas() {

    for (let i = 0; i < barbearia.barbas.length; i++) {
        return barbearia.barbas

    }
}

console.log(retornaTodasBarbas())




function criaPedido(nomeCliente, corteId, barbaId) {

    let todosCortesId = [];
    let todasBarbasId = [];

    for(let i = 0; i < barbearia.cortes.length; i++) {
      todosCortesId.push(buscaCortePorId(corteId));
    }

    for(let i = 0; i < barbearia.barbas.length; i++) {
      todasBarbasId.push(buscaBarbaPorId(barbaId));
    }

    const pedido = {
        nome: nomeCliente,
        pedidoCorte:todosCortesId[0].tipo,
        pedidoCortePreco: todosCortesId[0].valor,
        pedidoBarba: todasBarbasId[0].tipo, 
        pedidoBarbaPreco: todasBarbasId[0].valor,

    }

    return  pedido

  }

  console.log(criaPedido('jonathan','1','5'))


  
  function atualizarServico(lista, id, valor, tipo) {

    for(let i = 0; i < lista.length; i++) {
       
       if(lista[i].id == id) {
         lista[i].valor = valor;
         lista[i].tipo = tipo;
         return lista;
       }
    }
    return lista;
   }

   

   function calculaTotal(pedido) {

    const total = pedido.pedidoBarbaPreco + pedido.pedidoCortePreco;
    return total;   
  }

   