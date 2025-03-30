import { Injectable } from '@angular/core';
import { v4 } from 'uuid';
import { Post } from '../models/post/post.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

    random = v4()

    constructor(
       public httpClient: HttpClient 
    ) { }

    sayHi() {
        console.log(`hi from service ${this.random}`)
    }

    async getProfile(): Promise<Post[]> {
        const observable = this.httpClient.get<Post[]>(`${environment.restServerUrl}/profile`)
        const profile = firstValueFrom(observable)
        return profile
    }
}
