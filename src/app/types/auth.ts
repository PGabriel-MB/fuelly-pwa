type User = {
  id: string,
  name: string,
  email: string,
  phone: string,
  birth_date: string,
  country_code: string
};

type AuthData = User & { token: string };

export type {
  User,
  AuthData
}