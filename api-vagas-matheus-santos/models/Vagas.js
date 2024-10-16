import sequelize from '../database.js'
import { DataTypes } from 'sequelize'

const Vaga = sequelize.define('Vaga', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING    
    },
    descricao: {
        type: DataTypes.TEXT    
    },
    cargo: {
        type: DataTypes.STRING    
    },
    cidade: {
        type: DataTypes.STRING    
    },
    salario: {
        type: DataTypes.FLOAT    
    },
}, {
    createdAt: false, updatedAt: false, tableName: 'Vagas'
})

export { Vaga }