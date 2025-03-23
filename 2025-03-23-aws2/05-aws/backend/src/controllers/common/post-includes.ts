import User from "../../models/user"
import Comment from "../../models/comment"

const postIncludes = {
    include: [
        User,
        {
            model: Comment,
            include: [ User ]
        }
    ]
}

export default postIncludes