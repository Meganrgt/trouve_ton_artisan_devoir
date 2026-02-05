
const Card = (props) => {
    return (
        <div className="col-lg-3 col-md-4">
            <div className="card">
                <img src={props.imageLink} className="card-img-top" alt={props.nomArtisan} />
                <div class="card-body">
                    <h5 className="card-title">{props.nomArtisan}</h5>
                    <div className="card-text">
                    <div data-coreui-read-only="true" data-coreui-toggle="rating" data-coreui-value="3"></div>
                    </div>   
                    <p className="card-text">
                        <i className="bi bi-heart"></i> {props.specialite}
                    </p>
                    <p className="card-text">
                        <i className="bi bi-geo-alt"></i> {props.localisation}
                    </p>
                    <p className="text-end">
                        <a href={`/artisan/${props.idArtisan}`} className="btn">Découvrir</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Card;