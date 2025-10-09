import { Component } from '@angular/core';
import { Remind } from "../remind/remind";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-right-exercise',
  imports: [Remind, RouterLink],
  standalone: true,
  templateUrl: './right-exercise.html',
  styleUrl: './right-exercise.scss'
})
export class RightExercise {

}
