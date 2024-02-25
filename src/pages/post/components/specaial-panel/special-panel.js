import styled from "styled-components";
import { Icon } from "../../../../components/";
import { useDispatch } from "react-redux";
import { removePostAsync, openModal, CLOSE_MODAL } from "../../../../actions";
import { useServerRequest } from "../../../../hooks";
import { useNavigate } from "react-router-dom";

const specialPanelContainer = ({ className, id, publishedAt, editButton }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const requestServer = useServerRequest();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();

  const onPostRemove = (id) => {
    dispatch(
      openModal({
        text: "Удалить статью?",
        onConform: () => {
          dispatch(removePostAsync(requestServer, id)).then(() => {
            navigate(`/`);
          });
          dispatch(CLOSE_MODAL);
        },
        onCancel: () => dispatch(CLOSE_MODAL),
      })
    );
  };

  return (
    <div className={className}>
      <div className="special-panel">
        {publishedAt && (
          <div className="published-at">
            <Icon
              id="fa-regular fa-calendar"
              margin="0 10px 0 0px"
              size="18px"
              className="noPointer"
            />
          </div>
        )}
        {publishedAt}
      </div>
      <div className="buttons">
        {editButton}
        {publishedAt && <div onClick={() => onPostRemove(id)}>
          <Icon id="fa-solid fa-trash" size="18px"  margin="0 0 0 10px"/>
        </div>}
      </div>
    </div>
  );
};

export const SpecialPanel = styled(specialPanelContainer)`
    margin : ${({ margin }) => margin};
    display: flex;
    align-items: center; 
    justify-content: space-between;
    width: -webkit-fill-available;


    & .special-panel {
      display: flex;
      align-items: center;
    }

    & .buttons {
      display: flex;
      margin-bottom: 10px;
    }

    & .published-at {
        display: flex;
        float left;
      }

    & .noPointer {
      pointer-events: none;
    }
    
  
`;
