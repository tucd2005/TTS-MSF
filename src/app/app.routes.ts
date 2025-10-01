import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Header } from './shared/header/header';
import { Register } from './auth/register/register';

export const routes: Routes = [
    {path: "home", component: Home},
    {path: "" , redirectTo: '/home', pathMatch: "full"},
    
    {path: "header", component: Header},
    {path: "register", component: Register},

];
