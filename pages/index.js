//@ts-check

// Переменные
// Mobile - Модальное окно "Меню 1 ур"
const buttonHeaderMenu = document.querySelector('.header__button-menu');
const popup = document.querySelector('.popup');
const headerMenuMobile = document.querySelector('.header_menu_mobile');
const buttonHeaderMenuClose = document.querySelector('.popup__button-close');

// Mobile - Модальное окно "Меню Фонд 2.1 ур"
const linkFund = document.querySelector('.fund');
const headerFundMobile = document.querySelector('.header_fund_mobile');
const buttonBackFund = document.querySelector('.back_fund');

// Mobile - Модальное окно "Меню Программы 2.2 ур"
const linkPrograms = document.querySelector('.programs');
const headerProgramsMobile = document.querySelector('.header_programs_mobile');
const buttonBackPrograms = document.querySelector('.back_programs');


// Функции Универсальные
function openPopup(popup) {
  popup.classList.add('popup_opened');
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
};

function togglePopup(popup) {
  popup.classList.toggle('popup_opened');
};


// Слушатели событий
// Mobile - Модальное окно "Меню 1 ур"
buttonHeaderMenu.addEventListener('click', () => {
  openPopup(headerMenuMobile);
});

buttonHeaderMenuClose.addEventListener('click', () => {
  closePopup(headerMenuMobile);
});

// Mobile - Модальное окно "Меню Фонд 2.1 ур"
linkFund.addEventListener('click', () => {
  openPopup(headerFundMobile);
});

buttonBackFund.addEventListener('click', () => {
  closePopup(headerFundMobile);
});

// Mobile - Модальное окно "Меню Программы 2.2 ур"
linkPrograms.addEventListener('click', () => {
  openPopup(headerProgramsMobile);
});

buttonBackPrograms.addEventListener('click', () => {
  closePopup(headerProgramsMobile);
});
