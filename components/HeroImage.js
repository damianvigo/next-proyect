import '../scss/hero-image.scss';

const HeroImage = () => {
  return (
    <section class='hero-image'>
      <div class='hero-image__transparent'>
        <div class='hero-image__perfil'>
          <h1 class='hero-image__title'>Hola, soy Damián Vigo</h1>
          <h2 class='hero-image__subtitle'>Desarrollador Web</h2>
          <figure class='hero-image__img-perfil'>
            <img class='hero-image__img-perfil--img' src='../static/images/yo.jpg' alt='' />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default HeroImage;
