import styled from "styled-components";
import {H2} from "../../../../components/h2/h2";

const PostContainer = ({
  clasName,
  id,
  title,
  imageUrl,
  contents: content,
  publishedAt,
}) => {
  return (
  <div>
      <img src={imageUrl} alt={title}/>
      <H2>{title}</H2>
      <div className="special-panel">{publishedAt}</div>
      <div>{content}</div>
  </div>
  );
};

export const PostContent = styled(PostContainer)``;
