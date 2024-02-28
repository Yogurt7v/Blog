import { transformPost } from "../transformers";

export const getPost = async (postId) =>
  await fetch(`http://localhost:3004/posts/${postId}`)
  .then((res)=> {
    if (res.ok) {
       return res
    }

    const error = res.status === 404 ? "Пост не существует" : "Ошибка";

    return Promise.reject(error);

  })
    .then((loadedPost) => loadedPost.json())
    .then((loadedPost) => loadedPost && transformPost(loadedPost));
