import styled from "styled-components";
import { useDispatch } from "react-redux";
import {Icon} from "../../components/icon/icon";
import { ROLE } from "../../constants";

 const UserRowContainer = ({ className, login, registeredAt, roleId : userRoleId}) => {

    const roles = [];
    const dispatch = useDispatch();

    const onRoleChange = () => {
    }

  return (
    <>
      <div className={className}>
        <div className="user-data">
          <div className="login-colomn">{login}</div>
          <div className="registered-at-colomn">{registeredAt}</div>
          <div className="role-colomn">
            <select value={userRoleId} onChange={onRoleChange}>
              {roles.map(({ id: roleId, name: roleName }) => (
                <option value={roleId}>{roleName}</option>
              ))}
            </select>
            <Icon
              id="fa-regular fa-floppy-disk"
              size="24px"
              margin="0 0 0 10px"
              onClick={() => dispatch(/*TODO*/)}
            />
          </div>
        </div>
        <div className="user-data"></div>
        <Icon
          id="fa-solid fa-trash-ca"
          size="24px"
          margin="0 0 0 10px"
          onClick={() => dispatch(/*TODO*/)}
        />
      </div>
    </>
  );
};


export const UserRow = styled(UserRowContainer)``;
