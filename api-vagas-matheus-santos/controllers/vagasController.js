import { Vaga } from "../models/Vagas.js"

const criarVaga = async (req, res) => {
    try {
        const { titulo, descricao, cargo, cidade, salario } = req.body
        if (!titulo || !descricao || !cargo || !cidade || !salario) {
            return res.status(404).send({ mensagem: 'Dados incompletos!' })
        }

        const vaga = await Vaga.create({ titulo, descricao, cargo, cidade, salario })

        res.status(201).send({ vaga })

    } catch (erro) {
        console.log(erro)
        res.status(500).send({ mensagem: 'Erro interno.' })
    }
}

const listarVagas = async (req, res) => {
    try {
        const resultado = await Vaga.findAll()
        res.status(200).send({ resultado: resultado })
    } catch (erro) {
        console.log(erro)
        res.status(500).send({ mensagem: 'Erro interno.' })
    }
}

const listarVagaPorID = async (req, res) => {
    try {
        const { id } = req.params

        const resultado = await Vaga.findAll({ where: { id } })
        console.log(resultado)
        res.status(200).send({ resultado: resultado })
    } catch (erro) {
        console.log(erro)
        res.status(500).send({ mensagem: 'Erro interno.' })
    }
}

const atualizarDadosVaga = async (req, res) => {
    try {
        const { id } = req.params
        const { titulo, descricao, cargo, cidade, salario } = req.body
        const resultado = await Vaga.update({ titulo, descricao, cargo, cidade, salario }, { where: { id } })
        res.status(200).send({ mensagem: 'Vaga alterada com sucesso!' })
    } catch (erro) {
        console.log(erro)
        res.status(500).send({ mensagem: 'Erro interno' })
    }
}

const removerVaga = async (req, res) => {
    try {
        const { id } = req.params
        // await conexao.query(`DELETE FROM filmes WHERE id = ${id}`)
        await Vaga.destroy({ where: { id } })
        res.status(200).send({ mensagem: 'Vaga apagada com sucesso!' })
    } catch (erro) {
        console.log(erro)
        res.status(500).send({ mensagem: 'Erro interno' })
    }
}

const listarVagasPorCargo = async (req, res) => {
    try {
        const { cargo } = req.params
        const resultado = await Vaga.findAll({ where: { cargo } })
        console.log(resultado)
        res.status(200).send({ resultado: resultado })
    } catch (erro) {
        console.log(erro)
        res.status(500).send({ mensagem: 'Erro interno.' })
    }
}

const listarVagasPorCidade = async (req, res) => {
    try {
        const { cidade } = req.params
        const resultado = await Vaga.findAll({ where: { cidade } })
        console.log(resultado)
        res.status(200).send({ resultado: resultado })
    } catch (erro) {
        console.log(erro)
        res.status(500).send({ mensagem: 'Erro interno.' })
    }
}

export { criarVaga, listarVagas, listarVagaPorID, atualizarDadosVaga, removerVaga, listarVagasPorCargo, listarVagasPorCidade }