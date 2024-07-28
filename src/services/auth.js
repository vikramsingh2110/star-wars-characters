// Mock authentication service

const FAKE_USERNAME = 'user';
const FAKE_PASSWORD = 'password';

let token = null;

export const login = (username, password) => {
  if (username === FAKE_USERNAME && password === FAKE_PASSWORD) {
    token = 'fake-jwt-token'; // Mock token
    localStorage.setItem('authToken', token);
    return Promise.resolve(token);
  } else {
    return Promise.reject('Invalid credentials');
  }
};

export const logout = () => {
  token = null;
  localStorage.removeItem('authToken');
};

export const isAuthenticated = () => {
  return Boolean(localStorage.getItem('authToken'));
};

export const getToken = () => {
  return localStorage.getItem('authToken');
};

// Mock token refresh mechanism
export const refreshToken = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      token = 'refreshed-fake-jwt-token'; // Mock refreshed token
      localStorage.setItem('authToken', token);
      resolve(token);
    }, 1000);
  });
};

// Add token manager function
export const startTokenManager = () => {
  const checkTokenValidity = async () => {
    const token = getToken();
    if (token) {
      // Simulate checking token expiration (here just refresh every 5 minutes)
      const tokenLifetime = 5 * 60 * 1000; // 5 minutes
      setTimeout(async () => {
        await refreshToken();
        checkTokenValidity(); // Schedule the next check
      }, tokenLifetime);
    }
  };
  
  checkTokenValidity(); // Start checking token validity
};

