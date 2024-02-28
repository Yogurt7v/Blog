import { useEffect, useLayoutEffect, useState } from "react";
import { useParams, useMatch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { PostContent, Comments, PostForm } from "../../pages/post/components";
import { Error, PrivateContent } from "../../components";
import { useServerRequest } from "../../hooks";
import { loadPostAsync } from "../../actions";
import { selectPost } from "../../selectors";
import { RESET_POST_DATA } from "../../actions";
import { ROLE } from "../../constants/role";
import styled from "styled-components";

const PostContainer = ({ className }) => {

  const post = useSelector(selectPost);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const params = useParams();
  const [isLoading, setIsLoading] = useState(null);
  const isCreating = !!useMatch(`/post`);
  const isEditing = !!useMatch(`/post/:id/edit`);
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

  if (isLoading) {
    return null;
  }

  const SpecificPostPage = 
    isCreating || isEditing ? (
      <PrivateContent access={[ROLE.ADMIN]} serverError={error}>
        <div className={className}>
          <PostForm post={post} />
        </div>
      </PrivateContent>
    ) : (
      <div className={className}>
        <PostContent post={post} />
        <Comments comments={post.comments} postId={post.id} />
      </div>
    );

  return error ? <Error error={error} /> : SpecificPostPage;
};

export const Post = styled(PostContainer)`
  display: flex;
  flex-direction: column;
  padding: 40px 60px;
`;
