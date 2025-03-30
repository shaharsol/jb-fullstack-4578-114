import { DatePipe } from '@angular/common';
import { Component, computed, OnDestroy, OnInit, signal } from '@angular/core';
import { AllcapsPipe } from '../../../pipes/allcaps.pipe';
import { FormsModule } from '@angular/forms';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-profile',
  imports: [],
//   providers: [ProfileService], // if the components needs its own ProfileService, 
// it states here like so...
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit, OnDestroy {

    constructor (
        public profileService: ProfileService
    ) {}

    ngOnDestroy(): void {
    }
    
    async ngOnInit(): Promise<void> {
        const profile = await this.profileService.getProfile()
        console.log(profile)
    }
    

}
