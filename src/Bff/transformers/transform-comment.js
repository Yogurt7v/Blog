export const transformComment = (dbComment) => {
    return {
        id: dbComment.id,
        postId: dbComment.post_id,
        authorId: dbComment.authorId,
        publishedAt: dbComment.publishedAt,
        content: dbComment.content,
    };
}