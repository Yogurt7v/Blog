import { setPostData } from "./set-post-data";

export const removeCommentAsync = (requestServer, postId, id) => (dispatch) => {
  requestServer("addPostComment", postId, id).then((postData) => {
    dispatch(setPostData(postData.res));
  });
};
