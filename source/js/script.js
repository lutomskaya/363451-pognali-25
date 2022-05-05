const mainHeader = document.querySelector(".main-header");

const mainToggle = document.querySelector(".main-header__toggle");

mainToggle.addEventListener('click', function () {
  mainHeader.classList.remove("main-header--nojs");
  mainHeader.classList.toggle('main-header--opened');
});
