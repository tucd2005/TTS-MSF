import { Component } from '@angular/core';
import { ModalDashboard } from "../../../modal/modal-dashboard/modal-dashboard";

@Component({
  selector: 'app-dashboard',
  imports: [ModalDashboard],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class Dashboard {
  isModalOpen = false;
  activeTab: 'project' | 'notice' = 'project';

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
