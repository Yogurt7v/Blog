import styled from "styled-components";
import { H2 , Content} from "../../components";
import { UserRow, TableRow,  } from "./components";
import { useServerRequest } from "../../hooks";
import { useEffect, useState } from "react";

const UsersContainer = ({ className }) => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const reqeustServer = useServerRequest();

  useEffect(() => {

    Promise.all([
      reqeustServer(`fetchUsers`),reqeustServer(`fetchRoles`)]).then(
        ([usersRes, rolesRes]) => {
        if(usersRes.error || rolesRes.error){
          setErrorMessage(usersRes.error || rolesRes.error);
          return;
        }

        setUsers(usersRes.res);
        setRoles(rolesRes.res);

    });
  }, [reqeustServer]);

  return (
    <div className={className}>
      <Content error={errorMessage}>
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
              login={login}
              registeredAt={registeredAt}
              roleId={roleId}
              roles={roles}
            />
          ))}
        </div>
        </Content>
    </div>
  );
};

export const Users = styled(UsersContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 570px;
  margin: 0 auto;
`;
