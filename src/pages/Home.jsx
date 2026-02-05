import Card from "../components/card";
import photoArtisan from "../artisan.jpg";
import ImageHeader from "../assets/undraw_location-search_nesh.svg";
import { useQuery } from "react-query";

const getArtisan = async () =>
    fetch('http://localhost:5000/api/artisans/top_mois/ok')
    .then((res) => res.json())


const Home = () => {

     const {data, isLoading} = useQuery({
            queryFn: getArtisan,
            queryKey: ['artisans'],
        });
    if(isLoading) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <header id="HomeHeader" className="row">
                <div className="col-md-4">
                    <img src={ImageHeader} alt="Logo" width="300"className="img-nomobile"/>
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
            </header>
            <div className="body">
                <div className="lineh2-blue"></div>
                <h2>Les artisans du mois</h2>
                <div className="row">
                {
                data?.map(artisan => (
                    <Card className="col-md-4" imageLink={photoArtisan} nomArtisan={artisan.nom_artisan} specialite={artisan.specialite['nom_specialite']} localisation={artisan.Ville['nom_ville']} idArtisan={artisan.id_artisan} />
                ))
            }
                </div>
            </div>
            
        </div>
    )
}

export default Home;