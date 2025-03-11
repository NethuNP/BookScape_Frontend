import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/app/Redux/store/store";
import { User, AuthState } from "@/types/types";
import { isTokenExpired } from "@/utils/apiConfig";
const storage = {
getItem: <T>(key: string): T | null => {
if (typeof window === "undefined") return null;
try {
const item = localStorage.getItem(key);
// Check if the item is not null or undefined before parsing
if (item !== null && item !== undefined) {
return JSON.parse(item) as T;
}
return null;
} catch (error) {
console.error("Error reading from localStorage:", error);
return null;
}
},
setItem: <T>(key: string, value: T): void => {
if (typeof window === "undefined") return;
try {
localStorage.setItem(key, JSON.stringify(value));
} catch (error) {
console.error("Error writing to localStorage:", error);
}
},
removeItem: (key: string): void => {
if (typeof window === "undefined") return;
try {
localStorage.removeItem(key);
} catch (error) {
console.error("Error removing from localStorage:", error);
}
},
};
// Initial state with default values based on localStorage
const initialState: AuthState = {
user: storage.getItem<User>("user"),
token: storage.getItem<string>("token"),
isAuthenticated: storage.getItem<string>("token") !== null,
};
// Create the auth slice with actions and reducers
export const authSlice = createSlice({
name: "auth",
initialState,
reducers: {
// Set credentials when user logs in or registers
setCredentials: (
state,
action: PayloadAction<{ user: User; token: string }>
) => {
state.user = action.payload.user;
state.token = action.payload.token;
state.isAuthenticated = true;
storage.setItem("token", action.payload.token);
storage.setItem("user", action.payload.user);
},
// Action to log out the user
logout: (state) => {
state.user = null;
state.token = null;
state.isAuthenticated = false;
storage.removeItem("token");
storage.removeItem("user");
},
// Check if the token is expired or missing
checkAuth: (state) => {
const token = storage.getItem<string>("token");
if (!token || isTokenExpired(token)) {
// Token expired or missing
state.user = null;
state.token = null;
state.isAuthenticated = false;
storage.removeItem("token");
storage.removeItem("user");
}
},
},
});
export const { setCredentials, logout, checkAuth } = authSlice.actions;
// Selectors to access auth state from the store
export const selectAuth = (state: RootState) => state.auth;
export const selectUser = (state: RootState) => state.auth.user;
export default authSlice.reducer;