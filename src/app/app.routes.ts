import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'productos', component: ProductComponent },
    { path: 'carrito',component:CartComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' }, 
    { path: '**', redirectTo: '/home' } 

];
