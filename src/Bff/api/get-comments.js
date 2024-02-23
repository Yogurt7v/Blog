import  {transformComment} from '../transformers/transform-comment'
export const getComments = async(postId) => {
  return await fetch(`http://localhost:3004/comments/?postId=${postId}`).then(
    (loadedComments) => loadedComments.json().then((loadedComments) => loadedComments.map(transformComment)),

  );}

  export default getComments