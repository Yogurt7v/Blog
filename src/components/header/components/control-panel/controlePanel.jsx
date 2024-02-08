import styled from "styled-components";
import { Icon } from "../../../icon/icon";
import { Link, useNavigate } from "react-router-dom";

const RightAligned = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: black;
`;

const Button = styled.button`
  border: none;
  background-color: #e6baa3;
  color: black;
  border-radius: 5px;
  justify-content: center;
  cursor: pointer;
  align-self: center;
  font-size: 12px;
  font-weight: 700;
  width: 105px;
  height: 30px;
`;

const ControlPanelContainer = ({ className }) => {
  const nav = useNavigate();

  return (
    <div className={className}>
      <RightAligned>
        <Link to="/login">
          <Button id="button">Enter</Button>{" "}
        </Link>
      </RightAligned>
      <RightAligned>
        <div onClick={() => nav(-1)}>
          <Link >
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
