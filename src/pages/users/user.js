import styled from "styled-components";
import { useDispatch } from "react-redux";
import { H2 } from "../../components/h2/h2";
import { ROLE } from "../../constants";
import { UserRow } from "./components/inde";

const UsersContainer = (className) => {

    const dispatch = useDispatch();
    const users = [];



  return (
    <div className={className}>
      <H2>Пользователи</H2>
      <div>
        <div className="table-header">
            <div className="login-colomn">
                Логин
            </div>
            <div  className="registered-at-colomn">
                Дата регистрации
            </div>
            <div className="role-colomn">
                Роль
            </div>
        </div>
        {users.map(({id,login,registeredAt,roleId}) => (
            <UserRow key={id} login={login} registeredAt={registeredAt} roleId={roleId}/>
        ))}
      </div>
    </div>
  );
};

export const Users = styled(UsersContainer)``;
