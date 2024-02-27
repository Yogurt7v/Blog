import { useEffect, useState } from "react";
import { PostCard, Pagination } from "./components";
import { useServerRequest } from "../../hooks";
import styled from "styled-components";
import { PAGINATION_LIMIT } from "../../constants";
import { getLastPageFromLinks } from "./utils";

const MainContainer = ({ className }) => {
  const [posts, setPosts] = useState([]);
  const requestServer = useServerRequest();
  const [page , setPage] = useState(1)
  const [lasPage, setLastPage] = useState(1);

    useEffect(() => {
    requestServer(`fetchPosts`, page, PAGINATION_LIMIT).then(({res: {posts , links}}) => {
      setPosts(posts);
      console.log(getLastPageFromLinks(links));
      setLastPage(getLastPageFromLinks(links));
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
      { lasPage >1 ? <Pagination setPage={setPage} page={page} lasPage={lasPage}/> : null}
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
