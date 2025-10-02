import { Component } from '@angular/core';
import { Button } from "../shared/button/button";

@Component({
  selector: 'app-home',
  imports: [Button],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  welcomeMessage = "Chào mừng bạn đến với Trang chủ hiện đại!"
  isContentVisible = true
}
