import { Component } from '@angular/core';
import { Header } from "../../../shared/header/header";

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [Header],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.scss'
})
export class AdminDashboard {

}
