import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ItemState } from '../item-list/store/item.reducer';
import * as fromAction from '../item-list/store/item.action';
 
@Component({
	selector: 'app-item-add',
	templateUrl: './item-add.component.html',
	styleUrls: [ './item-add.component.scss' ],
})
export class ItemAddComponent implements OnInit {
	
	constructor(private store: Store<ItemState>, private route: ActivatedRoute,   private router: Router) {}

	ngOnInit(): void {}

	
	onSubmit(f: NgForm) {
		this.store.dispatch(fromAction.addItem({ item: f.value }));
		this.router.navigate(['/home'])
	}
}
