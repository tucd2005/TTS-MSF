import { Component } from '@angular/core';
import { Remind } from "../../../shared/remind/remind";
import { Leftsidebar } from "../../../shared/leftsidebar/leftsidebar";
import { Search } from "../../../shared/search/search";

@Component({
  selector: 'app-documents',
  imports: [Remind, Leftsidebar, Search],
  templateUrl: './documents.html',
  styleUrl: './documents.scss'
})
export class Documents {

}
