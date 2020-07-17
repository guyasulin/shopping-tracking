import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Item } from '../models/item.model';
import { Store, select } from '@ngrx/store';
import { getItems } from '../item-list/store/item.selector';
import { ItemService } from './../services/item.service';
import { Rates } from '../models/currency.model';
import * as fromActionRecevied from '../../items/received/store/received.action';
import * as fromItem from '../item-list/store/item.reducer';
import * as fromAction from '../item-list/store/item.action';

@Component({
	selector: 'app-item-list',
	templateUrl: './item-list.component.html',
	styleUrls: [ './item-list.component.scss' ]
})
export class ItemListComponent implements OnInit {
	public items$: Observable<Item[]>;
	public subscription: Subscription;
	public currenyRate: Rates;
	public errorMessage: string = '';
	public isLoading = true;

	constructor(private store: Store<fromItem.ItemState>, public itemService: ItemService) {}

	ngOnInit(): void {
		this.itemService.updatedCurrency$.subscribe(
			(data) => {
				if(this.errorMessage) {
					this.errorMessage = '';
				}
				this.currenyRate = data;
				this.isLoading = false;
			},
			(err) => {
				this.errorMessage = "Server Is Unreachable"
				this.isLoading = false
				return err;
			}
		);

		this.getItems();
	}

	getItems() {
		this.items$ = this.store.pipe(
			select(getItems));
	}

	receivedItem(item: Item) {
		this.store.dispatch(fromActionRecevied.addItemTorecevied({ item }));
		this.deleteItem(item.id);
	}

	deleteItem(id) {
		this.store.dispatch(fromAction.removeItem({ id }));
	}
}
