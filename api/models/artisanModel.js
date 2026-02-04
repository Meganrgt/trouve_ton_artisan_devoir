const {sequelize} = require ('../db');
const {DataTypes} = require ('sequelize');

const Artisan = sequelize.define('Artisan', {
    id_artisan: {
        type: DataTypes.INTEGER, 
        allowNull: false,
        PrimaryKey: true,
    },
    nom_artisan: {
        type: DataTypes.STRING, 
        validate: {
            max:255
        }
    },
    email: {
        type: DataTypes.STRING, 
        validate: {
            max:255
        }
    },
    a_propos: {
        type: DataTypes.TEXT, 
    },
    note: {
        type: DataTypes.DECIMAL, 
    },
    site_web: {
        type: DataTypes.STRING, 
        validate: {
            max:255
        }
    },
    top_mois: {
        type: DataTypes.BOOLEAN, 
    },
    id_ville: {
        type: DataTypes.INTEGER, 
    },
    id_specialite: {
        type: DataTypes.INTEGER, 
    }
},
{
    createdAt: false,
    updatedAt: false,
});

Artisan.removeAttribute('id');

module.exports = Artisan;