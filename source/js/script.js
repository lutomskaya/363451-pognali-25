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

const selectButton = document.querySelector(".country-selected__button--whole");
const selectItem = document.querySelector(".country-selected__item--whole");

selectButton.addEventListener('click', function () {
  if (selectItem.classList.contains("country-selected__item--closed")) {
    selectItem.classList.remove("country-selected__item--closed");
    selectItem.classList.add("country-selected__item--opened");
    } else {
      selectItem.classList.remove("country-selected__item--opened");
      selectItem.classList.add("country-selected__item--closed");
    }
});
