import { Component } from '@angular/core';
import { Remind } from "../../../shared/remind/remind";
import { Leftsidebar } from "../../../shared/leftsidebar/leftsidebar";

@Component({
  selector: 'app-documents',
  imports: [Remind, Leftsidebar],
  templateUrl: './documents.html',
  styleUrl: './documents.scss'
})
export class Documents {

}
