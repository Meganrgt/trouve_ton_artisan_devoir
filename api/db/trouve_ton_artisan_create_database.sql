/* CREATION DE LA BASE DE DONNÉES*/
DROP DATABASE IF EXISTS trouve_ton_artisan;
CREATE DATABASE IF NOT EXISTS trouve_ton_artisan DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE trouve_ton_artisan;

/* CREATION DE L'ADMIN DE LA BASE DE DONNÉES*/

-- Création du user
CREATE USER adminlyon@'localhost' IDENTIFIED BY 'admin@123*';

-- Création des accès
GRANT ALL PRIVILEGES ON trouve_ton_artisan.* TO 'adminlyon'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;


/* CREATION DES TABLES*/

-- TABLE CATÉGORIES
DROP TABLE IF EXISTS categories;
CREATE TABLE IF NOT EXISTS categories (
    id_categorie INT NOT NULL UNIQUE AUTO_INCREMENT,
    nom_categorie VARCHAR(50) NOT NULL UNIQUE,
    PRIMARY KEY(id_categorie)
);

-- TABLE VILLES
DROP TABLE IF EXISTS villes;
CREATE TABLE IF NOT EXISTS villes (
    id_ville INT NOT NULL UNIQUE AUTO_INCREMENT,
    nom_ville VARCHAR(50) NOT NULL UNIQUE,
    PRIMARY KEY(id_ville)
);

-- TABLE SPÉCIALITÉS
DROP TABLE IF EXISTS specialites;
CREATE TABLE IF NOT EXISTS specialites (
    id_specialite INT NOT NULL UNIQUE AUTO_INCREMENT,
    nom_specialite VARCHAR(50) NOT NULL UNIQUE,
    id_categorie INT NOT NULL,
    PRIMARY KEY(id_specialite),
    CONSTRAINT specialite_fk FOREIGN KEY(id_categorie) REFERENCES categories(id_categorie)
);

-- TABLE ARTISANS
DROP TABLE IF EXISTS artisans;
CREATE TABLE IF NOT EXISTS artisans (
    id_artisan INT NOT NULL UNIQUE AUTO_INCREMENT,
    nom_artisan VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    a_propos TEXT(500), 
    note DECIMAL(2,1) NOT NULL,
    site_web VARCHAR(255) UNIQUE,
    top_mois BOOLEAN, 
    id_ville INT NOT NULL,
    id_specialite INT NOT NULL,
    PRIMARY KEY(id_artisan),
    CONSTRAINT artisan_fk1 FOREIGN KEY(id_ville) REFERENCES villes(id_ville),
    CONSTRAINT artisan_fk2 FOREIGN KEY(id_specialite) REFERENCES specialites(id_specialite)
);