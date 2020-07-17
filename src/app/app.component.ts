import { Component } from '@angular/core';
import { ItemService } from './items/services/item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Shopping Tracking List';

  constructor( public itemService:ItemService) {
    this.itemService.getCurrencyData()
    
  }


}
