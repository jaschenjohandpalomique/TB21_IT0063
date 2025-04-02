

document.getElementById('registerButton').addEventListener('click', function () {
    const name = document.getElementById('form3Example1c').value;
    const email = document.getElementById('form3Example3c').value;
    const password = document.getElementById('password').value;
    const repeatPassword = document.getElementById('repeatPassword').value;
    const errorMessage = document.getElementById('errorMessage');
    const emailError = document.getElementById('emailError');

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        emailError.style.display = 'block'; 
        emailError.textContent = 'Please enter a valid email address.';
        return;
    } else {
        emailError.style.display = 'none'; 
    }

    if (password !== repeatPassword) {
        errorMessage.style.display = 'block'; 
        errorMessage.textContent = 'Passwords do not match. Please try again.';
        return;
    } else {
        errorMessage.style.display = 'none'; 
    }

    const generateId = () => {
        const randomSegment = () => Math.floor(1000 + Math.random() * 9000).toString();
        return `${randomSegment()} ${randomSegment()} ${randomSegment()}`;
    };

    const userId = generateId();
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('userId', userId);

    window.location.href = 'profile.html';
});
