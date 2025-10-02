import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {
    // dữ liệu đầu vào : Nội dung hiển thị trên nút 
    @Input() label: string = "Click Me";
    //  dữ liệu đầu vào : Màu sắc , kiểu dáng , vvv 
    @Input() type: "primary" | "secondary" = "primary"
    //  dư liệu đầu ra : sự kiện khi nút được bấm (dùng để thông báo cho component cha)
    //   @Output btnClick = new EventEmitter<void>();
}
