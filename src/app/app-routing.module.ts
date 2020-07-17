import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items/items.component';


const routes: Routes = [
  {path:"home", component: ItemsComponent},
  {
    path:"items",
    loadChildren:() => import("./items/items.module").then(m => m.ItemsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
