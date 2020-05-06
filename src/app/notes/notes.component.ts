import { Component, OnInit } from '@angular/core';
import {NoteService} from "../shared/note.service";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notes;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.notes = this.noteService.notes;
  }

  addNote() {
    this.noteService.addNew = true;
  }
}
