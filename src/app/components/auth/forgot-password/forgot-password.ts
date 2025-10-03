import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from "../../../shared/button/button";

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [RouterLink, Button],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.scss'
})
export class ForgotPassword {

}
