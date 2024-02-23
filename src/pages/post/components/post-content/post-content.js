import styled from "styled-components";
import { H2 } from "../../../../components/h2/h2";
import { Icon } from "../../../../components/icon/icon";
import { SpecialPanel } from "../specaial-panel/special-panel"

const PostContainer = ({
  className,
  post: { title, imageUrl, content, publishedAt },
}) => {
  return (
    <div className={className}>
      <img src={imageUrl} alt={title}></img>
      <H2>{title}</H2>
      <SpecialPanel publishedAt={publishedAt} 
        editButton={<Icon id="fa-regular fa-pen-to-square" size="16px" margin="0 10px 0 0px" />}/>

      <div className="post-text">{content}</div>
    </div>
  );
};

export const PostContent = styled(PostContainer)`
  & img {
    float: left;
    margin-right: 20px;
    margin-bottom: 20px;
    height: 200px;
    border-radius: 10px;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.57);
  }
  & h2 {
    margin: 0 auto 20px;
  }

  // & .panel-left {
  //   display: flex;
  //   align-items: center;
  // }

  // & .special-panel {
  //   margin-bottom: 20px;
  //   padding-right: 10px;
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   justify-content: space-between;
  // }
  // & .published-at {
  //   display: flex;
  //   float left;
  // }

  // & .panel-icons{
  //   display: flex;
  //   align-items: center;
  //   justify-content: flex-end;
  //   gap: 20px;

  // }

  & .post-text {
    text-align: justify;
  }
`;
