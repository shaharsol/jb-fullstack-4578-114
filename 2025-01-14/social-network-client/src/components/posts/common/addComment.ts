import Post from "../../../models/post/Post"
import Comment from "../../../models/comment/Comment"

export default function addComment(comment: Comment, posts: Post[], setPosts: (posts: Post[]) => {}): void {
    const postsWithNewComment = [...posts]

    const postToAddCommentTo = postsWithNewComment.find(post => post.id === comment.postId)
    if(postToAddCommentTo) {
        postToAddCommentTo.comments.unshift(comment)
    }

    setPosts(postsWithNewComment)
}