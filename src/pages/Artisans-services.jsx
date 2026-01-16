import Card from "../components/card";
import artisan from "../artisan.jpg";

const Services = () => {
    return (
        <div className="body">
            <div className="title">
                <div className="lineh1"></div>
                <h1>Vos artisans dans le service</h1>
            </div>
            <div className="row">
                <Card className="col-lg-3" imageLink={artisan} nomArtisan="Nom artisan" specialite="Boulanger" localisation="Lyon" />
                <Card className="col-lg-3" imageLink={artisan} nomArtisan="Nom artisan" specialite="Boulanger" localisation="Lyon" />
                <Card className="col-md-3" imageLink={artisan} nomArtisan="Nom artisan" specialite="Boulanger" localisation="Lyon" />
                <Card className="col-lg-3" imageLink={artisan} nomArtisan="Nom artisan" specialite="Boulanger" localisation="Lyon" />
            </div>
        </div>
    )
}

export default Services;