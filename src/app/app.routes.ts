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
import { LopHocTrongBaiTap } from './components/main/lop-hoc-trong-bai-tap/lop-hoc-trong-bai-tap';
import { Step1Email } from './components/auth/forgot-password/step-1-email/step-1-email';
import { Step2Verify } from './components/auth/forgot-password/step-2-verify/step-2-verify';
import { Step3Reset } from './components/auth/forgot-password/step-3-reset/step-3-reset';
import { PopupRegister } from './components/auth/popup-register/popup-register';
import { ModalHoctap } from './modal/modal-hoctap/modal-hoctap';
import { LopHocTrongLopHoc } from './components/main/lop-hoc-trong-lop-hoc/lop-hoc-trong-lop-hoc';
import { BaiTap } from './components/main/bai-tap/bai-tap';
import { Teacher } from './components/main/teacher/teacher';
import { ListClass } from './components/main/list-class/list-class';
import { ListStudent } from './components/main/list-student/list-student';

export const routes: Routes = [
  // { path: "home", component: Home },
  // { path: "", redirectTo: '/home', pathMatch: "full" },

  { path: 'header', component: Header },
  { path: 'modal-hoctap', component: ModalHoctap },
  { path: 'thong-tin-tai-khoan', component: ThongTinTaiKhoan },
  { path: 'thong-bao', component: ThongBaoThanhCong },

  { path: 'admin', component: AdminDashboard },
  {
    path: '',
    component: MainLayout,
    children: [
      { path: 'mission', component: Mission },
      { path: 'dashboard', component: Dashboard },
      { path: 'class-schedule', component: ClassSchedule },
      { path: 'policy', component: Policy },
      { path: 'document', component: Documents },
      { path: 'exercise', component: Exercises },
      { path: 'profile', component: Profile },
      { path: 'lop-hoc', component: LopHocTrongBaiTap },
      { path: 'bai-tap', component: BaiTap },
      { path: 'class-of-class', component: LopHocTrongLopHoc },
      { path: 'profile-teacher', component: Teacher },
      { path: 'list-class', component: ListClass },
      { path: 'list-student', component: ListStudent },
    ],
  },

  { path: 'popup', component: PopupRegister },
  {
    path: 'auth',
    component: AuthLayout,
    children: [
      { path: 'register', component: Register },

      { path: 'login', component: Login },
      {
        path: 'forgot-password',
        component: ForgotPassword,
        children: [
          { path: '', redirectTo: 'email', pathMatch: 'full' },
          { path: 'email', component: Step1Email },
          { path: 'verify', component: Step2Verify },
          { path: 'reset', component: Step3Reset },
        ],
      },
    ],
  },
];
