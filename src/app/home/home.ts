import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  welcomeMessage = "Chào mừng bạn đến với Trang chủ hiện đại!"
  isContentVisible = true
}
