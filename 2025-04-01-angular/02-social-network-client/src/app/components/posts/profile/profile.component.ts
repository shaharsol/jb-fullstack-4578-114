import { DatePipe } from '@angular/common';
import { Component, computed, OnDestroy, OnInit, signal } from '@angular/core';
import { AllcapsPipe } from '../../../pipes/allcaps.pipe';
import { FormsModule } from '@angular/forms';
import { ProfileService } from '../../../services/profile.service';
import { Post } from '../../../models/post/post.model';
import { PostComponent } from "../post/post.component";

@Component({
  selector: 'app-profile',
  imports: [PostComponent],
//   providers: [ProfileService], // if the components needs its own ProfileService, 
// it states here like so...
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit, OnDestroy {

    profile = signal<Post[]>([])

    constructor (
        public profileService: ProfileService
    ) {}

    ngOnDestroy(): void {
    }

    removePost(id: string) {
        this.profile.set(this.profile().filter(p => p.id !== id))
    }
    
    async ngOnInit(): Promise<void> {
        try {
            const profilePosts = await this.profileService.getProfile()
            this.profile.set(profilePosts)
        } catch (e) {
            alert(e)
        }
    }
    

}
