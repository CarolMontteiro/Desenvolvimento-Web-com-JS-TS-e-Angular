

import Carro from './Carro'
import Concessionaria from './Concessionaria'
import Pessoa from './Pessoa'

/*----- CRIAR CARROS -----*/

let carroA = new Carro('Pálio', 4)
let carroB = new Carro('Sivic', 4)
let carroC = new Carro('Hilux', 4)

/*----- MONTAR A LISTA DE CARROS DA CONCESSIONARIA -----*/

let listaDeCarros: Carro[] = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('São joao da Ponta', listaDeCarros) 

/*----- EXIBIR A LISTA DE CARROS  -----*/
// console.log(concessionaria.mostrarListaDeCarros());

/*----- COMPRAR O CARRO  -----*/

let cliente = new Pessoa('Carol', 'Hilux')
// console.log(cliente.dizerCarroPreferido());

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
     if(carro['modelo'] == cliente.dizerCarroPreferido()) {
          // comparar carro
          cliente.comprarCarro(carro)
     }
     
})
     console.log(cliente.dizerCarroQueTem());
