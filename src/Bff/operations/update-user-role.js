import { setUserRole } from "../api/set-user-role";
import { sessions } from "../sessions";
import { ROLE } from "../constants/role";

export const updateUserRole = async (userSession, userId, newUserRoleId) => {
  const accessRoles = [ROLE.ADMIN];

  if (!sessions.access(userSession, accessRoles)) {
    return {
      error: "Доступ запрещен updateUserRole",
      res: null,
    };
  }

  setUserRole(userId, newUserRoleId);

  return {
    error: null,
    res: true,
  };
};