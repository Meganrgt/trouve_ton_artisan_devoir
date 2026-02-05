import photoArtisan from "../artisan.jpg";
import ImageEmail from "../assets/undraw_email.svg";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";




const Artisan = () => {
    
    const {id} = useParams();
    const getArtisan = async () =>
        fetch(`http://localhost:5000/api/artisans/${id}`)
        .then((res) => res.json())

    console.log(id);
    
    const {data, isLoading} = useQuery({
                queryFn: getArtisan,
                queryKey: ['artisans'],
            });
        if(isLoading) {
            return <div>Loading...</div>
        }


    return (
        <div>
            <div className="body">
                <div className="row">
                    <div className="col-md-4">
                        <img src={photoArtisan} class="card-img-top" alt="artisan"/>
                    </div>
                    <div className="col-md-8">
                        <div className="lineh1"></div>
                        <h1>{data.nom_artisan}</h1>
                        <div data-coreui-read-only="true" data-coreui-toggle="rating" data-coreui-value="3"></div>
                        <p className="card-text">
                            <i class="bi bi-heart"></i> {data.specialite['nom_specialite']}
                        </p>
                        <p className="card-text">
                            <i class="bi bi-geo-alt"></i> {data.Ville['nom_ville']}
                        </p>
                    </div>
                </div> 
                <div>
                    <div className="lineh2-blue"></div>
                    <h2>A propos</h2>
                    <p>{data.a_propos}</p>
                </div>
            </div>
            <div className="contact-form">
                <div className="body-contact">
                    <div className="lineh2-green"></div>
                    <h2>Contactez l'artisan</h2>
                    <div className="row">
                        <div className="form col-lg-8 col-md-12">
                            <div class="form-floating mb-3 col-6">
                                <input type="text" class="form-control" id="floatingName" placeholder="John Doe" required/>
                                <label for="floatingName">Nom</label>
                            </div>
                            <div class="form-floating mb-3 col-6">    
                                <input type="email" class="form-control" id="floatingEmail" placeholder="name@example.com" required />
                                <label for="floatingEmail">Email</label>
                            </div>
                            <div class="form-floating col-8">
                                <textarea class="form-control" placeholder="Leave a comment here" style={{height: "100px"}} id="floatingTextarea2" required ></textarea>
                                <label for="floatingTextarea2">Message</label>
                            </div>
                            <div className="col-12 submit">
                                <button class="btn" type="submit">Envoyer</button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <img src={ImageEmail} className="card-img-top img-nomobilecontact" alt="artisan"/>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Artisan;