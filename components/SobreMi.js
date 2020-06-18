import '../scss/sobre-mi.scss';

export const SobreMi = () => {
  return (
    <main class='main'>
      <section id='sobre-mi' class='perfil'>
        <h2 class='perfil__title-me'>¿Quién Soy?</h2>
        <article class='perfil__description-me'>
          <p class='perfil__text-me'>
            ¡Hola! 👋 <br /> <strong>Me llamo Damián Vigo y soy Frontend Developer de Buenos Aires Argentina.</strong>
            <br />
            Actualmente me encuentro mejorando mis conocimientos en tecnologías <em>frontend</em>y aprendiendo algunas cosas sobre
            <em>backend.</em>
            Apasionado por la tecnología, el código, el deporte y el diseño.
          </p>
        </article>
      </section>

      <article class='skills'>
        <h2 class='skills__title'>Habilidades</h2>
        <div class='skills-container'>
          <ul>
            <li class='html'>HTML</li>
            <li class='css'>CSS-SASS-STYLUS-LESS</li>
            <li class='js'>JavaScript</li>
            <li class='angular'>Angular</li>
            <li class='react'>React</li>
            <li class='next'>NextJs</li>
            <li class='vue'>VueJs</li>
          </ul>
        </div>
      </article>

      <div class='cite-container'>
        <article class='cite-container__cite'>
          <h2 class='cite-container__davinci'>
            « La simplicidad es la máxima sofisticación » <cite>Leonardo Da Vinci</cite>
          </h2>
        </article>
      </div>
    </main>
  );
};
