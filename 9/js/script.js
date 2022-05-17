const mainHeader = document.querySelector(".main-header");

const mainToggle = document.querySelector(".main-header__toggle");

mainHeader.classList.remove("main-header--nojs");

mainToggle.addEventListener('click', function () {
  if (mainHeader.classList.contains("main-header--opened")) {
    mainHeader.classList.remove("main-header--opened");
    mainHeader.classList.add("main-header--closed");
  } else {
    mainHeader.classList.remove("main-header--closed");
    mainHeader.classList.add("main-header--opened");
  }
});

const countryFilters = document.querySelector(".country-filters__container");
const countryFiltersToggle = document.querySelector(".country-filters__toggle");

countryFilters.classList.remove(".country-filters__container--nojs");

countryFiltersToggle.addEventListener('click', function () {
  if (countryFilters.classList.contains("country-filters__container--opened")) {
    countryFilters.classList.remove("country-filters__container--opened");
    countryFilters.classList.add("country-filters__container--closed");
  } else {
    countryFilters.classList.remove("country-filters__container--closed");
    countryFilters.classList.add("country-filters__container--opened");
  }
});

const formButton = document.querySelectorAll(".form__title");
const formList = document.querySelectorAll(".form__list");

for (var j = 0; j < formList.length; j++) {
  formList[j].classList.remove("form__list--nojs");
}
