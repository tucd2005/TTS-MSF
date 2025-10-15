import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from "../../../shared/button/button";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, Button],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

}
