import { Component, input } from '@angular/core';
import { FurnituresService } from '../../../services/furnitures.service';
import { Furniture } from '../../../models/furnitures/furniture.model';

@Component({
  selector: 'app-single',
  imports: [],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent {

    constructor (
    ) {

    }

    furniture = input<Furniture>()

}
