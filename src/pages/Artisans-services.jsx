import Card from "../components/card";
import photoArtisan from "../artisan.jpg";
import { useQuery } from "react-query";

const getArtisan = async () =>
    fetch('http://localhost:5000/api/artisans/categories/3')
    .then((res) => res.json())


const Services = () => {
    const {data, isLoading} = useQuery({
                queryFn: getArtisan,
                queryKey: ['artisans'],
            });
        if(isLoading) {
            return <div>Loading...</div>
        }
    
    return (
        <div className="body">
            <div className="title">
                <div className="lineh1"></div>
                <h1>Vos artisans dans le service</h1>
            </div>
            <div className="row">
            {
                data?.map(artisan => (
                    <Card className="col-md-4" imageLink={photoArtisan} nomArtisan={artisan.nom_artisan} specialite={artisan.specialite['nom_specialite']} localisation={artisan.Ville['nom_ville']} idArtisan={artisan.id_artisan} />
                ))
            }
            </div>
        </div>
    )
}

export default Services;