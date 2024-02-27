import styled from "styled-components";
import { useEffect, useState, useMemo } from "react";
import { PostCard, Pagination, Search } from "./components";
import { useServerRequest } from "../../hooks";
import { PAGINATION_LIMIT } from "../../constants";
import { getLastPageFromLinks, debounce } from "./utils";

const MainContainer = ({ className }) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [lasPage, setLastPage] = useState(1);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [shouldSearch, setShouldSearch] = useState(false);
  const requestServer = useServerRequest();

  useEffect(() => {
    requestServer(`fetchPosts`, searchPhrase, page, PAGINATION_LIMIT).then(
      ({ res: { posts, links } }) => {
        setPosts(posts);
        setLastPage(getLastPageFromLinks(links));
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestServer, page, shouldSearch]);

  const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 2000), []);

  const onSearch = ({ target }) => {
    setSearchPhrase(target.value);
    startDelayedSearch(!shouldSearch);
  };

  return (
    <div className={className}>
      <div className="posts-and-search">
        <Search searchPhrase={searchPhrase} onChange={onSearch} />
        {posts.length > 0 ? (
          <div className="post-list">
            {posts.map(
              ({ id, title, publishedAt, imageUrl, commentsCount }) => (
                <PostCard
                  key={id}
                  id={id}
                  imageUrl={imageUrl}
                  title={title}
                  publishedAt={publishedAt}
                  commentsCount={commentsCount}
                />
              )
            )}
          </div>
        ) : (
          <div className="no-posts">Статьи не найдены</div>
        )}
      </div>
      {lasPage > 1 && posts.length > 0 ? (
        <Pagination setPage={setPage} page={page} lasPage={lasPage} />
      ) : null}
    </div>
  );
};

export const Main = styled(MainContainer)`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;


  & .post-list {
    display: flex;
    flex-wrap: wrap;
    flex: 1 0 auto;
  }

  & .no-posts {
    height: 300px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 24px;
    font-size: 18px;
  }
`;
