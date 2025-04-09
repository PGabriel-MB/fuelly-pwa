import { api } from "./baseConfig"

import type { User } from "../types/user"

const getUser = async (id: string) =>
  await api.get<User>(`/user/${id}`)

export { getUser }