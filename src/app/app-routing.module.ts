import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '', () => import('./home/home.module').then(m => m.HomeModule),
},
{
  path: 'products/:productId', loadChildren: () =>
  import('./product/product.module').then(mod => mod.ProductModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
