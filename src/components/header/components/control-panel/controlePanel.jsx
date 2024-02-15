import styled from "styled-components";
import { Icon } from "../../../icon/icon";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../button/button";
import { ROLE } from "../../../../constants";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../../actions";
import {
  selectUserRole,
  selectUserLogin,
  selectUserSession,
} from "../../../..//selectors";

const RightAligned = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: black;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
`;

const StyledLogin = styled.div`
  display: flex;
  font-weight: 700;
  font-size: 18px;
  margin-right: 10px;
`;

const ControlPanelContainer = ({ className }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const roleId = useSelector(selectUserRole);
  const login = useSelector(selectUserLogin);
  const session = useSelector(selectUserSession);

  return (
    <div className={className}>
      <RightAligned>
        {roleId === ROLE.GUEST ? (
          <Button>
            <Link to="/login">Войти</Link>
          </Button>
        ) : (
          <>
            <StyledLink onClick={() => dispatch(logout(session))}>
              <StyledLogin>{login}</StyledLogin>
              <Icon
                id="fa-solid fa-right-from-bracket"
                size="24px"
                margin="10px 0px 10px 0"
              />
            </StyledLink>
          </>
        )}
      </RightAligned>
      <RightAligned>
        <div onClick={() => nav(-1)}>
          <Link>
            <Icon
              id="fa-solid fa-angles-left"
              size="24px"
              margin="10px 15px 10px 0"
            />
          </Link>
        </div>
        <Link to="/post">
          <Icon id="fa-regular fa-file" size="24px" margin="10px 15px 10px 0" />
        </Link>
        <Link to="/users">
          <Icon
            id="fa-solid fa-user-plus"
            size="24px"
            margin="10px 5px 10px 0"
          />
        </Link>
      </RightAligned>
    </div>
  );
};

export const ControlPanel = styled(ControlPanelContainer)``;
