import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const APP_ROUTES: Routes = [
    { path: 'products', component: ProductListComponent },
    { path: 'cart', component: CartComponent },
    { path : 'checkout', component: CheckoutComponent },
    { path: '',  redirectTo: 'products', pathMatch: 'full' },
    { path: '**', component: PagenotfoundComponent},
];
