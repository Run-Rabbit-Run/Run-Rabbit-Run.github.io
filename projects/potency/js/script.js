'use strict';

// Слайдер
(function () {
  $(document).ready(function () {
    $('.slider__wrapper').slick({
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 7000
    });
  });
})();

// Поле ввода телефона
(function () {
  var phoneMask = IMask(
      document.getElementById('tel'), {
        mask: '+{7}(000)000-00-00'
      });
})();

// Таймер
(function () {
  $(function(){

    var note = $('#note'),
      ts = new Date(2020, 0, 1),
      newTime = true;

    if((new Date()) > ts){
      ts = (new Date()).getTime() + 1*12*59*60*1000;
      newTime = false;
    }

    $('#countdown').countdown({
      timestamp	: ts
    });
  });
})();
