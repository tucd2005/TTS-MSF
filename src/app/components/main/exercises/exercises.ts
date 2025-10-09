import { Component } from '@angular/core';
import { Leftsidebar } from "../../../shared/leftsidebar/leftsidebar";
import { Remind } from "../../../shared/remind/remind";
import { Search } from "../../../shared/search/search";
import { RightExercise } from "../../../shared/right-exercise/right-exercise";

@Component({
  selector: 'app-exercises',
  imports: [Leftsidebar, Search, RightExercise],
  templateUrl: './exercises.html',
  styleUrl: './exercises.scss'
})
export class Exercises {

}
