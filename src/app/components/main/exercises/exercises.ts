import { Component } from '@angular/core';
import { Leftsidebar } from "../../../shared/leftsidebar/leftsidebar";
import { Remind } from "../../../shared/remind/remind";

@Component({
  selector: 'app-exercises',
  imports: [Leftsidebar, Remind],
  templateUrl: './exercises.html',
  styleUrl: './exercises.scss'
})
export class Exercises {

}
