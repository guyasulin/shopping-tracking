import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, Subject, EMPTY } from 'rxjs';
import { Item } from '../models/item.model';
import { Store, select } from '@ngrx/store';
import { getItems } from '../item-list/store/item.selector';
import { ItemService } from './../services/item.service';
import { Rates } from '../models/currency.model';
import { map, catchError } from 'rxjs/operators';
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
	private errorMessageSubject = new Subject<string>();
	errorMessage$ = this.errorMessageSubject.asObservable();

	constructor(private store: Store<fromItem.ItemState>, public itemService: ItemService) {}

	ngOnInit(): void {
		this.itemService.updatedCurrency$.subscribe(
			(data) => {
				this.currenyRate = data;
			},
			catchError((err) => {
				this.errorMessageSubject.next(err);
				return EMPTY;
			})
		);

		this.getItems();
	}

	getItems() {
		this.items$ = this.store.pipe(
			select(getItems),
			map((data) => {
				const temp = [ ...data ];
				return temp.sort(this.compareFn);
			})
		);
	}

	compareFn = (a: Item, b: Item) => {
		if (a.deliveryDate < b.deliveryDate) return 1;
		if (a.deliveryDate > b.deliveryDate) return -1;
		return 0;
	};

	receivedItem(item: Item) {
		this.store.dispatch(fromActionRecevied.addItemTorecevied({ item }));
		this.deleteItem(item.id);
	}

	deleteItem(id) {
		this.store.dispatch(fromAction.removeItem({ id }));
		console.log(id);
	}
}
