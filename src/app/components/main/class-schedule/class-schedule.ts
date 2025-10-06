import { Component } from '@angular/core';

@Component({
  selector: 'app-class-schedule',
  standalone: true,
  imports: [],
  templateUrl: './class-schedule.html',
  styleUrl: './class-schedule.scss'
})
export class ClassSchedule {
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  timeSlots = [
    {
      time: '15:20',
      date: '30/08/2025',
      missions: [
        { text: '', dot: '#aaa' },
        { text: '', dot: '#aaa' },
        { text: '', dot: '#aaa' },
        { text: '', dot: '#aaa' },
        { text: '', dot: '#aaa' },
      ]
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
      ]
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
      ]
    },
  ];
}
