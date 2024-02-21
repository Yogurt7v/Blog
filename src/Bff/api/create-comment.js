import { generatedDate } from "../utils";
export const addComment = (userId, postId, content) =>
  fetch("http://localhost:3004/comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      authorId: userId,
      post_id: postId,
      publishedAt: generatedDate(),
     content,
    }),
  });
