
import { DaoInterface } from './DaoInterface'
import Concessionaria from './Concessionaria';

export class ConcessionariaDao implements DaoInterface {

     nomeTabela: string = 'tb_concessionaria'

     inserir(object: Concessionaria): boolean {
          console.log('lógica de insert');
          return true
     }

     atualizar(object: Concessionaria): boolean {
          console.log('lógica de update');
          return true
     }

     remover(id: number): Concessionaria {
          console.log('lógica delete');
          return new Concessionaria('', [])
     }

     selecionar(id: number): Concessionaria {
          console.log('lógica select');
          return new Concessionaria('', [])
     }

     selecionarTodos(): [any] {
          console.log('lógica getAll');
          return [new Concessionaria('', [])]
     }
}