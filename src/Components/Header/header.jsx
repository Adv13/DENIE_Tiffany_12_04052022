import { Link } from "react-router-dom";
import Logo from '../../assets/logo.png'
import { useLocation } from "react-router-dom";


function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="logo"></img>
      </div>
      <nav className="links">
        {useLocation().pathname === "/" ? (
          <Link className="homeLink active" to="/">
            Accueil
          </Link>
        ) : (
          <Link className="homeLink" to="/">
            Accueil
          </Link>
        )}
        {useLocation().pathname === "/profile" ? (
          <Link className="profileLink active" to="/profile">
            Profil
          </Link>
        ) : (
          <Link className="profileLink" to="/profile">
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
    </header>
  );
}

export default Header;