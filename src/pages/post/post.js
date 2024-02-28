import { useEffect, useLayoutEffect, useState } from "react";
import { useParams, useMatch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { PostContent, Comments, PostForm } from "../../pages/post/components";
import { Error } from "../../components";
import { useServerRequest } from "../../hooks";
import { loadPostAsync } from "../../actions";
import { selectPost } from "../../selectors";
import { RESET_POST_DATA } from "../../actions";
import styled from "styled-components";

const PostContainer = ({ className }) => {
  const post = useSelector(selectPost);

  const dispatch = useDispatch();
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const isEditing = useMatch(`/post/:id/edit`);
  const isCreating = useMatch(`/post`);
  const [error, setError] = useState(true);
  const requestServer = useServerRequest();

  useLayoutEffect(() => {
    dispatch(RESET_POST_DATA);
  }, [dispatch, isCreating]);

  useEffect(() => {
    if (isCreating) {
      setIsLoading(false);
      return;
    }
    dispatch(loadPostAsync(requestServer, params.id)).then((postData) => {
      setError(postData.error);
      setIsLoading(false);
    });
  }, [dispatch, requestServer, params.id, isCreating]);


  if( isLoading ) {
    return null;
  }

  return error ? (
    <Error error={error} />
  ) : (
    <div className={className}>
      {isEditing || isCreating ? (
        <PostForm post={post} />
      ) : (
        <>
          <PostContent post={post} />
          <Comments comments={post.comments} postId={post.id} />
        </>
      )}
    </div>
  );
};

export const Post = styled(PostContainer)`
  display: flex;
  flex-direction: column;
  padding: 40px 60px;
`;
