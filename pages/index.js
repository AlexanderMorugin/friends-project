//@ts-check

// Переменные
// Модальное окно "Меню навигации в header"

const buttonHeaderMenu = document.querySelector('.header__button-menu');
const popup = document.querySelector('.popup');
const headerMenuPopup = document.querySelector('.header_menu_popup');
const buttonHeaderMenuClose = document.querySelector('.popup__button-close');


// Функции Универсальные

function openPopup(popup) {
  popup.classList.add('popup_opened');
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
};


// Слушатели событий
// Модальное окно "Меню навигации в header"

buttonHeaderMenu.addEventListener('click', () => {
  openPopup(headerMenuPopup);
});


buttonHeaderMenuClose.addEventListener('click', () => {
  closePopup(headerMenuPopup);
});

