import styled from "styled-components";
import { H2 } from "../../../../components/h2/h2";

const PostContainer = ({
  className,
  post: { id, title, imageUrl, content, publishedAt },
}) => {

  console.log("imageUrl", imageUrl);
  return (
    <div className={className}>
      <img src={imageUrl} alt="ivan"></img>
      <H2>{title}</H2>
      <div className="special-panel">{publishedAt}</div>
      <div>{content}</div>
    </div>
  );
};

export const PostContent = styled(PostContainer)``;
