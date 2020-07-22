'use strict';

(function () {
  var menu = document.querySelector('.header__navigation');
  var menuToggle = document.querySelector('.navigation__button-toggle');

  if (menu) {
    menu.classList.remove('navigation--open');

    menuToggle.onclick = function () {
      if (menu.classList.contains('navigation--open')) {
        menu.classList.remove('navigation--open');
      } else {
        menu.classList.add('navigation--open');
        menuToggle.style.opacity = '1';
      }
    };
  }

  var phoneMask = IMask(
      document.getElementById('tel-number'), {
        mask: '00000000000'
      });
})();
