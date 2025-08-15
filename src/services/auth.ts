import axios from "axios";

import { apiClient } from "./base";

const API_URL = process.env.NEXT_PUBLIC_DEV_API_URL || "http://localhost:3000/api"; // ajuste conforme seu backend

export async function login(email: string, password: string) {
  const response = await axios.post(`${API_URL}/auth/login`, { email, password });
  return response.data; // ajuste conforme resposta da sua API
}

export async function register(
  name: string,
  email: string,
  password: string,
  phone: string,
  birth_date: Date,
  country_code: string = "BR"
) {
  const response = await axios.post(
    `${API_URL}/auth/signup`,
    { name, email, password, phone, birth_date, country_code }
  );
  return response.data;
}

export async function logout() {
  // Se sua API tiver logout, chame aqui
  await axios.post(`${API_URL}/logout`);
  // Ou apenas limpe o token localmente
  setAuthToken("");
  return true;
}

export function setAuthToken(token: string) {
  if (token) {
    apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete apiClient.defaults.headers.common["Authorization"];
  }
}