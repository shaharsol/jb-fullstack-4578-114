import { Component, input } from '@angular/core';
import { PostComment } from '../../../models/comment/comment.model';

@Component({
  selector: 'app-comment',
  imports: [],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
    comment = input<PostComment>()
}
