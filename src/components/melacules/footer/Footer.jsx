import logotipo from "/novacors.svg";

import "./footer.css";

function Footer(props) {
  return (
    <footer id="root-footer">
      <div className="footer__container">
        <div className="footer--content" style={props.contentStyle}>
          <a href="/" className="logo">
            <img src={logotipo} alt="Novacors" />
          </a>

          <p className="text">© 2023 Novacors. Todos los derechos reservados</p>
        </div>

        <div className="footer__menu">
          <a href="#" className="link">
            <span>Politica de privacidad</span>
          </a>

          <a href="#" className="link">
            <span>Terminos y condiciones</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
