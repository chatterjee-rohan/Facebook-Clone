document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.querySelector('.btn-li');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const passwordCriteria = document.createElement('p');
    passwordCriteria.style.color = 'red';
    passwordCriteria.style.fontSize = '12px';
    passwordCriteria.style.display = 'none';
    passwordCriteria.textContent = 'Password must be at least 8 characters long and contain letters, numbers, and special characters.';
    passwordInput.parentNode.appendChild(passwordCriteria);

    loginButton.addEventListener('click', function (event) {
        event.preventDefault();

        const email = emailInput.value;
        const password = passwordInput.value;

        if (!isValidPassword(password)) {
            passwordCriteria.style.display = 'block';
        }
        else {
            passwordCriteria.style.display = 'none';
            alert('Logging in with Email: ' + email);
        }
    });

    function isValidPassword(password) {
        const minLength = 8;
        const hasLetter = /[a-zA-Z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%&*,.?":|]/.test(password);

        return password.length >= minLength && hasLetter && hasNumber && hasSpecialChar;
    }
});
