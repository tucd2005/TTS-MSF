import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {
  @Input() buttonClass: string = 'auth__button'; 
  @Input() type: 'button' | 'submit' | 'reset' = 'submit'; 
  @Input() disabled: boolean = false; 
}
