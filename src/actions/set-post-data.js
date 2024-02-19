import { ACTION_TYPE } from "../actions/action-type";
export const setPostData = (postData) => ({
  type: ACTION_TYPE,
  payload: postData,
});
