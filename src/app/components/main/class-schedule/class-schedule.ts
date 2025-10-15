import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Thêm để dùng ngModel

@Component({
  selector: 'app-class-schedule',
  standalone: true,
  imports: [CommonModule, FormsModule], // Thêm FormsModule
  templateUrl: './class-schedule.html',
  styleUrl: './class-schedule.scss',
})
export class ClassSchedule {
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  timeSlots = [
    // ... (giữ nguyên data như bạn cung cấp, 5 slots)
    {
      time: '15:20',
      date: '30/08/2025',
      missions: [
        { text: '', dot: '#aaa' },
        { text: '', dot: '#aaa' },
        { text: '', dot: '#aaa' },
        { text: '', dot: '#aaa' },
        { text: '', dot: '#aaa' },
      ],
    },
    {
      time: '15:20',
      date: '30/08/2025',
      missions: [
        { text: 'Tiết toán - Clan', dot: '#0070f3' },
        { text: '', dot: '#aaa' },
        { text: 'Nộp bài kiểm tra', dot: '#ff0000' },
        { text: '', dot: '#aaa' },
        { text: '', dot: '#aaa' },
      ],
    },
    {
      time: '15:20',
      date: '30/08/2025',
      missions: [
        { text: '', dot: '#aaa' },
        { text: '', dot: '#aaa' },
        { text: 'Nộp bài kiểm tra', dot: '#ff0000' },
        { text: '', dot: '#aaa' },
        { text: '', dot: '#aaa' },
      ],
    },
    {
      time: '15:20',
      date: '30/08/2025',
      missions: [
        { text: '', dot: '#aaa' },
        { text: '', dot: '#aaa' },
        { text: '', dot: '#aaa' },
        { text: '', dot: '#aaa' },
        { text: '', dot: '#aaa' },
      ],
    },
    {
      time: '15:20',
      date: '30/08/2025',
      missions: [
        { text: '', dot: '#aaa' },
        { text: '', dot: '#aaa' },
        { text: '', dot: '#aaa' },
        { text: '', dot: '#aaa' },
        { text: '', dot: '#aaa' },
      ],
    },
  ];

  // Track cell đang edit: 'slotIndex-missionIndex' hoặc null
  editingCell: string | null = null;

  // Temp value cho input khi editing
  editText: string = '';

  getDotClass(dotHex: string): string {
    const hex = dotHex.toLowerCase();
    if (hex === '#ff0000' || hex === '#ff4d4f') return 'red';
    if (hex === '#0070f3' || hex === '#1890ff') return 'blue';
    return 'gray';
  }

  // Bắt đầu edit: set editingCell và copy text hiện tại
  startEdit(slotIndex: number, missionIndex: number, currentText: string) {
    this.editingCell = `${slotIndex}-${missionIndex}`;
    this.editText = currentText;
  }

  // Lưu edit: cập nhật data và reset
  saveEdit(slotIndex: number, missionIndex: number) {
    if (this.editingCell) {
      this.timeSlots[slotIndex].missions[missionIndex].text = this.editText.trim();
      this.editingCell = null;
      this.editText = '';
    }
  }

  // Hủy edit: reset mà không lưu
  cancelEdit() {
    this.editingCell = null;
    this.editText = '';
  }

  // Kiểm tra cell có đang edit không
  isEditing(slotIndex: number, missionIndex: number): boolean {
    return this.editingCell === `${slotIndex}-${missionIndex}`;
  }
}
