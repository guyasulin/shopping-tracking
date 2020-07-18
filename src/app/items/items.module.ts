import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceivedComponent } from './received/received.component';
import { ItemListComponent } from './item-list/item-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemAddComponent } from './item-add/item-add.component';

import { AngularMaterialModule } from '../angular-material/angular-material.module';

import { MAT_DATE_LOCALE } from '@angular/material/core';
import { StoreListComponent } from './store-list/store-list.component';
import { ItemsComponent } from './items.component';
import { SortDataPipe } from '../pipes/sort-data.pipe';
import { ItemCasePipeDirective } from './Directive/item-case-pipe.directive';

const routes: Routes = [
	{ path: 'item-list', component: ItemListComponent },
	{ path: 'received', component: ReceivedComponent },
	{ path: 'items', component: ItemsComponent },
	{ path: 'add', component: ItemAddComponent },
];


@NgModule({
  declarations: [
    ReceivedComponent, 
    ItemListComponent, 
    ItemAddComponent,
    StoreListComponent,
    ItemsComponent,
    SortDataPipe,
    ItemCasePipeDirective,
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
  ],
	exports: [ 
		ItemListComponent, 
    ReceivedComponent,
    ItemAddComponent,
    StoreListComponent,
    ItemsComponent,
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'en-GB'}],
  
})
export class ItemsModule { }
