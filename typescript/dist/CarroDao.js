"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarroDao = void 0;
const Carro_1 = __importDefault(require("./Carro"));
class CarroDao {
    constructor() {
        this.nomeTabela = 'tb_carro';
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
        return new Carro_1.default('', 0);
    }
    selecionar(id) {
        console.log('lógica select');
        return new Carro_1.default('', 0);
    }
    selecionarTodos() {
        console.log('lógica getAll');
        return [new Carro_1.default('', 0)];
    }
}
exports.CarroDao = CarroDao;
