
let apiUrl;

if (location.hostname === 'localhost') {
  apiUrl = 'http://localhost:3000';
} else {
  apiUrl = 'https://blogivea-backend.onrender.com';
}
