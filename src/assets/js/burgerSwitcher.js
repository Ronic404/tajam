export default function burgerSwitcher() {
  const NAV_CONTENT = document.querySelector('.navbar-collapse');
  const NAV_BUTTON = document.querySelector('.navbar-toggler');
  const NAV_ITEMS = document.querySelectorAll('.nav-item');
  const BURGER = document.querySelector('.burger');
  const HOME_PAGE_DESCRIPRION = document.querySelector('.home-page__description');

  NAV_BUTTON.addEventListener('click', () => {
    if (!NAV_CONTENT.classList.contains('collapsing')) {
      BURGER.classList.toggle('burger_active');
      HOME_PAGE_DESCRIPRION.classList.toggle('home-page__description_active');
    }
  });

  NAV_ITEMS.forEach((item) => {
    item.addEventListener('click', () => {
      BURGER.classList.remove('burger_active');
      NAV_CONTENT.classList.remove('show');
    });
  });
}
