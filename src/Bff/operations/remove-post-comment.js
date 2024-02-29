import { deleteComment, getPost } from "../api";
import { getPostIdCommentsWithAuthor } from "../utils";
import { ROLE } from "../constants/role";
import { sessions } from "../sessions";
export const removePostComment = async (hash, postId, id) => {

  const accessRoles =[ROLE.ADMIN, ROLE.MODERATOR] 

  const access = await sessions.access(hash, accessRoles)

  if (!access) {
    return {
      error: "Доступ запрещен",
      res: null,
    };
  }

  await deleteComment(id);

  const post = await getPost(postId);

  const commentsWithAuthor = await getPostIdCommentsWithAuthor(postId);

  return {
    error: null,
    res: { ...post, comments: commentsWithAuthor },
  };
};
