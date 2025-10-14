import { Component } from '@angular/core';
import { Leftsidebar } from '../../../shared/leftsidebar/leftsidebar';
import { Search } from '../../../shared/search/search';
import { RightExercise } from '../../../shared/right-exercise/right-exercise';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalHoctap } from '../../../modal/modal-hoctap/modal-hoctap';

@Component({
  selector: 'app-exercises',
  imports: [Leftsidebar, Search, RightExercise, CommonModule, FormsModule, ModalHoctap],
  templateUrl: './exercises.html',
  styleUrl: './exercises.scss',
})
export class Exercises {
  exercises = [
    {
      name: 'Hương Vân',
      title: 'Hình chữ nhật dấu sao',
      result: 'AC',
      score: '100/100',
      level: 'PY3',
      avatar: 'avatar.png',
    },
    {
      name: 'Trọng Nghĩa',
      title: 'Đếm số nguyên tố',
      result: 'WA',
      score: '70/100',
      level: 'C++1',
      avatar: 'avatar.png',
    },
    {
      name: 'Khánh Linh',
      title: 'Dãy số Fibonacci',
      result: 'AC',
      score: '100/100',
      level: 'JS2',
      avatar: 'avatar.png',
    },
  ];

  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
