import logo from "../../assets/img/logo.svg";
import "./styles.css";
function Header() {
  return (
    <header>
      <div className="dsmetta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por
          <a href="https://www.instagram.com/ewdemy/" target="_blank">
            @ewdemy
          </a>
        </p>
      </div>
    </header>
  );
}

export default Header;
