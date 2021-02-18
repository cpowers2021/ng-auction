import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ProductComponent } from './product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [ProductComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild([
    {path: '', component: ProductComponent}
    ])
  ]
})
export class ProductModule { }
