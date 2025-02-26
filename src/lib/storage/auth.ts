export const AUTH_TOKEN = "authToken";

export const setAuthToken = (token: string) => {
  localStorage.setItem(AUTH_TOKEN, token);
}

export const getAuthToken = () => {
  localStorage.getItem(AUTH_TOKEN);
}

export const removeAuthToken = () => {
  localStorage.removeItem(AUTH_TOKEN);
}
