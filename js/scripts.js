document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.querySelector('.password-container input');
    const passwordIcon = document.querySelector('.password-container .password-icon');
  
    passwordIcon.addEventListener('click', () => {
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordIcon.classList.remove('fa-eye');
        passwordIcon.classList.add('fa-eye-slash');
      } else {
        passwordInput.type = 'password';
        passwordIcon.classList.remove('fa-eye-slash');
        passwordIcon.classList.add('fa-eye');
      }
    });
});
