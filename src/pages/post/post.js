import { useEffect, useLayoutEffect } from "react";
import { useParams, useMatch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { PostContent, Comments, PostForm } from "../../pages/post/components";
import { useServerRequest } from "../../hooks";
import { loadPostAsync } from "../../actions";
import { selectPost } from "../../selectors";
import { RESET_POST_DATA } from "../../actions";
import styled from "styled-components";

const PostContainer = ({ className }) => {
  const post = useSelector(selectPost);

  const dispatch = useDispatch();
  const params = useParams();
  const isEditing = useMatch(`/post/:id/edit`);
  const requestServer = useServerRequest();

  useLayoutEffect(() => {
      dispatch(RESET_POST_DATA)
  },[dispatch])

  useEffect(() => {
    dispatch(loadPostAsync(requestServer, params.id));
  }, [dispatch, requestServer, params.id]);

  return (
    <div className={className}>
      {isEditing ? (
        <PostForm post={post} />
      )
       : 
      (
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
