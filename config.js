let apiUrl;

const isLocalhost = ['localhost', '127.0.0.1'].includes(location.hostname) || location.hostname.startsWith('192.168.');

if (isLocalhost) {
  //apiUrl = 'http://localhost:3000';
  apiUrl = 'https://blogivea-backend.onrender.com';

}
else {

  apiUrl = 'https://blogivea-backend.onrender.com';


}

(function checkAuthToken() {
  const token = localStorage.getItem('authToken');
  if (window.location.pathname.includes('loginpage.html')||window.location.pathname.includes('signuppage.html')) return;
  if (!token) return window.location.href = 'loginpage.html';

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const isExpired = payload.exp < Date.now() / 1000;
    if (isExpired) {
      localStorage.clear();
      sessionStorage.clear();
      alert("Session expired. Please login again.");
      window.location.href = 'loginpage.html';
    }
  } catch {
    localStorage.clear();
    window.location.href = 'loginpage.html';
  }
})();
