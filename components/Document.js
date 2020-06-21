import React, { Component } from 'react';

class DocumentLoaded extends Component {
  componentDidMount() {
    const d = document;
    const w = window;

    function sticky(header) {
      const $head = d.querySelector(header);

      w.addEventListener('scroll', (e) => {
        $head.classList.toggle('sticky', w.scrollY > 0);
      });
    }

    d.addEventListener('DOMContentLoaded', (e) => {
      sticky('.header');
      scrollTopButton('.scroll-top-btn');
      // hamburguerMenu('.panel-btn', '.panel', '.panel__menu-a');
      // scrollTopButton('.scroll-top-btn');
      // darkMode('#switch');
    });

    function scrollTopButton(btn) {
      const $scrollBtn = d.querySelector(btn);

      w.addEventListener('scroll', (e) => {
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

        if (scrollTop > 600) {
          $scrollBtn.classList.remove('hidden');
        } else {
          $scrollBtn.classList.add('hidden');
        }
      });

      d.addEventListener('click', (e) => {
        if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
          w.scrollTo({
            behavior: 'smooth',
            top: 0,
          });
        }
      });
    }
  }

  render() {
    return <div>document</div>;
  }
}

export default DocumentLoaded;
