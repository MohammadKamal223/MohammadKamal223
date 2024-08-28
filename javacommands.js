
    document.querySelector('form').addEventListener('submit', function(event) {
        var username = document.querySelector('input[name="username"]').value;
        var password = document.querySelector('input[name="password"]').value;

        if (!username || !password) {
            alert("Please enter both username and password.");
            event.preventDefault();  
        }
    });

    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('input[name="password"]');

    togglePassword.addEventListener('change', function () {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
    });
    const inputs = document.querySelectorAll('input');

    inputs.forEach(input => {
        input.addEventListener('focus', function () {
            this.style.backgroundColor = "#e0f7fa";
        });
        input.addEventListener('blur', function () {
            this.style.backgroundColor = "";
        });
    });
    document.addEventListener('animationstart', function(event) {
        if (event.animationName === 'onAutoFillStart') {
            event.target.style.backgroundColor = "#e0f7fa";
        }
    });
    document.addEventListener('animationend', function(event) {
        if (event.animationName === 'onAutoFillCancel') {
            event.target.style.backgroundColor = "";
        }
    });

  