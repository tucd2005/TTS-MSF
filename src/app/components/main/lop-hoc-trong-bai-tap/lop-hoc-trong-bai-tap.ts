import { Component } from '@angular/core';
import { Leftsidebar } from "../../../shared/leftsidebar/leftsidebar";
import { Remind } from "../../../shared/remind/remind";
import { CommonModule } from '@angular/common';
import { Search } from "../../../shared/search/search";
import { ModalLophoc } from "../../../modal/modal-lophoc/modal-lophoc";

@Component({
  selector: 'app-lop-hoc-trong-bai-tap',
  standalone: true,
  imports: [Leftsidebar, Remind, CommonModule, Search, ModalLophoc],
  templateUrl: './lop-hoc-trong-bai-tap.html',
  styleUrl: './lop-hoc-trong-bai-tap.scss'
})
export class LopHocTrongBaiTap {
    showModal = false;
    openModal() {
      this.showModal = true;
    }
    closeModal() {
      this.showModal = false
    }
}
