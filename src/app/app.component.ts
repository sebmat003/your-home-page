import { Component } from '@angular/core';
import {NoteService} from "./shared/note.service";
import {LinkService} from "./shared/link.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'your-home-page';

  constructor(public noteService: NoteService, public linkService: LinkService) {

  }
}
