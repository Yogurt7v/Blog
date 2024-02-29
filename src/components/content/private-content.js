import { useSelector } from "react-redux";
import { Error } from "..";
import { selectUserRole } from "../../selectors";
import { checkAccess } from "../../utils";
import { ERROR } from "../../constants";

export const PrivateContent = ({ children, access, serverError = null }) => {
  const userRole = useSelector(selectUserRole);
 
  let accessError = checkAccess(access, userRole) ? null : ERROR.ACCESS_DENIED;
  const error = serverError || accessError;

  return error ? <Error error={error} /> : children;
};
