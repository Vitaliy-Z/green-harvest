const refs = {
  mobileMenu: document.querySelector('[data-mobile-menu]'),
  openMobileMenuButton: document.querySelector('[data-header-burger-button]'),
  closeMobileMenuButton: document.querySelector(
    '[data-mobile-menu-close-button]'
  ),
  closeMobileMenuButton: document.querySelector(
    '[data-mobile-menu-close-button]'
  ),

  orderBtn: document.querySelector('[data-order-btn]'),
  orderForm: document.querySelector('[data-order-form]'),
};
const submitForm = e => {
  e.preventDefault();
  refs.orderForm.reset();
};
const toggleMobMenu = () => {
  refs.mobileMenu.classList.toggle('is-open');
};
refs.orderForm.addEventListener('submit', submitForm);
refs.openMobileMenuButton.addEventListener('click', toggleMobMenu);
refs.closeMobileMenuButton.addEventListener('click', toggleMobMenu);
