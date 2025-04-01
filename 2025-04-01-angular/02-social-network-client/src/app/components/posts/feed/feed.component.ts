import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-feed',
  imports: [],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent implements OnInit{

    constructor (
        public profileService: ProfileService
    ) {}

    ngOnInit(): void {
        this.profileService.sayHi()
    }

}
