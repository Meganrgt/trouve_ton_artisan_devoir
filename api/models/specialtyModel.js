const {sequelize} = require ('../db');
const {DataTypes} = require ('sequelize');

const Specialite = sequelize.define('Specialite', {
    id_specialite: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        PrimaryKey: true,
    },
    nom_specialite: {
        type: DataTypes.STRING, 
        validate: {
            max:50
        }
    },
    id_categorie: {
        type: DataTypes.INTEGER
    }
},
{
    createdAt: false,
    updatedAt: false,
});

Specialite.removeAttribute('id');

module.exports = Specialite;