import Card from "../components/card";
import artisan from "../artisan.jpg";
import ImageHeader from "../assets/undraw_location-search_nesh.svg";


const Home = () => {
    return (
        <div>
            <div id="HomeHeader" className="row">
                <div className="col-md-4">
                    <img src={ImageHeader} alt="Logo" width="300"className="d-inline-block align-text-top"/>
                </div>    
                <div className="col-md-8">
                    <h1>Comment trouver mon artisan ?</h1>
                    <ol className="h3">
                        <li>Choisir la catégorie d'artisanat dans le menu</li>
                        <li>Choisir un artisan</li>
                        <li>Le contacter via le formulaire de contact</li>
                        <li>Une réponse sera apportée sous 48h</li>
                    </ol>
                </div>     
            </div>
            <div>
                <h2>Les artisans du mois</h2>
                <div className="row">
                <Card className="col-md-4" imageLink={artisan} nomArtisan="Nom artisan" specialite="Boulanger" localisation="Lyon" />
                <Card className="col-md-4" imageLink={artisan} nomArtisan="Nom artisan" specialite="Boulanger" localisation="Lyon" />
                <Card className="col-md-4" imageLink={artisan} nomArtisan="Nom artisan" specialite="Boulanger" localisation="Lyon" />
                </div>
            </div>
            
        </div>
    )
}

export default Home;