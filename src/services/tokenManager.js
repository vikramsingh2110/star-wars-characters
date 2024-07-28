import { getToken, refreshToken } from './auth';

// Function to check and refresh the token if needed
export const checkTokenValidity = async () => {
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

// Call this function when app starts
export const startTokenManager = () => {
  checkTokenValidity();
};
