import { Link } from "react-router-dom";

function Error(){
    return(
    <div className="wrapper d-flex flex-column align-items-center">
    <h1>404</h1>
    <h2>Oups! La page que vous demandez n'existe pas.</h2>
    <div className="err-back">
      <Link className="backlink text-danger" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  </div>
  )
}

export default Error;