"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = __importDefault(require("./Carro"));
const moto_1 = __importDefault(require("./moto"));
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
let carro = new Carro_1.default('hilux', 4);
carro.acelerar();
let moto = new moto_1.default();
moto.acelerar();
moto.acelerar();
let concessionaria = new Concessionaria_1.default('', []);
console.log(carro);
console.log(moto);
console.log(concessionaria.fornecerHorarioDeFuncionamento());
