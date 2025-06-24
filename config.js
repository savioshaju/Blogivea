let apiUrl;

const isLocalhost = ['localhost', '127.0.0.1'].includes(location.hostname) || location.hostname.startsWith('192.168.');

if (isLocalhost) {
  apiUrl = 'http://localhost:3000';
 
}
else {

  apiUrl = 'https://blogivea-backend.onrender.com';
  
  
}