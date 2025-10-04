import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Header } from './shared/header/header';
import { Register } from './components/auth/register/register';
import { Login } from './components/auth/login/login';
import { AuthLayout } from './layout/auth-layout/auth-layout';
import { MainLayout } from './layout/main-layout/main-layout';
import { Mission } from './components/main/mission/mission';
import { ForgotPassword } from './components/auth/forgot-password/forgot-password';
import { ChangePassword } from './components/auth/change-password/change-password';
import { Dashboard } from './components/main/dashboard/dashboard';

export const routes: Routes = [
    {path: "home", component: Home},
    {path: "" , redirectTo: '/home', pathMatch: "full"},
    
    {path: "header", component: Header},

    {
        path: "", component: MainLayout,
        children: [
            {path: "mission", component: Mission},
            {path: "dashboard", component: Dashboard},
        ]
    },

    {
        path: 'auth',
        component: AuthLayout,
        children: [
            {path: "register", component: Register},
            {path: "login", component: Login},
            {path: "forgot-password", component: ForgotPassword},
            {path: "change-password", component: ChangePassword},
        ]
    }
];
