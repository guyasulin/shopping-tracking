import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Item } from '../models/item.model';
import * as fromStore from './../item-list/store/item.reducer'
import { takeUntil } from 'rxjs/operators';
import { getItems } from './../item-list/store/item.selector';         
import { Subject } from 'rxjs';
import { Rates } from '../models/currency.model';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss']
})
export class StoreListComponent implements OnInit {

 public storeList = {};
 public takeUntill$: Subject<void> = new Subject<void>();
 public currenyRate: Rates;
  
  constructor(private store: Store<fromStore.ItemState>, public itemService: ItemService) { }

  ngOnInit(): void {
    this.store.pipe(
      select(getItems),
      takeUntil(this.takeUntill$)
      )
      .subscribe(data => {
      this.storeList = {};
      data.map((item: Item) => {
        this.storeList[item.onlineStore] = this.storeList[item.onlineStore] ? this.storeList[item.onlineStore] + item.price : item.price;
      })
    })

    this.itemService.updatedCurrency$
		.subscribe(
			data => {
				this.currenyRate = data;
			}
		);
  }

  ngOnDestroy() {
    this.takeUntill$.next();
    this.takeUntill$.complete();
  }
}
