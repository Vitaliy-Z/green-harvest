const ref = {
  orderBtn: document.querySelector('[data-order-btn]'),
  orderForm: document.querySelector('[data-order-form]'),
};
const submitForm = e => {
  e.preventDefault();
  alert('Ваша коментар доданий');
  ref.orderForm.reset();
};
ref.orderBtn.addEventListener('click', submitForm);
