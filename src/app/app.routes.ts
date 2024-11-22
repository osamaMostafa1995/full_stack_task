import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  {
    path:'products',
    loadComponent:()=> import('./Components/products/products.component').then((m)=>m.ProductsComponent)
},
{
  path:'orders',
  loadComponent:()=> import('./Components/orders/orders.component').then((m)=>m.OrdersComponent)
},
{
  path:'users',
  loadComponent:()=> import('./Components/users/users.component').then((m)=>m.UsersComponent)
},
  { path: '**', redirectTo: 'home' }
];
