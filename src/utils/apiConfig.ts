export const BASE_URL = "http://localhost:5000";
//export const BASE_URL = "https://bookscapebackend-production.up.railway.app/"; 

export const isTokenExpired = (token: string | null): boolean => {
    if (!token) return true;
    try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const currentTime = Math.floor(Date.now() / 1000);
    return payload.exp < currentTime;
    } catch (error) {
    console.error("Error decoding token:", error);
    return true;
    }
    };