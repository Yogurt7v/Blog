import { useState } from "react";
import styled from "styled-components";
import { Icon } from "../../../../components/icon/icon";
import { Comment } from "./comment/comment";

const CommentsContainer = ({ className, comments }) => {
  const [newComment, setNewComment] = useState("");

  return (
    <>
      <div className={className}>
        <div className="new-comment">
          <textarea
            value={newComment}
            placeholder="Your comment..."
            onChange={(target) => setNewComment(target.value)}
          />
          <div className="icon">
            <Icon id="fa-regular fa-paper-plane" size="16px" margin ="0 0 0 10px" />
          </div>
        </div>
        <div className="comments">
          {comments.map(({ id, author, content, publishedAt }) => (
            <Comment
              key={id}
              id={id}
              author={author}
              contetnt={content}
              publishedAt={publishedAt}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export const Comments = styled(CommentsContainer)`

  diplay: flex;
  margin: 20px auto;
  width: 580px;

  & .new-comment {
    display: flex;
    width: 100%;
    margin: 20px 0 0 0;

  }

  & .icon{
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
