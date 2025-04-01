import { DatePipe } from '@angular/common';
import { Component, computed, OnDestroy, OnInit, signal } from '@angular/core';
import { AllcapsPipe } from '../../../pipes/allcaps.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [DatePipe, AllcapsPipe, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit, OnDestroy {
    
    name: string = 'Bob'
    currentTime = (new Date())
    intervalId: any
    address: string = 'Khoma imigidal 33'

    strUsername = ''
    strEmail = `${this.strUsername}@johnbryce.co.il`

    username = signal<string>('')
    email = computed(() => `${this.username()}@johnbryce.co.il`)

    isButtonDisabled = true

    sayHi() {
        alert('hi')
    }

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
