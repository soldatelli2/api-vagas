import express from 'express'
import { atualizarDadosVaga, criarVaga, listarVagaPorID, listarVagas, listarVagasPorCargo, listarVagasPorCidade, removerVaga } from '../controllers/vagasController.js'
const router = express.Router()

router.post('/vagas', criarVaga)
router.get('/vagas/listarVagas', listarVagas)
router.get('/vagas/:id', listarVagaPorID)
router.put('/vagas/:id', atualizarDadosVaga)
router.delete('/vagas/:id', removerVaga)
router.get('/cargo/:cargo', listarVagasPorCargo)
router.get('/localizacao/:cidade', listarVagasPorCidade)

export default router