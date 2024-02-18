import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Icon } from "../../../../components/icon/icon";
import { useState } from "react";
// import { TableRow } from "../table-row/table-row";
// import { ROLE } from "../../../../constants/role";

const UserRowContainer = ({
  className,
  login,
  registeredAt,
  roles,
  roleId: userRoleId,
}) => {
  const dispatch = useDispatch();
  const [selectedRoleId, setSelectedRoleId] = useState(userRoleId);

  const onRoleChange = ({ target }) => {
    setSelectedRoleId(Number(target.value));
  };

  const isSaveButtonDisabled = selectedRoleId === userRoleId;

  return (
    <>
      <div className={className}>
        <div className="user-data">
          <div className="login-colomn">{login}</div>
          <div className="registered-at-colomn">{registeredAt}</div>
          <div className="role-colomn">
            <select value={selectedRoleId} onChange={onRoleChange}>
              {roles.map(({ id: roleId, name: roleName }) => (
                <option key={roleId} value={roleId}>
                  {roleName}
                </option>
              ))}
            </select>
              <Icon
                id="fa-regular fa-floppy-disk"
                margin="0 10px 0 10px"
                size="20px"
                disabled={isSaveButtonDisabled}
                onClick={() => dispatch(/*TODO*/)}
              />
          </div>
        </div>
        <Icon
          id="fa-regular fa-trash-can"
          size="20px"
          margin="0 0 0 10px"
          onClick={() => dispatch(/*TODO*/)}
        />
      </div>
    </>
  );
};

export const UserRow = styled(UserRowContainer)`
  display: flex;

  & .user-data {
    display: flex;
    align-items: center;
    border: 1px solid #000;
    margin: 5px 0;
  }

  & .login-colomn {
    padding-left: 10px;
    display: flex;
    justify-content: flex-start;
    width: 172px;
  }

  & .registered-at-colomn {
    display: flex;
    justify-content: center;
    width: 213px;
  }

  & .role-colomn {
    width: 158px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  & select {
    padding: 0 5px;
    font-size: 15px;
  }
`;
