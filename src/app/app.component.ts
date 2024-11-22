import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule , MatSidenavModule,MatToolbarModule , MatListModule , MatIconModule , CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'full_stack_tast';
  isMobile: boolean = false;
  sidebar: any = [
    {
      id: 1,
      icon: 'assets/images/sidebar/Home.svg',
      name: 'Products',
      path: './products',
      active: { exact: true },
    },
    {
      id: 2,
      icon: 'assets/images/sidebar/ready.svg',
      name: 'Orders',
      path: './orders',
      active: { exact: false },
    },
    {
      id: 3,
      icon: 'assets/images/sidebar/User.svg',
      name: 'Users',
      path: './users',
      active: { exact: false },
    },



  ];
}
