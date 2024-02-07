import { generatedDate } from "./generate-date";
export const addUser = (login, password) =>
  fetch("http://localhost:3004/user", {
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
  });