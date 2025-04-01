import { Component, input, output } from '@angular/core';
import { Post } from '../../../models/post/post.model';
import { ProfileService } from '../../../services/profile.service';
import { CommentsComponent } from "../comments/comments.component";

@Component({
  selector: 'app-post',
  imports: [CommentsComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

    constructor (
        public profileService: ProfileService
    ) {

    }

    post = input<Post>()
    deletedPost = output<string>()

    async deleteMe() {
        try {
            await this.profileService.deletePost(this.post()!.id)
            this.deletedPost.emit(this.post()!.id)
        } catch (e) {
            alert(e)
        }
    }

}
