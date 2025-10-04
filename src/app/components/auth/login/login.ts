import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from "../../../shared/button/button";
import { ValidationMessage } from "../../../shared/validation-message/validation-message";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, Button],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

}
