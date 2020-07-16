import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';
import { Store } from '@ngrx/store';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-received',
  templateUrl: './received.component.html',
  styleUrls: ['./received.component.scss']
})
export class ReceivedComponent implements OnInit {

  received$: Observable<Item[]>;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
  this.received$ =  this.store
  .pipe(
    map(data => data.received.received)
  );
  }
}
