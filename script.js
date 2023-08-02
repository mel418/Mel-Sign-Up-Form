document.addEventListener('DOMContentLoaded', function () {
    const inputContainers = document.querySelectorAll('.input-container');
    
    inputContainers.forEach(container => {
      const span = container.querySelector('span');
      const input = container.querySelector('input');
      
      span.addEventListener('click', function () {
        input.focus();
      });
    });
    
    const passwordInput = document.querySelector('.user-password');
    const confirmPasswordInput = document.querySelector('.confirm-password');
    const passwordError = document.querySelector('.password-error');
    const signUpButton = document.querySelector('button');
    
    confirmPasswordInput.addEventListener('input', function () {
      if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordInput.setCustomValidity("Passwords do not match!");
        passwordError.textContent = "Passwords do not match!";
      } else {
        confirmPasswordInput.setCustomValidity('');
        passwordError.textContent = '';
      }
    });
    
    signUpButton.addEventListener('click', function () {
      if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordInput.setCustomValidity("Passwords do not match!");
        passwordError.textContent = "Passwords do not match!";
      } else {
        confirmPasswordInput.setCustomValidity('');
        passwordError.textContent = '';
      }
    });
  });   