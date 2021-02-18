import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ProductComponent } from './product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { ProductSuggestionComponent } from './product-suggestion/product-suggestion.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [ProductComponent, ProductDetailComponent, ProductSuggestionComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatGridListModule,
    MatButtonModule,
    RouterModule.forChild([
    {path: '', component: ProductComponent}
    ])
  ]
})
export class ProductModule { }
