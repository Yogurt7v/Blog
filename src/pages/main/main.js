import { useEffect, useState } from "react";
import { PostCard } from "./components/post-card/post-card";
import { useServerRequest } from "../../hooks";
import styled from "styled-components";

const MainContainer = ({ className }) => {
  const [posts, setPosts] = useState([]);
  const requestServer = useServerRequest();

  useEffect(() => {
    requestServer(`fetchPosts`).then((posts) => {
      setPosts(posts.res);
    });
  }, [requestServer]);

  return (
    <div className={className}>
      <div className="post-list"></div>
      {posts.map(({ id, title, publishedAt, imageUrl, commentsCount }) => (
        <PostCard
          key={id}
          id={id}
          imageUrl={imageUrl}
          title={title}
          publishedAt={publishedAt}
          commentsCount={commentsCount}
        />
      ))}
    </div>
  );
};

export const Main = styled(MainContainer)`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;

`;
