import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Furniture } from '../models/furnitures/furniture.model';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';
import { Draft } from '../models/furnitures/draft.model';

@Injectable({
  providedIn: 'root'
})
export class FurnituresService {

  constructor(
    public httpClient: HttpClient 
  ) { }

  async getAll(): Promise<Furniture[]> {
    const observable = this.httpClient.get<Furniture[]>(`${environment.restServerUrl}`)
    const list = firstValueFrom(observable)
    return list
  }

  async create(draft: Draft): Promise<Furniture> {
    const observable = this.httpClient.post<Furniture>(`${environment.restServerUrl}`, draft)
    const newFurniture = firstValueFrom(observable)
    return newFurniture
  }

}
