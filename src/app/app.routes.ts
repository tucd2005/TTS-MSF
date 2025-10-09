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
import { ClassSchedule } from './components/main/class-schedule/class-schedule';
import { Policy } from './components/main/policy/policy';
import { Documents } from './components/main/documents/documents';
import { Exercises } from './components/main/exercises/exercises';
import { ThongTinTaiKhoan } from './components/auth/thong-tin-tai-khoan/thong-tin-tai-khoan';
import { ThongBaoThanhCong } from './components/auth/thong-bao-thanh-cong/thong-bao-thanh-cong';
import { AdminDashboard } from './components/main/admin-dashboard/admin-dashboard';
import { Profile } from './components/main/profile/profile';

export const routes: Routes = [
    { path: "home", component: Home },
    { path: "", redirectTo: '/home', pathMatch: "full" },

    { path: "header", component: Header },
    { path: "thong-tin-tai-khoan", component: ThongTinTaiKhoan },
    { path: "thong-bao", component: ThongBaoThanhCong },

    { path: "admin", component: AdminDashboard },
    {
        path: "", component: MainLayout,
        children: [
            { path: "mission", component: Mission },
            { path: "dashboard", component: Dashboard },
            { path: "class-schedule", component: ClassSchedule },
            { path: "policy", component: Policy },
            { path: "document", component: Documents },
            { path: "exercise", component: Exercises },
            { path: "profile", component: Profile },

        ]
    },

    {
        path: 'auth',
        component: AuthLayout,
        children: [
            { path: "register", component: Register },
            { path: "login", component: Login },
            { path: "forgot-password", component: ForgotPassword },
            { path: "change-password", component: ChangePassword },
        ]
    }
];
