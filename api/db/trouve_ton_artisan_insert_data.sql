/* CHOIX DE LA BASE DE DONNÉES*/
USE trouve_ton_artisan;

/* INSERTION DES DONNÉES*/

-- Données de la table CATÉGORIES
INSERT INTO trouve_ton_artisan.categories (nom_categorie) VALUES 
('Alimentation'),
('Bâtiment'),
('Fabrication'),
('Services');

-- Données de la table VILLES
INSERT INTO trouve_ton_artisan.villes (nom_ville) VALUES 
('Lyon'),
('Montélimar'),
('Evian'),
('Chamonix'),
('Bourg-en-Bresse'),
('Vienne'),
('Aix-les-bains'),
('Annecy'),
('Le Puy-en-Velay'),
('Saint-Priest'),
('Chambéry'),
('Romans-sur-Isère'),
('Annonay'),
('Valence');

-- Données de la table SPÉCIALITÉS
INSERT INTO trouve_ton_artisan.specialites (nom_specialite, id_categorie) VALUES 
('Boucher', 1),
('Boulanger', 1),
('Chocolatier', 1),
('Traiteur', 1),
('Chauffagiste', 2),
('Electricien', 2),
('Menuisier', 2),
('Plombier', 2),
('Bijoutier',3),
('Couturier', 3),
('Ferronier', 3),
('Coiffeur', 4),
('Fleuriste', 4),
('Toiletteur', 4),
('Webdesign', 4);

-- Données de la table ARTISANS
INSERT INTO trouve_ton_artisan.artisans (nom_artisan, email, a_propos, note, site_web, top_mois, id_ville, id_specialite) VALUES 
('Boucherie Dumont', 'boucherie.dumond@gmail.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 4.5, NULL, FALSE, 1, 1),
('Au pain chaud', 'aupainchaud@hotmail.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.,', 4.8, NULL, TRUE, 2, 2),
('Chocolaterie Labbé', 'chocolaterie-labbe@gmail.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 4.9, 'https://chocolaterie-labbe.fr', TRUE, 1, 3),
('Traiteur Truchon', 'contact@truchon-trateur.fr', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 4.1, 'https://truchon-traiteur.fr', FALSE, 1, 4),
('Orville Salmons', 'o-salmons@live.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 5, NULL, TRUE, 3, 5),
('Mont Blanc Electricité', 'contact@mont-blanc-electricite.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 4.5, 'https://mont-blanc-electricite.com', FALSE, 4, 6),
('Boutot & Fils', 'boutot-menuiserie@gmail.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 4.7, 'https://boutot-menuiserie.com', FALSE, 5, 7),
('Vallis Bellemare', 'v.bellemare@gmail.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 4.0, 'https://plomberie-bellemare.com', FALSE, 6, 8),
('Claude Quinn', 'claude.quinn@gmail.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 4.2, NULL, FALSE, 7, 9),
('Amitee Lécuyer', 'a.amitee@hotmail.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 4.5, 'https://lecuyer-couture.com', FALSE, 8, 10),
('Ernest Carignan', 'e-carignan@hotmail.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 5, NULL, FALSE, 9, 11),
('Royden Charbonneau', 'r.charbonneau@gmail.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 3.8, NULL, FALSE, 10, 12),
('Leala Dennis', 'l.dennis@hotmail.fr', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 3.8, 'https://coiffure-leala-chambery.fr', FALSE, 11, 12),
("C'est sup'hair", 'sup-hair@gmail.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 4.1, 'https://sup-hair.fr', FALSE, 12, 12),
('Le monde des fleurs', 'contact@le-monde-des-fleurs-anonnay.fr', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 4.6, 'https://le-monde-des-fleurs-anonnay.fr', FALSE, 13, 13),
('Valérie Laredoute', 'v-laderedoute@gmil.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 4.5, NULL, FALSE, 14, 14),
('CM Graphisme', 'contact@cm-graphisme.com', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 4.4, 'https://cm-graphisme.com', FALSE, 14, 15);