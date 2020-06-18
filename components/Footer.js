import '../scss/footer.scss';

const Footer = () => {
  return (
    <footer class='footer'>
      <section class='footer__social-network'>
        <div class='footer__container-icon'>
          <a href='https://www.facebook.com/ddamianvigo' target='_blank' rel='noopener' class='footer__fb'>
            <i class='fab fa-facebook footer__icon'></i>
          </a>
        </div>
        <div class='footer__container-icon'>
          <a href='https://platzi.com/@Damian' target='_blank' rel='noopener' class='footer__platzi'>
            <i class='fas fa-graduation-cap footer__icon'></i>
          </a>
        </div>
        <div class='footer__container-icon'>
          <a href='https://github.com/damianvigo' target='_blank' rel='noopener' class='footer__github'>
            <i class='fab fa-github footer__icon'></i>
          </a>
        </div>
      </section>
      <div class='footer__author'>
        <p>Damián Vigo &copy; 2020</p>
      </div>
    </footer>
  );
};

export default Footer;
