document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simple validation
    if (email && password) {
        alert('Login successful! (This is a demo)');
        window.location.href = '../index.html';
    } else {
        alert('Please fill in all fields');
    }
});