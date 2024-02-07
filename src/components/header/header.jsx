import styled from "styled-components";
import { Logo } from "./components/logo/Logo";

const HeaderContainer = ({ className }) => (
  <header className={className}>
    <Logo />
  </header>
);

export const Header = styled(HeaderContainer)`
  position: fixed;
  top: 0;
  height: 120px;
  width: 1000px;
  padding: 20px 40px;
    background-color: #fff;
  box-shadow: 0px 28px 26px 0px rgba(0, 0, 0, 0.1),
    0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

export default Header;
