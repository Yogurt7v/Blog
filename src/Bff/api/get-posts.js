import { transformPost } from "../transformers";

export const getPosts = (page, limit) => fetch(`http://localhost:3004/posts?_page=${page}&_per_page=${limit}`)
  .then((loadedPosts) =>loadedPosts.json())
  .then ((loadedPosts) => loadedPosts && loadedPosts.data.map(transformPost))