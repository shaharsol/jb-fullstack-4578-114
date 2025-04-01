import { Component, input } from '@angular/core';
import { PostComment } from '../../../models/comment/comment.model';
import { CommentComponent } from "../comment/comment.component";

@Component({
  selector: 'app-comments',
  imports: [CommentComponent],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {
    comments = input<PostComment[]>()
}
