import { Component } from '@angular/core';
import { Leftsidebar } from "../../../shared/leftsidebar/leftsidebar";
import { Remind } from "../../../shared/remind/remind";

@Component({
  selector: 'app-lop-hoc-trong-bai-tap',
  standalone: true,
  imports: [Leftsidebar, Remind],
  templateUrl: './lop-hoc-trong-bai-tap.html',
  styleUrl: './lop-hoc-trong-bai-tap.scss'
})
export class LopHocTrongBaiTap {

}
