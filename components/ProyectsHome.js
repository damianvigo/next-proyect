import '../scss/proyects-home.scss';

export const ProyectsHome = () => {
  return (
    <React.Fragment>
      <div class='main-title-proyects'>
        <h2 class='main-title-proyects__title'>Proyectos</h2>
      </div>

      <div class='container'>
        <section class='main-proyects'>
          <article class='main-proyects__container main-proyects__flex-order-1'>
            <h2 class='main-proyects__title'>Restaurante</h2>
            <p class='main-proyects__description'>
              Diseño Responsive <br /> con efecto parallax. <br /> Construido con HTML5 SASS
              <br /> JavaScript y JQuery
            </p>
            <a class='main-proyects__repo--git' href=''>
              <i class='fa fa-github'></i>
            </a>
            <a class='main-proyects__repo--globe' href='https://tech-news-damian-vigo.web.app/'>
              <i class='fas fa-globe'></i>
            </a>
          </article>
          <article class='main-proyects__mockup'>
            <figure class='main-proyects__thumbnail'>
              <img
                class='main-proyects__img'
                src='/static/images/mockup-cafe.jpg'
                loading='lazy'
                title='Café'
                alt='Sitio web de una Cafetería'
              />
            </figure>
          </article>
        </section>

        <section class='main-proyects'>
          <article class='main-proyects__container'>
            <h2 class='main-proyects__title'>Portal de noticias geek</h2>
            <p class='main-proyects__description'>
              Construido con HTML5 - SASS <br />y Vanilla JavaScript
            </p>
            <a class='main-proyects__repo--git' href='https://github.com/damianvigo/tech-news' target='_blank' rel='noopener'>
              <i class='fa fa-github'></i>
            </a>
            <a class='main-proyects__repo--globe' href='https://tech-news-damian-vigo.web.app/' target='_blank' rel='noopener'>
              <i class='fas fa-globe'></i>
            </a>
          </article>
          <article class='main-proyects__mockup'>
            <figure class='main-proyects__thumbnail'>
              <img
                class='main-proyects__img'
                src='/static/images/technews-mockup.jpg'
                loading='lazy'
                title='tech-news'
                alt='Un portal de noticias de tecnología hecho con HTML5, CSS3 y JavaScript'
              />
            </figure>
          </article>
        </section>
      </div>

      <article class='container-button'>
        <button class='button'>
          Más Proyectos
          <span class='button__span'></span>
        </button>
      </article>
    </React.Fragment>
  );
};
