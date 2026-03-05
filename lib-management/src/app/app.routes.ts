import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { BookListComponent } from './books/book-list.component';
import { BookDetailComponent } from './books/book-detail.component';
import { AdminComponent } from './admin/admin-dashboard.component';

export const routes: Routes = [

{ path:'', redirectTo:'login', pathMatch:'full' },

{ path:'login', component:LoginComponent },

{ path:'books', component:BookListComponent },

{ path:'book/:id', component:BookDetailComponent },

{ path:'admin', component:AdminComponent }

];