const Card = (props) => {
    return (
        <div className="col-sm-4">
            <div className="card">
                <img src={props.imageLink} class="card-img-top" alt={props.nomArtisan} />
                <div class="card-body">
                    <h5 className="card-title">{props.nomArtisan}</h5>
                    <p className="card-text">
                    <i class="bi bi-heart"></i> {props.specialite}
                    </p>
                    <p className="card-text">
                    <i class="bi bi-geo-alt"></i> {props.localisation}
                    </p>
                    <a href="#!" class="btn">Découvrir</a>
                </div>
            </div>
        </div>
    );
}

export default Card;