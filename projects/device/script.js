var buttonCatalog = document.querySelector(".catalog");
var subMenu = document.querySelector(".flex-bottom");
var search = document.querySelector("input[type='search']");
var searchButton = document.querySelector("input[name='Найти']");
var plusButton = document.querySelector(".plus");
var sliderButton1 = document.querySelectorAll(".slider-button-1");
var sliderButton2 = document.querySelectorAll(".slider-button-2");
var sliderButton3 = document.querySelectorAll(".slider-button-3");
var slide1 = document.querySelector(".js-slide-1");
var slide2 = document.querySelector(".js-slide-2");
var slide3 = document.querySelector(".js-slide-3");
var slides = [slide1, slide2, slide3];
var delivery = document.querySelector(".js-delivery");
var warranty = document.querySelector(".js-warranty");
var credit = document.querySelector(".js-credit");
var deliveryButton = document.querySelectorAll(".delivery");
var warrantyButton = document.querySelectorAll(".warranty");
var creditButton = document.querySelectorAll(".credit");
var services = [delivery, warranty, credit];
var buttonWriteUs = document.querySelector(".button-contacts");
var writeUs = document.querySelector(".js-popup-write-us");
var mapClick = document.querySelector(".contacts-map");
var mapPopup = document.querySelector(".js-popup-map");
var closePopup = document.querySelectorAll(".modal-close");
var nameFocus = document.querySelector("input[name='name']");
var emailFocus = document.querySelector("input[name='email']");
var feedbackFocus = document.querySelector("textarea[name='letter']");
var itemImage = document.querySelector(".item-img-wrapper");


var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

buttonWriteUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUs.classList.add("js-popup-show");
  if (storage) {
    nameFocus.value = storage;
    emailFocus.value = storage;
    feedbackFocus.focus();
  } else {
    nameFocus.focus();
  }
});

mapClick.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("js-popup-show");
});

for (var i = 0; i <= closePopup.length - 1; i++) {
  closePopup[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUs.classList.remove("js-popup-show");
    mapPopup.classList.remove("js-popup-show");
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("js-popup-show") || writeUs.classList.contains("js-popup-show")) {
      evt.preventDefault();
      writeUs.classList.remove("js-popup-show");
      mapPopup.classList.remove("js-popup-show");
    }
  }
});

buttonCatalog.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (subMenu.classList.contains("js-menu-show")) {
    subMenu.classList.remove("js-menu-show");
  } else {
    subMenu.classList.add("js-menu-show");
  }
});

plusButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (subMenu.classList.contains("js-menu-show")) {
    subMenu.classList.remove("js-menu-show");
  } else {
    subMenu.classList.add("js-menu-show");
  }
});

search.addEventListener("focus", function (evt) {
  evt.preventDefault();
  searchButton.classList.remove("js-search-hide");
  searchButton.classList.add("js-search-show");
});

search.addEventListener("blur", function (evt) {
  evt.preventDefault();
  searchButton.classList.remove("js-search-show");
  searchButton.classList.add("js-search-hide");
});

for (var j = 0; j <= sliderButton1.length - 1; j++) {
  sliderButton1[j].addEventListener("click", function (evt) {
    evt.preventDefault();
    if (!slide1.classList.contains("js-slide-show")) {
      for (var i = 0; i <= slides.length - 1; i++) {
        slides[i].classList.remove("js-slide-show");
      }
      slide1.classList.add("js-slide-show");
    }
  });
}

for (var j = 0; j <= sliderButton2.length - 1; j++) {
  sliderButton2[j].addEventListener("click", function (evt) {
    evt.preventDefault();
    if (!slide2.classList.contains("js-slide-show")) {
      for (var i = 0; i <= slides.length - 1; i++) {
        slides[i].classList.remove("js-slide-show");
      }
      slide2.classList.add("js-slide-show");
    }
  });
}

for (var j = 0; j <= sliderButton3.length - 1; j++) {
  sliderButton3[j].addEventListener("click", function (evt) {
    evt.preventDefault();
    if (!slide3.classList.contains("js-slide-show")) {
      for (var i = 0; i <= slides.length - 1; i++) {
        slides[i].classList.remove("js-slide-show");
      }
      slide3.classList.add("js-slide-show");
    }
  });
}

for (var j = 0; j <= deliveryButton.length - 1; j++) {
  deliveryButton[j].addEventListener("click", function (evt) {
    evt.preventDefault();
    if (!delivery.classList.contains("js-service-show")) {
      for (var i = 0; i <= services.length - 1; i++) {
        services[i].classList.remove("js-service-show");
      }
      delivery.classList.add("js-service-show");
    }
  });
}

for (var j = 0; j <= warrantyButton.length - 1; j++) {
  warrantyButton[j].addEventListener("click", function (evt) {
    evt.preventDefault();
    if (!warranty.classList.contains("js-service-show")) {
      for (var i = 0; i <= services.length - 1; i++) {
        services[i].classList.remove("js-service-show");
      }
      warranty.classList.add("js-service-show");
    }
  });
}

for (var j = 0; j <= creditButton.length - 1; j++) {
  creditButton[j].addEventListener("click", function (evt) {
    evt.preventDefault();
    if (!credit.classList.contains("js-service-show")) {
      for (var i = 0; i <= services.length - 1; i++) {
        services[i].classList.remove("js-service-show");
      }
      credit.classList.add("js-service-show");
    }
  });
}
