import { Component } from '@angular/core';
import { Leftsidebar } from '../../../shared/leftsidebar/leftsidebar';
import { Remind } from '../../../shared/remind/remind';
import { CommonModule } from '@angular/common';
import { Paginate } from '../../../shared/paginate/paginate';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-class',
  imports: [Remind, CommonModule, Paginate, RouterLink],
  templateUrl: './list-class.html',
  styleUrl: './list-class.scss',
})
export class ListClass {
  listClass = Array(10).fill({
    name: 'Toán 4 - N2 - 24638742',
    teacher: 'Nguyen Huong Van',
    time: '12:57 18/05/2025',
    image: 'bg-auth.jpg', // thay ảnh lớp thật
  });
}
