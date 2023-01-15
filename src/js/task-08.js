const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', event => {
   event.preventDefault();

   const { elements: { email, password } } = event.currentTarget;

   if (email.value === '' || password.value === '') {
alert('Усі поля повинні бути заповнені!')
   } else if (email.value.length && password.value.length >= 1) {
   const values = {
      email: email.value,
      password: password.value
      }
   console.log(values);
   }
   event.currentTarget.reset();
})





