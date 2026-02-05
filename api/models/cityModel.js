const {sequelize} = require ('../db/db');
const {DataTypes} = require ('sequelize');




const Ville = sequelize.define('Ville', {
    id_ville: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        PrimaryKey: true,
    },
    nom_ville: {
        type: DataTypes.STRING, 
        validate: {
            max:50
        }
    }
},
{
    createdAt: false,
    updatedAt: false,
});

Ville.removeAttribute('id');

module.exports = Ville;