var buttonCatalog = document.querySelector(".catalog");
var subMenu = document.querySelector(".flex-bottom");
var search = document.querySelector("input[type='search']");
var searchButton = document.querySelector("input[name='Найти']");
var plusButton = document.querySelector(".plus");

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

var itemImage = document.querySelectorAll(".item-img-wrapper");

for (var i = 0; i < itemImage.length; i++) {
  itemImage[i].addEventListener("mouseover", function () {
    var inCart = this.querySelector(".in-cart");
    var itemCompare = this.querySelector(".item-compare");
    var itemImageOpacity = this.querySelector(".item-img");

    inCart.style.display = 'block';
    itemCompare.style.display = 'block';
    itemImageOpacity.classList.add("js-item-image-hover");  
  });
  itemImage[i].addEventListener("mouseout", function () {
    var inCart = this.querySelector(".in-cart");
    var itemCompare = this.querySelector(".item-compare");
    var itemImageOpacity = this.querySelector(".item-img");

    inCart.style.display = 'none';
    itemCompare.style.display = 'none';
    itemImageOpacity.classList.remove("js-item-image-hover");  
  });
}