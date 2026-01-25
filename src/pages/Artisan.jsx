import artisan from "../artisan.jpg";
import ImageEmail from "../assets/undraw_email.svg"

const Artisan = () => {
    return (
        <div>
            <div className="body">
                <div className="row">
                    <div className="col-md-4">
                        <img src={artisan} class="card-img-top" alt="artisan"/>
                    </div>
                    <div className="col-md-8">
                        <div className="lineh1"></div>
                        <h1>Fiche Artisan</h1>
                        <div data-coreui-read-only="true" data-coreui-toggle="rating" data-coreui-value="3"></div>
                        <p className="card-text">
                            <i class="bi bi-heart"></i> Spécialité
                        </p>
                        <p className="card-text">
                            <i class="bi bi-geo-alt"></i> Localisation
                        </p>
                    </div>
                </div> 
                <div>
                    <div className="lineh2-blue"></div>
                    <h2>A propos</h2>
                    <p>description</p>
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