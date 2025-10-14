import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bai-tap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bai-tap.html',
  styleUrls: ['./bai-tap.scss'],
})
export class BaiTap {
  questions = [
    {
      id: 1,
      text: `1/ Trong một buổi thực hành Vật lý, một học sinh tiến hành thí nghiệm đo gia tốc rơi tự do của một vật bằng cách thả vật từ độ cao h = 5m.
      Sau khi tính toán, học sinh thu được kết quả g = 9.8 m/s².
      Hỏi trong trường hợp này, đại lượng nào dưới đây là sai số tuyệt đối của phép đo nếu giá trị thực tế của g là 9.81 m/s²?`,
      answers: [
        { key: 'A', text: '0.01 m/s²' },
        { key: 'B', text: '0.02 m/s²' },
        { key: 'C', text: '0.1 m/s²' },
        { key: 'D', text: '0.001 m/s²' },
      ],
    },
    {
      id: 2,
      text: `2/ Cho đoạn văn sau:
      "Người lái đò sông Đà là một trong những truyện ngắn xuất sắc của nhà văn Nguyễn Tuân,
      thể hiện rõ nét phong cách tài hoa, uyên bác và cái nhìn độc đáo của ông về thiên nhiên và con người lao động."
      Theo đoạn văn trên, nội dung chính của tác phẩm là gì?`,
      answers: [
        { key: 'A', text: 'Ca ngợi vẻ đẹp thiên nhiên Tây Bắc và người lao động' },
        { key: 'B', text: 'Phê phán sự khắc nghiệt của thiên nhiên' },
        { key: 'C', text: 'Miêu tả cảnh chiến đấu giữa con người và thiên nhiên' },
        { key: 'D', text: 'Khẳng định vai trò của người nghệ sĩ trong văn học' },
      ],
    },
    {
      id: 3,
      text: `2/ Cho đoạn văn sau:
      "Người lái đò sông Đà là một trong những truyện ngắn xuất sắc của nhà văn Nguyễn Tuân,
      thể hiện rõ nét phong cách tài hoa, uyên bác và cái nhìn độc đáo của ông về thiên nhiên và con người lao động."
      Theo đoạn văn trên, nội dung chính của tác phẩm là gì?`,
      answers: [
        { key: 'A', text: 'Ca ngợi vẻ đẹp thiên nhiên Tây Bắc và người lao động' },
        { key: 'B', text: 'Phê phán sự khắc nghiệt của thiên nhiên' },
        { key: 'C', text: 'Miêu tả cảnh chiến đấu giữa con người và thiên nhiên' },
        { key: 'D', text: 'Khẳng định vai trò của người nghệ sĩ trong văn học' },
      ],
    },
    {
      id: 4,
      text: `2/ Cho đoạn văn sau:
      "Người lái đò sông Đà là một trong những truyện ngắn xuất sắc của nhà văn Nguyễn Tuân,
      thể hiện rõ nét phong cách tài hoa, uyên bác và cái nhìn độc đáo của ông về thiên nhiên và con người lao động."
      Theo đoạn văn trên, nội dung chính của tác phẩm là gì?`,
      answers: [
        { key: 'A', text: 'Ca ngợi vẻ đẹp thiên nhiên Tây Bắc và người lao động' },
        { key: 'B', text: 'Phê phán sự khắc nghiệt của thiên nhiên' },
        { key: 'C', text: 'Miêu tả cảnh chiến đấu giữa con người và thiên nhiên' },
        { key: 'D', text: 'Khẳng định vai trò của người nghệ sĩ trong văn học' },
      ],
    },
    {
      id: 5,
      text: `2/ Cho đoạn văn sau:
      "Người lái đò sông Đà là một trong những truyện ngắn xuất sắc của nhà văn Nguyễn Tuân,
      thể hiện rõ nét phong cách tài hoa, uyên bác và cái nhìn độc đáo của ông về thiên nhiên và con người lao động."
      Theo đoạn văn trên, nội dung chính của tác phẩm là gì?`,
      answers: [
        { key: 'A', text: 'Ca ngợi vẻ đẹp thiên nhiên Tây Bắc và người lao động' },
        { key: 'B', text: 'Phê phán sự khắc nghiệt của thiên nhiên' },
        { key: 'C', text: 'Miêu tả cảnh chiến đấu giữa con người và thiên nhiên' },
        { key: 'D', text: 'Khẳng định vai trò của người nghệ sĩ trong văn học' },
      ],
    },
  ];

activeTab: 'project' | 'notice' = 'project';


}
