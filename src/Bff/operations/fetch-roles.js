import { ROLE } from "../constants/";
import { sessions } from "../sessions";
import { getRoles } from "../api/get-roles";

export const fetchRoles = async (userSession) => {
    const accessRoles = [ROLE.ADMIN]

    if (!sessions.access(userSession, accessRoles)) {
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