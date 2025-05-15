
import { Dao } from './Dao'
import Concessionaria from './Concessionaria'
import Pessoa from './Pessoa'
import Carro from './Carro'



let concessionaria = new Concessionaria('', [])

let pessoa: Pessoa = new Pessoa('','')

let carro: Carro = new Carro('',1)

let dao2: Dao<Concessionaria> = new Dao<Concessionaria>()
let dao3: Dao<Pessoa> = new Dao<Pessoa>()

dao2.inserir(concessionaria)
dao3.remover(2)
