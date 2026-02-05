

function applyExtraSetUp(sequelize) {
    const {Specialite, Artisan, Categorie, Ville} = sequelize.models;
    
    Specialite.hasMany(Artisan, {
        foreignKey: 'id_specialite',
        sourceKey: 'id_specialite',
      });
    
      Specialite.belongsTo(Categorie, {
        foreignKey: 'id_categorie',
        targetKey: 'id_categorie',
      });
      Artisan.belongsTo(Specialite, {
        foreignKey: 'id_specialite',
        targetKey: 'id_specialite',
        as: 'specialite'
      });
    
      Artisan.belongsTo(Ville, {
        foreignKey: 'id_ville',
        targetKey: 'id_ville',
      });

      Categorie.hasMany(Specialite, {
        foreignKey: 'id_categorie',
        sourceKey: 'id_categorie',
      });

      Specialite.belongsTo(Categorie, {
        foreignKey: 'id_categorie',
        targetKey: 'id_categorie',
      });
}

module.exports = {applyExtraSetUp};