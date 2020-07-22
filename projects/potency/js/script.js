'use strict';

(function () {
  $(document).ready(function(){
    $('.slider__wrapper').slick({
      adaptiveHeight: true,
      // autoplay: true,
      // autoplaySpeed: 8000
    });
  });
})();

(function () {
  var phoneMask = IMask(
    document.getElementById('tel'), {
      mask: '+{7}(000)000-00-00'
    });
})();
