import { Component } from '@angular/core';
import { Remind } from '../../../shared/remind/remind';
import { Leftsidebar } from '../../../shared/leftsidebar/leftsidebar';
import { Search } from '../../../shared/search/search';
import { Paginate } from '../../../shared/paginate/paginate';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-documents',
  imports: [Remind, Leftsidebar, Search, Paginate, CommonModule],
  templateUrl: './documents.html',
  styleUrl: './documents.scss',
})
export class Documents {
  // Mảng dữ liệu cho các lớp học (12 items như trong HTML gốc của bạn)
  classes = Array(12)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      name: 'Toán 4 - N2 - HAUGFAL',
      time: '18:30, 20/10/2024',
      avatars: Array(5).fill('avatar.png'), // 5 avatar mẫu, bạn có thể thay bằng mảng URL thực tế
      bgImage: 'bg-auth.jpg',
    }));

  // Nếu cần xử lý click button
  viewDetails(item: any) {
    console.log('Xem chi tiết:', item);
    // Logic navigate hoặc mở modal ở đây
  }
}
