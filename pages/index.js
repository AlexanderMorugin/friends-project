//@ts-check

// Переменные
// Mobile - Модальное окно "Меню 1 ур"
const buttonHeaderMenu = document.querySelector('.header__button-menu');
const popup = document.querySelector('.popup');
const headerMenuMobile = document.querySelector('.header_menu_mobile');
const buttonHeaderMenuClose = document.querySelector('.popup__button-close');

// Mobile - Модальное окно "Фонд 2.1 ур"
const linkFund = document.querySelector('.fund');
const headerFundMobile = document.querySelector('.header_fund_mobile');
const buttonBackHeaderMenu = document.querySelector('.popup__button-back');

// Desktop - Модальное окно "Меню Фонд"


// Функции Универсальные

function openPopup(popup) {
  popup.classList.add('popup_opened');
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
};


// Слушатели событий
// Mobile - Модальное окно "Меню 1 ур"
buttonHeaderMenu.addEventListener('click', () => {
  openPopup(headerMenuMobile);
});

buttonHeaderMenuClose.addEventListener('click', () => {
  closePopup(headerMenuMobile);
});

// Mobile - Модальное окно "Фонд 2.1 ур"
linkFund.addEventListener('click', () => {
  openPopup(headerFundMobile);
});

buttonBackHeaderMenu.addEventListener('click', () => {
  closePopup(headerFundMobile);
});
