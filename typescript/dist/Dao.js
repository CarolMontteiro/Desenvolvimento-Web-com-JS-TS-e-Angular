"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dao = void 0;
class Dao {
    constructor() {
        this.nomeTabela = 'tb_pessoa';
    }
    inserir(object) {
        console.log('lógica de insert');
        return true;
    }
    atualizar(object) {
        console.log('lógica de update');
        return true;
    }
    remover(id) {
        console.log('lógica delete');
        return Object();
    }
    selecionar(id) {
        console.log('lógica select');
        return Object();
    }
    selecionarTodos() {
        console.log('lógica getAll');
        return [Object()];
    }
}
exports.Dao = Dao;
