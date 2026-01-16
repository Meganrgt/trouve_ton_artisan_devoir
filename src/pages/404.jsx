import Image404 from "../assets/undraw_page-not-found.svg"
const Page404 = () => {
    return (
        <div className="body">
            <div className="lineh1"></div>
            <h1>Page non trouvée</h1>
            <div className="text-center"> 
                <img src={Image404} alt="Logo" width="300"className="d-inline-block align-text-top mb-5"/>
                <p className="h3 mb-3">La page que vous demandez n'exsite pas</p>
                <a href="/" class="btn">Retourner à la page d'accueil</a>
            </div>
            
        </div>
    )
}

export default Page404;