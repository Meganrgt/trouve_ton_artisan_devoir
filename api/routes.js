const express = require ('express');
const router = express.Router();
const Ville = require ('./models/cityModel');
const Categorie = require ('./models/categoryModel');
const Specialite = require ('./models/specialtyModel');
const Artisan = require ('./models/artisanModel');

router.get('/villes', async (req, res)=> {
    let villes = await Ville.findAll();
    res.status(200).json(villes);
});

router.get('/categories', async (req, res)=> {
    let categories = await Categorie.findAll();
    res.status(200).json(categories);
});

router.get('/specialites', async (req, res)=> {
    let specialites = await Specialite.findAll();
    res.status(200).json(specialites);

});

router.get('/artisans', async (req, res)=> {
    let artisans = await Artisan.findAll();
    res.status(200).json(artisans);

});

router.get('/villes/:id', async (req, res)=> {
    let ville = await Ville.findOne({
        where: {
            id_ville:req.params.id
        }
    });
    res.status(200).json(ville);
});

router.get('/categories/:id', async (req, res)=> {
    let categorie = await Categorie.findOne({
        where: {
            id_categorie:req.params.id
        }
    });
    res.status(200).json(categorie);
});

router.get('/specialites/:id', async (req, res)=> {
    let specialite = await Specialite.findOne({
        where: {
            id_specialite:req.params.id
        }
    });
    res.status(200).json(specialite);
});

router.get('/artisans/:id', async (req, res)=> {
    let artisan = await Artisan.findOne({
        where: {
            id_artisan:req.params.id
        }
    });
    res.status(200).json(artisan);
});

module.exports = router;