import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../items/models/item.model';

@Pipe({
  name: 'sortData',
  pure:false
})
export class SortDataPipe implements PipeTransform {

  transform(items: Item[], deliveryDate: any): unknown {

    return items.slice().sort((a, b) => new Date(b.deliveryDate).getTime() - new Date(a.deliveryDate).getTime());
    
  }
}
