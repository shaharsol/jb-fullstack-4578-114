import { Component, input } from '@angular/core';
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
    async deleteMe() {
        try {
            this.profileService.deleteComment(this.postId()!, this.comment()!.id)
        } catch (e) {
            alert(e)
        }
    }
}
