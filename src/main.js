const ref = {
  orderBtn: document.querySelector('[data-order-btn]'),
  orderForm: document.querySelector('[data-order-form]'),
};
const submitForm = e => {
  e.preventDefault();
  ref.orderForm.reset();
};
ref.orderForm.addEventListener('submit', submitForm);
