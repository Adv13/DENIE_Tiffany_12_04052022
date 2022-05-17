import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png'
import { useLocation } from "react-router-dom";


function Header() {
  return (
    <header className="header">
      <div className="row align-items-center justify-content-between pt-3">
      <div className="logo col-2 ps-5">
        <img src={Logo} alt="logo"></img>
      </div>
      <nav className="links col-8 d-flex flex-row justify-content-around">
        {useLocation().pathname === "/" ? (
          <Link className="homeLink active" to="/">
            Accueil
          </Link>
        ) : (
          <Link className="homeLink" to="/">
            Accueil
          </Link>
        )}
        {useLocation().pathname === "/dashboard/:id" ? (
          <Link className="dashboardLink active" to="/dashboard/:id">
            Profil
          </Link>
        ) : (
          <Link className="dashboardLink" to="/dashboard/:id">
            Profil
          </Link>
        )}
        {useLocation().pathname === "/settings" ? (
          <Link className="settings active" to="/settings">
            Réglages
          </Link>
        ) : (
          <Link className="settings" to="/settings">
            Réglages
          </Link>
        )}
        {useLocation().pathname === "/community" ? (
          <Link className="community active" to="/community">
            Communauté
          </Link>
        ) : (
          <Link className="community" to="/community">
            Communauté
          </Link>
        )}
      </nav>
      </div>
    </header>
  );
}

export default Header;