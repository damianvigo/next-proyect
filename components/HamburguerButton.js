import '../scss/hamburguer-button.scss';

const HamburguerButton = () => {
  return (
    <React.Fragment>
      <aside class='panel'>
        <nav class='panel__menu'>
          <a class='panel__menu-a' href='./pages/proyects.html'>
            Proyectos
          </a>
          <a class='panel__menu-a' href='#sobre-mi'>
            Sobre Mi
          </a>
          <a class='panel__menu-a' href='#'>
            Conectemos
          </a>
        </nav>
      </aside>

      <button class='panel-btn hamburger hamburger--vortex' type='button'>
        <span class='hamburger-box'>
          <span class='hamburger-inner'></span>
        </span>
      </button>
    </React.Fragment>
  );
};

export default HamburguerButton;
