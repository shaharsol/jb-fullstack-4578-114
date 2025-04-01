import { Component, input, output } from '@angular/core';
import { PostComment } from '../../../models/comment/comment.model';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-comment',
  imports: [],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {

    constructor (
        public profileService: ProfileService
    ) {}

    postId = input<string>()
    comment = input<PostComment>()

    deletedComment = output<string>()

    async deleteMe() {
        try {
            await this.profileService.deleteComment(this.postId()!, this.comment()!.id)
            this.deletedComment.emit(this.comment()!.id)
        } catch (e) {
            alert(e)
        }
    }
}
