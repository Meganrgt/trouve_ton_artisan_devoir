const {sequelize} = require ('../db/db');
const {DataTypes} = require ('sequelize');

const Categorie = sequelize.define('Categorie', {
    id_categorie: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        PrimaryKey: true,
    },
    nom_categorie: {
        type: DataTypes.STRING, 
        validate: {
            max:50
        }
    },
},
{
    createdAt: false,
    updatedAt: false,
});
    
Categorie.removeAttribute('id');

module.exports = Categorie;