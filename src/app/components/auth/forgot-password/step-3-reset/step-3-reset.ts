import { Component } from '@angular/core';
import { Button } from '../../../../shared/button/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-step-3-reset',
  standalone: true,

  imports: [Button, RouterLink],
  templateUrl: './step-3-reset.html',
  styleUrl: './step-3-reset.scss',
})
export class Step3Reset {}
