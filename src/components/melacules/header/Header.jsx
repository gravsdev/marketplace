import { Link } from "react-router-dom";

import HamburgerMenu from "../../atoms/hamburger-menu/HamburgerMenu";
import {
  HomeSmileOutline,
  SearchOutline,
  WindowFrameOutline,
} from "../../atoms/icons";
import { useAnimationStore } from "../../../storage/animations";
import logotipo from "/novacors.svg";

import "./header.css";

function Header() {
  const menuVisible = useAnimationStore((state) => state.menuVisible);

  return (
    <div id="root-header">
      <div className="header__container">
        <div className="header__menu">
          <Link to="/" className="logo">
            <img src={logotipo} alt="Novacors" />
          </Link>

          <Link to="#templates" className="link">
            <span>Plantillas</span>
          </Link>

          <Link to="#systems" className="link">
            <span>Sistemas</span>
          </Link>
        </div>

        <div className="header__seeker">
          <input type="text" placeholder="Buscar" />
          <button>
            <SearchOutline className="icon" />
          </button>
        </div>

        <div className="header__menu">
          <Link to="/sign-in" className="link">
            <span>Iniciar sesión</span>
          </Link>

          <Link to="/sign-up" className="simple-button">
            <span>Registrarse</span>
          </Link>

          <HamburgerMenu className="hamburger-menu" />
        </div>

        {/* Vista pantalla adaptable */}
        <div id="root-sidebar" className={menuVisible ? "" : "sidebar-hidden"}>
          <div className="sidebar__header">
            <Link to="/sign-in" className="simple-button outline">
              <span>Iniciar sesión</span>
            </Link>

            <Link to="/sign-up" className="simple-button">
              <span>Registrarse</span>
            </Link>
          </div>

          <div className="sidebar__menu">
            <Link to="/" className="link-button active">
              <HomeSmileOutline className="icon" />
              <span>Inicio</span>
            </Link>

            <Link to="#templates" className="link-button">
              <WindowFrameOutline className="icon" />
              <span>Plantillas</span>
            </Link>

            <Link to="#systems" className="link-button">
              <span>Sistemas</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
