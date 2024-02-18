import { ROLE } from "../constants/role";
import { sessions } from "../sessions";
import { getUsers } from "../api/get-users";

export const fetchUsers = async (userSession) => {
    const accesRoles =[ROLE.ADMIN] 

    if (sessions.access(userSession, accesRoles)) {
      return {
        error: "Доступ запрещен",
        res: null,
      };
    }

    const users = await getUsers();

    return {
      error: null,
      res: users, 
    };
  }