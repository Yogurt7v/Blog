import styled from "styled-components";
import { Icon } from "../../../../../components/icon/icon";

const CommentContainer = ({ className, id, author, publishedAt, content }) => {
  return (
    <>
      <div className={className}>
        <div className="information-panel">
          <div className="author">
            <div className="icon">
              <icon id ="fa-solid fa-user" size="16px"/>
            </div>
            {author}
          </div>
          <div className="published-at">
            <div className="icon">
              <Icon id ="fa-regular fa-calendar" size="16px"/>
            </div>
            {publishedAt}
          </div>
        </div>
        <div className="comment-text">{content}</div>
      </div>
    </>
  );
};

export const Comment = styled(CommentContainer)`
       & .information-panel {
         display: flex;
         justify-content: space-between;
       } 
       & .author {
         display: flex;
       }

       & .published-at {
         display: flex;
       }
 `;
