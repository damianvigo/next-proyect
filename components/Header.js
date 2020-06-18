import '../scss/header.scss';
import '../scss/button-dark-mode.scss';

const Header = () => {
  return (
    <header class='header'>
      <a href='' class='header__logo'>
        DV
      </a>
      <nav class='haeder__menu'>
        <ul class='header__menu-ul'>
          <li class='header__menu-li'>
            <a class='header__menu-a' href='./pages/proyects.html'>
              Proyectos
            </a>
          </li>
          <li class='header__menu-li'>
            <a class='header__menu-a' href='#sobre-mi'>
              Sobre Mi
            </a>
          </li>
          <li class='header__menu-li'>
            <a class='header__menu-a' href='./pages/contact.html'>
              Hablemos
            </a>
          </li>
        </ul>
      </nav>
      <button class='switch' id='switch'>
        <span class='switch__span'>
          <i class='fas fa-sun switch__icon--sun'></i>
        </span>
        <span class='switch__span'>
          <i class='fas fa-moon switch__icon--moon'></i>
        </span>
      </button>
    </header>
  );
};

export default Header;
