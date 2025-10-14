import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from '../../shared/button/button';

@Component({
  selector: 'app-modal-dashboard',
  imports: [Button],
  standalone: true,
  templateUrl: './modal-dashboard.html',
  styleUrl: './modal-dashboard.scss',
})
export class ModalDashboard {
  @Input() isOpen = false; // nhận từ parent
  @Output() close = new EventEmitter<void>();

  activeTab: 'project' | 'notice' = 'project';

  handleClose() {
    this.close.emit();
  }
}
