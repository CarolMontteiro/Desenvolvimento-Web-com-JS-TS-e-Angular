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
    constructor(endereco) {
        this.endreco = endereco;
    }
    fornecerEndereco() {
        return this.endreco;
    }
    mostrarListaDeCarros() {
    }
}
let concessionaria = new Concessionaria('Av Nazaré');
console.log(concessionaria);
