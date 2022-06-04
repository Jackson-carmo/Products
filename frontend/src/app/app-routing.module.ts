import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsReadComponent } from './component/views/products/products-read/products-read.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
