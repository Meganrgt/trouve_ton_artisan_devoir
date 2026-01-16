import Card from "../components/card";
import artisan from "../artisan.jpg";

const Alimentation = () => {
    return (
        <div className="body">
            <div className="lineh1"></div>
            <h1>Vos artisans dans l'alimentation</h1>
            <div className="row">
                <Card className="col-md-4" imageLink={artisan} nomArtisan="Nom artisan" specialite="Boulanger" localisation="Lyon" />
                <Card className="col-md-4" imageLink={artisan} nomArtisan="Nom artisan" specialite="Boulanger" localisation="Lyon" />
                <Card className="col-md-4" imageLink={artisan} nomArtisan="Nom artisan" specialite="Boulanger" localisation="Lyon" />
            </div>
        </div>
    )
}

export default Alimentation;