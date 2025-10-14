import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-modal-lophoc',
  imports: [RouterLink],
  templateUrl: './modal-lophoc.html',
  styleUrl: './modal-lophoc.scss',
})
export class ModalLophoc {
  @Input() isOpen = false;
  @Output() closed = new EventEmitter<void>();

  onClose() {
    this.closed.emit();
  }
}
