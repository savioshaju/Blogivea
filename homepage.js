document.getElementById('logoutButton').addEventListener('click', function (e) {
    e.preventDefault();
    localStorage.removeItem('authToken');
    sessionStorage.removeItem('authToken');
    window.location.href = './index.html';
});