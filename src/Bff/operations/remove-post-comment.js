import { deleteComment, getPost, getComments } from "../api";
import { ROLE } from "../constants/role";
import { sessions } from "../sessions";
export const removePostComment = async (hash, postId, id) => {

  const accessRoles =[ROLE.ADMIN, ROLE.MODERATOR] 

  const access = await sessions.access(hash, accessRoles)

  console.log(postId, id);


  if (!access) {
    return {
      error: "Доступ запрещен",
      res: null,
    };
  }

  await deleteComment(id);


  const post = await getPost(postId);

  const comments = await getComments(postId);

  return {
    error: null,
    res: { ...post, comments },
  };
};