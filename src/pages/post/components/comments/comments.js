import { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "../../../../components/icon/icon";
import { Comment } from "./comment/comment";
import { useServerRequest } from "../../../../hooks";
import { addCommentAsync } from "../../../../actions";
import { selectUserId } from "../../../../selectors";

const CommentsContainer = ({ className, comments, postId }) => {
  const [newComment, setNewComment] = useState("");
  const userId = useSelector(selectUserId);
  const dispatch = useDispatch();
  const requestServer = useServerRequest();


  const onNewCommentAdded = ( userId, postId, content) => {
    dispatch(addCommentAsync(requestServer, userId, postId, content));
    setNewComment("");
  };

  return (
    <>
      <div className={className}>
        <div className="new-comment">
          <textarea
            name="comment"
            value={newComment}
            placeholder="Your comment..."
            onChange={(e) => {
              setNewComment(e.target.value)}}
          />
          <div className="icon" onClick={() => onNewCommentAdded(userId,postId, newComment)}>
            <Icon
              id="fa-regular fa-paper-plane"
              size="16px"
              margin="0 0 0 10px"
            />
          </div>
        </div>
        <div className="comments">
          {comments.map(({ id, author, content, publishedAt }) => (
            <Comment
              key={id}
              id={id}
              author={author}
              content={content}
              publishedAt={publishedAt}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export const Comments = styled(CommentsContainer)`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  width: 580px;

  & .new-comment {
    display: flex;
    width: 100%;
    margin: 20px 0 0 0;
  }

  & .icon {
    flex: top;
  }

  & textarea {
    width: 100%;
    resize: none;
    height: 120px;
    border-radius: 4px;
    border: 1px solid black;
    // box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.57);
    font-size: 16px;
    padding: 10px 0 0 10px;
  }
`;
