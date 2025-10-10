import { Component } from '@angular/core';
import { Button } from "../../../../shared/button/button";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-step-1-email',
  standalone: true,
  imports: [Button, RouterLink],
  templateUrl: './step-1-email.html',
  styleUrl: './step-1-email.scss'
})
export class Step1Email {

}
