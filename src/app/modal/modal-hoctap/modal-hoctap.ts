import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-modal-hoctap',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './modal-hoctap.html',
  styleUrls: ['./modal-hoctap.scss'],
})
export class ModalHoctap {
  @Input() isOpen = false;
  @Output() closed = new EventEmitter<void>();

  onClose() {
    this.closed.emit();
  }
}
