import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AllcapsPipe } from '../../../pipes/allcaps.pipe';

@Component({
  selector: 'app-profile',
  imports: [DatePipe, AllcapsPipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit, OnDestroy {
    
    name: string = 'Bob'
    currentTime = (new Date())
    intervalId: any

    // runs when the component initializes
    ngOnInit(): void {
        this.intervalId = setInterval(() => {
            this.currentTime = (new Date())
        }, 1000)
    }

    // runs when the component is destroyed
    ngOnDestroy(): void {
        clearInterval(this.intervalId)
    }



}
