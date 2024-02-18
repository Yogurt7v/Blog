import { ROLE } from "../constants/role";
import { sessions } from "../sessions";
import { getRoles } from "../api/get-user";

export const fetchRoles = async (userSession) => {
    const accesRoles =[ROLE.ADMIN] 

    if (!sessions.access(userSession, accesRoles)) {
      return {
        error: "Доступ запрещен",
        res: null,
      };
    }

    const roles = await getRoles();

    return {
      error: null,
      res: roles, 
    };
  }