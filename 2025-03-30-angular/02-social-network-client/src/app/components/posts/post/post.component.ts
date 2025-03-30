import { Component, input } from '@angular/core';
import { Post } from '../../../models/post/post.model';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
    post = input<Post>()
}
