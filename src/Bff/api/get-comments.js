export const getComments = (postId) => fetch(`http://localhost:3004/comments/?postID=${postId}`).then(
    (loadedComments) => loadedComments.json(),

  );

  export default getComments