import { Icon } from "../../../../components/icon/icon";
import PropTypes from "prop-types";
import styled from "styled-components";

const SearchContainer = ({ className, searchPhrase, onChange }) => {
  return (
    <div className={className}>
      <input
        value={searchPhrase}
        type="text"
        placeholder="Поиск по заголовкам..."
        onChange={onChange}
      />
      <Icon
        id="fa-solid fa-magnifying-glass"
        size="20px"
        margin="0 5px 0 10px"
        className="noPointer"
      />
    </div>
  );
};

export const Search = styled(SearchContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  width: 100%;
  max-width: 480px;
  height: 36px;

  outline: none;
  position: relative;

  & input {
    width: 100%;
    height: 36px;
    padding-right: 38px;
    padding-left: 12px;
    font-size: 14px;
    border: 1px solid #dcdcdc;
    border-radius: 6px;
  }
  &::placeholder {
    color: grey;
  }

  & .noPointer {
    position: absolute;
    right: 10px;
    cursor: default;
  }

  @media (max-width: 480px) {
    margin: 16px 12px;
  }
`;


Search.propTypes = {
  searchPhrase: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};