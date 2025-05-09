"use strict";
class Carro {
    constructor(modelo, numeroDePortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
    acelerar() {
        this.velocidade = this.velocidade + 10;
    }
    parar() {
        this.velocidade = 0;
    }
    velocidadeAtual() {
        return this.velocidade;
    }
}
class Concessionaria {
    constructor(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    fornecerEndereco() {
        return this.endereco;
    }
    mostrarListaDeCarros() {
        return this.listaDeCarros;
    }
}
class Pessoa {
    constructor(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    dizerNome() {
        return this.nome;
    }
    dizerCarroPreferido() {
        return this.carroPreferido;
    }
    comprarCarro(carro) {
        this.carro = carro;
    }
    dizerCarroQueTem() {
        return this.carro;
    }
}
/*----- CRIAR CARROS -----*/
let carroA = new Carro('Pálio', 4);
let carroB = new Carro('Sivic', 4);
let carroC = new Carro('Hilux', 4);
/*----- MONTAR A LISTA DE CARROS DA CONCESSIONARIA -----*/
let listaDeCarros = [carroA, carroB, carroC];
let concessionaria = new Concessionaria('São joao da Ponta', listaDeCarros);
/*----- EXIBIR A LISTA DE CARROS  -----*/
console.log(concessionaria.mostrarListaDeCarros());
