import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import Batiment from "./pages/Artisans-batiment";
import Services from "./pages/Artisans-services";
import Fabrication from "./pages/Artisans-fabrication";
import Alimentation from "./pages/Artisans-alimentation";
import Mentions from "./pages/Mentions-legales";
import DonneesPersonnelles from "./pages/Donnees-personnelles";
import Accessibilite from "./pages/Accessibilite";
import Cookies from "./pages/Politique-cookies";
import Logo from "./Logo.png";
import Artisan from "./pages/Artisan"
import Page404 from "./pages/404"


class App extends React.Component {
  render() {
    return(
      <div className="App">
        <nav className="navbar navbar-expand-lg shadow">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
            <img src={Logo} alt="Logo" width="150" className="d-inline-block align-text-top"/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <Link className="menu nav-link" to="/batiment">Bâtiment</Link>
                <Link className="menu nav-link" to="/services">Services</Link>
                <Link className="menu nav-link" to="/fabrication">Fabrication</Link>
                <Link className="menu nav-link" to="/alimentation">Alimentation</Link>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2 search" type="search" placeholder="Rechercher" aria-label="Search"/>
              </form>
            </div>
          </div>
        </nav>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/batiment" element={<Batiment/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/fabrication" element={<Fabrication/>}></Route>
        <Route path="/alimentation" element={<Alimentation/>}></Route>
        <Route path="/mentions-legales" element={<Mentions/>}></Route>
        <Route path="/donnees-personnelles" element={<DonneesPersonnelles/>}></Route>
        <Route path="/accessibilite" element={<Accessibilite/>}></Route>
        <Route path="/politiques-cookies" element={<Cookies/>}></Route>
        <Route path="/artisan" element={<Artisan/>}></Route>
        <Route path="/404" element={<Page404/>}></Route>
      </Routes>
      <footer className="row">
        <div className="col-md-4 ps-5">
          <h4>Lyon</h4>
          <address>
            <p>101 cours Charlemagne</p>
            <p>CS 20033</p>
            <p>69269 LYON CEDEX 02</p>
            <p>France</p>
            <Link ClassName="nav-link text-white" to="tel:0426734000">+33 (0)4 26 73 40 00</Link>
          </address>
        </div>
        <ul className="nav col-md-8 align-self-center justify-content-evenly">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/mentions-legales">Mentions légales</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/donnees-personnelles">Données personnelles</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/accessibilite">Accessibilité</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link text-white" to="/politiques-cookies">Politiques des cookies</Link>
          </li>
        </ul>
      </footer>
    </div>
    )
  }
}

export default App;
