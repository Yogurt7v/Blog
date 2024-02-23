import { setPostData } from "./set-post-data";

export const removeCommentAsync = (requestServer, postId, id) => (dispatch) => {

  console.log("removeCommentAsync", postId, id);
  requestServer("removePostComment", postId, id).then((postData) => {
    dispatch(setPostData(postData.res));
  });
};
