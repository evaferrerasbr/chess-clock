import logo from '../images/logo.png';
import '../stylesheets/Header.scss';

function Header() {
  return (
    <header className="Header">
      <img className="Header__img" src={logo} alt="Logo" />
    </header>
  );
}

export default Header;
