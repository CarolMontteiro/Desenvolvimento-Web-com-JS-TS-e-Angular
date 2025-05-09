"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = __importDefault(require("./Carro"));
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
const Pessoa_1 = __importDefault(require("./Pessoa"));
/*----- CRIAR CARROS -----*/
let carroA = new Carro_1.default('Pálio', 4);
let carroB = new Carro_1.default('Sivic', 4);
let carroC = new Carro_1.default('Hilux', 4);
/*----- MONTAR A LISTA DE CARROS DA CONCESSIONARIA -----*/
let listaDeCarros = [carroA, carroB, carroC];
let concessionaria = new Concessionaria_1.default('São joao da Ponta', listaDeCarros);
/*----- EXIBIR A LISTA DE CARROS  -----*/
// console.log(concessionaria.mostrarListaDeCarros());
/*----- COMPRAR O CARRO  -----*/
let cliente = new Pessoa_1.default('Carol', 'Hilux');
// console.log(cliente.dizerCarroPreferido());
concessionaria.mostrarListaDeCarros().map((carro) => {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        // comparar carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
