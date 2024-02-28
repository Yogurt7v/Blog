import styled from "styled-components";
import { H2, PrivateContent } from "../../components";
import { UserRow, TableRow } from "./components";
import { useServerRequest } from "../../hooks";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUserRole } from "../../selectors";
import { checkAccess } from "../../utils";
import { ROLE } from "../../constants/role";

const UsersContainer = ({ className }) => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [shouldUpdateUserList, setShouldUpdateUserList] = useState(false);
  const userRole = useSelector(selectUserRole);

  const requestServer = useServerRequest();

  useEffect(() => {
    if (!checkAccess([ROLE.ADMIN], userRole)) {
      setErrorMessage("Доступ запрещен 1");
      return;
    }

    Promise.all([
      requestServer(`fetchUsers`),
      requestServer(`fetchRoles`),
    ]).then(([usersRes, rolesRes]) => {
      if (usersRes.error || rolesRes.error) {
        setErrorMessage(usersRes.error || rolesRes.error);
        return;
      }

      setUsers(usersRes.res);
      setRoles(rolesRes.res);
    });
  }, [requestServer, shouldUpdateUserList, userRole]);

  const onUserRemove = (userId) => {
    if (!checkAccess([ROLE.ADMIN], userRole)) {
      setErrorMessage("Доступ запрещен");
      return;
    }

    requestServer(`removeUser`, userId).then(() => {
      setShouldUpdateUserList(!shouldUpdateUserList);
    });
  };

  return (
    <PrivateContent access={[ROLE.ADMIN]} serverError={errorMessage}>
      <div className={className}>
        <H2>Пользователи</H2>
        <div>
          <TableRow>
            <div className="login-colomn">Логин</div>
            <div className="registered-at-colomn">Дата регистрации</div>
            <div className="role-colomn">Роль</div>
          </TableRow>

          {users.map(({ id, login, registeredAt, roleId }) => (
            <UserRow
              key={id}
              id={id}
              login={login}
              registeredAt={registeredAt}
              roleId={roleId}
              roles={roles.filter(({ id: roleId }) => roleId !== ROLE.GUEST)}
              onUserRemove={() => onUserRemove(id)}
            />
          ))}
        </div>
      </div>
    </PrivateContent>
  );
};

export const Users = styled(UsersContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 570px;
  font-size: 16px;
`;
