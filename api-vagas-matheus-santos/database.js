// senha banco de dados: 13wpzj22frg1EpZaS4CcuA

// bd: postgresql://matheus:13wpzj22frg1EpZaS4CcuA@senai-senai-2464.jxf.gcp-southamerica-east1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full

import { Sequelize } from "sequelize";

const conexao = new Sequelize('postgresql://matheus:13wpzj22frg1EpZaS4CcuA@senai-senai-2464.jxf.gcp-southamerica-east1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full')

try {
    await conexao.authenticate()
    console.log('Conectado com sucesso!')
} catch (error) {
    console.error('Erro ao conectar', error)
}

export default conexao