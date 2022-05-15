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

const countryFilters = document.querySelector(".country-filters__modal");
const countryFiltersToggle = document.querySelector(".country-filters__toggle");

countryFilters.classList.remove("country-filters__modal--nojs");

countryFiltersToggle.addEventListener('click', function () {
  if (countryFilters.classList.contains("country-filters__modal--opened")) {
    countryFilters.classList.remove("country-filters__modal--opened");
    countryFilters.classList.add("country-filters__modal--closed");
  } else {
    countryFilters.classList.remove("country-filters__modal--closed");
    countryFilters.classList.add("country-filters__modal--opened");
  }
});
