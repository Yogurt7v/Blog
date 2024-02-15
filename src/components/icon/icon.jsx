import styled from "styled-components";

const IconContainer = ({ className, id , ...props}) => (
  <div className={className}>
    <i className={id}></i>
  </div>
);

export const Icon = styled(IconContainer)`
  margin: ${({ margin = "0" }) => margin};
  align-self: center;
  font-size: ${({ size = "24px" }) => size};
`;
