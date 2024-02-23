import { transformPost } from "../transformers";

export const getPost = async (postId) =>
  await fetch(`http://localhost:3004/posts/${postId}`)
    .then((loadedPost) => loadedPost.json())
    .then((loadedPost) => loadedPost && transformPost(loadedPost));
