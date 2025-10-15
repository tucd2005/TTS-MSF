import { Component } from '@angular/core';
import { Button } from "../../../../shared/button/button";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-step-2-verify',
  imports: [Button, RouterLink],
  standalone: true,
  templateUrl: './step-2-verify.html',
  styleUrl: './step-2-verify.scss'
})
export class Step2Verify {

}
