const refs = {
  mobileMenu: document.querySelector('[data-mobile-menu]'),
  openMobileMenuButton: document.querySelector('[data-header-burger-button]'),
  closeMobileMenuButton: document.querySelector(
    '[data-mobile-menu-close-button]'
  ),
  closeMobileMenuButton: document.querySelector(
    '[data-mobile-menu-close-button]'
  ),
  orderSection: document.querySelector('[data-order-section]'),
  worksSection: document.getElementById('how-it-works'),
  reviewsSection: document.getElementById('reviews'),
  vegetablesSection: document.getElementById('vegetables'),

  shopNowBtn: document.querySelector('[data-btn-shop-now]'),
  shopNowMobMenuBtn: document.querySelector('[data-mob-menu-btn-shop-now]'),

  mobMenuLinkWorks: document.querySelector('[data-mob-menu-link-works]'),
  mobMenuLinkVegetables: document.querySelector(
    '[data-mob-menu-link-vegetables]'
  ),
  mobMenuLinkReviews: document.querySelector('[data-mob-menu-link-reviews]'),

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
const scrollToOrder = () => {
  refs.mobileMenu.classList.remove('is-open');
  refs.orderSection.scrollIntoView();
};
const scrollToWorks = () => {
  refs.mobileMenu.classList.remove('is-open');
  refs.worksSection.scrollIntoView();
};
const scrollToReviews = () => {
  refs.mobileMenu.classList.remove('is-open');
  refs.reviewsSection.scrollIntoView();
};
const scrollToVegetables = () => {
  refs.mobileMenu.classList.remove('is-open');
  refs.vegetablesSection.scrollIntoView();
};

refs.orderForm.addEventListener('submit', submitForm);

refs.openMobileMenuButton.addEventListener('click', toggleMobMenu);
refs.closeMobileMenuButton.addEventListener('click', toggleMobMenu);

refs.shopNowBtn.addEventListener('click', scrollToOrder);
refs.shopNowMobMenuBtn.addEventListener('click', scrollToOrder);

refs.mobMenuLinkWorks.addEventListener('click', scrollToWorks);
refs.mobMenuLinkVegetables.addEventListener('click', scrollToVegetables);
refs.mobMenuLinkReviews.addEventListener('click', scrollToReviews);
