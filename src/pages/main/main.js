import { useEffect, useState } from "react";
import { PostCard, Pagination } from "./components";
import { useServerRequest } from "../../hooks";
import styled from "styled-components";
import { PAGINATION_LIMIT } from "../../constants";

const MainContainer = ({ className }) => {
  const [posts, setPosts] = useState([]);
  const requestServer = useServerRequest();
  const [page,setPage] = useState(1)

    useEffect(() => {
    requestServer(`fetchPosts`, page, PAGINATION_LIMIT).then((posts) => {
      setPosts(posts.res);
    });
  }, [requestServer, page]);

  return (

    <div className={className}>
      <div className="post-list">
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
      <Pagination setPage={setPage}/>
    </div>
  );
};

export const Main = styled(MainContainer)`

  padding: 20px;

  & .post-list {
    display: flex;
    flex-wrap: wrap;
  }

`;
