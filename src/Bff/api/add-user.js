import { generatedDate } from "../utils";
export const addUser = (login, password) =>
  fetch("http://localhost:3004/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      login,
      password,
      registed_at: generatedDate(),
      role_id: 2,
    }),
  }).then((createdUser) => createdUser.json());
