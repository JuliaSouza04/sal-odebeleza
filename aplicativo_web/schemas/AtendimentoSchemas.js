const {DataTypes, Model} = require('sequelize');
const sequelize = require('../database/dbconfig');

class Atendimento extends Model {}

Atendimento.init({
    nomeCliente: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone:{
        type: DataTypes.STRING,
       allowNull: false 
    },
    horario:{
        type: DataTypes.TIME,
        allowNull: false,
    },
    data:{
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    dataNascimento:{
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    tipoServico:{
        type: DataTypes.ENUM('Unha', 'Cabelo', 'Pele'),
        allowNull: false,
    },
    profissional:{
        type: DataTypes.STRING,
        allowNull: false,
    }
    },{
        sequelize,
        modelName: 'Atendimento',
        tableName: 'atendimento'
});

module.exports = Atendimento;