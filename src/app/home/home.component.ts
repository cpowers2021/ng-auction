import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Component} from '@angular/core';
import {MediaObserver} from '@angular/flex-layout';
import {Product, ProductService} from '../shared/services/product.service';

@NgModule({
  imports: [
  CommonModule,
  RouterModule.forChild([
  {path: '', component: HomeComponent}
  ]),
  FlexLayoutModule,
  MatGridListModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule {}

@Component({
  selector: 'nga-home',
  styleUrls: [ './home.component.scss' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  readonly columns$: Observable<number>;
  readonly products$: Observable<Product[]>;
  readonly breakpointsToColumnsNumber = new Map([
  [ 'xs', 1 ],
  [ 'sm', 2 ],
  [ 'md', 3 ],
  [ 'lg', 4 ],
  [ 'xl', 5 ],
]);
constructor(private media: MediaObserver,
  private productService: ProductService) {
  this.products$ = this.productService.getAll();
  this.columns$ = this.media.media$()
  .pipe(
  map(mc => <number>this.breakpointsToColumnsNumber.get(mc.mqAlias))
  );
  }
ngOnInit(): void {}
}
