import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-success',
  imports: [],
  templateUrl: './modal-success.html',
  styleUrl: './modal-success.scss'
})
export class ModalSuccess {
    @Input() isOpen = false;
    @Output() closed = new EventEmitter<void>();

    onClose() {
      this.closed.emit()
    }
}
