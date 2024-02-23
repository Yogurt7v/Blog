import styled from "styled-components";
import { Icon } from "../../../../../components/icon/icon";
import { useDispatch } from "react-redux";
import { removeCommentAsync } from "../../../../../actions";
import { useServerRequest } from "../../../../../hooks";

const CommentContainer = ({
  className,
  postId,
  id,
  author,
  publishedAt,
  content,
}) => {
  const dispatch = useDispatch();
  const requestServer = useServerRequest();

  const onNewCommentRemove = (id) => {
    dispatch(removeCommentAsync(requestServer, postId, id));
  };

  return (
    <>
      <div className={className}>
        <div className="comment">
          <div className="information-panel">
            <div className="author">
              <div className="icon" onClick={() => {}}>
                <Icon
                  id="fa-regular fa-circle-user"
                  margin="0 10px 0 10px"
                  size="16px"
                  className="noPointer"
                />
              </div>
              {author}
            </div>
            <div className="published-at">
              {publishedAt}
              <div className="icon">
                <Icon
                  id="fa-regular fa-calendar"
                  margin="0 0 0 10px"
                  size="16px"
                  className="noPointer"
                />
              </div>
            </div>
          </div>
          <div className="comment-text">{content}</div>
        </div>
        <div className="icon" onClick={() => onNewCommentRemove(id)}>
          <Icon id="fa-solid fa-trash" margin="10px 0 0 10px" size="16px" />
        </div>
      </div>
    </>
  );
};

export const Comment = styled(CommentContainer)`
  display: flex;

  justify-content: space-between;

  & .comment {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    border-radius: 4px;
    border: 1px solid black;
    width: 100%;
  }

  & .icon {
    float: right;
  }

  & .noPointer {
    pointer-events: none;
  }

  & .comment-text {
    text-align: justify;
    margin: 10px;
    font-size: 16px;
    line-height: 1.5;
  }

  & .information-panel {
    display: flex;
    justify-content: space-between;
  }
  & .author {
    display: flex;
    align-items: center;
    margin-left: 10px;
    font-size: 14px;
  }

  & .published-at {
    display: flex;
    align-items: center;
    margin-right: 10px;
    font-size: 12px;
  }
`;
