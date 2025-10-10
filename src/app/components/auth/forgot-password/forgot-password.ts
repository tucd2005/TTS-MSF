import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Button } from "../../../shared/button/button";

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.scss'
})
export class ForgotPassword {

}
