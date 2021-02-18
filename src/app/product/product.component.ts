import { filter, map, switchMap} from 'rxjs/operators';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product, ProductService } from '../shared/product.service';
@Component({
  selector: 'nga-product',
  styleUrls: [ './product.component.scss' ],
  templateUrl: './product.component.html'
  })
export class ProductComponent {
   product$: Observable<Product>;
   suggestedProducts$: Observable<Product[]>;
constructor(private route: ActivatedRoute, private productService: ProductService) {
  this.product$ = this.route.paramMap.pipe(
  map(params => parseInt(params.get('productId') || '', 10)),
  filter(productId => !!productId),
  switchMap(productId => this.productService.getById(productId))
);
//get all parameters/variables (productId): when retrieve, take productId, parse to a number, find product
  this.suggestedProducts$ = this.productService.getAll();
}
}
