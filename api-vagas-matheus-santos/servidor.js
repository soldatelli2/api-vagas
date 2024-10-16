import express from 'express'
import vagasRoutes from './routes/vagasRoutes.js'

const app = express()
import sequelize from './database.js'
try
{
await sequelize.sync();
} catch (err) {
console.log(err)
}

app.use(express.json())
app.use(vagasRoutes)

app.listen(3000, () => console.log('Servidor rodando!'))