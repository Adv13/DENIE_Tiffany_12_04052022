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
        {useLocation().pathname === "/dashboard/12" ? (
          <Link className="dashboardLink active" to="/dashboard/12">
            Profil 12
          </Link>
        ) : (
          <Link className="dashboardLink" to="/dashboard/12">
            Profil 12
          </Link>
        )}
        {useLocation().pathname === "/dashboard/18" ? (
          <Link className="settings active" to="/dashboard/18">
            Profil 18
          </Link>
        ) : (
          <Link className="settings" to="/dashboard/18">
            Profil 18
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