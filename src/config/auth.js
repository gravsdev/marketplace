import { TOKEN_NAME } from "./env";

export const token = () => localStorage.getItem(TOKEN_NAME);
export const setToken = (token) => localStorage.setItem(TOKEN_NAME, token);
export const removeToken = () => localStorage.removeItem(TOKEN_NAME);
export const clearToken = () => localStorage.clear();
