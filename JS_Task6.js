document.addEventListener('DOMContentLoaded', function () {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('loginButton');

    loginButton.addEventListener('click', function () {
        const username = usernameInput.value;
        const password = passwordInput.value;

        // Basic client-side validation (replace with server-side validation)
        if (username === 'your_username' && password === 'your_password') {
            alert('Logged in successfully!');
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
});
