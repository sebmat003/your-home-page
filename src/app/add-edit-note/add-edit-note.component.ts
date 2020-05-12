import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {NoteService} from "../shared/note.service";

@Component({
  selector: 'app-add-edit-note',
  templateUrl: './add-edit-note.component.html',
  styleUrls: ['./add-edit-note.component.scss']
})
export class AddEditNoteComponent implements OnInit {
  contentValue: string = '';
  @Input() currentNote;

  constructor(public noteService: NoteService) { }

  ngOnInit(): void {
    if(this.noteService.editExisting) {
      this.contentValue = this.noteService.currentEditedNote.content;
    }
  }

  close() {
    if(this.noteService.preventFromInstantCloseWindow) {
      this.noteService.addNew = false;
      this.noteService.editExisting = false;
      this.noteService.preventFromInstantCloseWindow = false;
    } else {
      this.noteService.preventFromInstantCloseWindow = true;
    }

  }

  clear() {
    this.contentValue = '';
  }

  add() {
    this.noteService.addNew = false;
    this.noteService.preventFromInstantCloseWindow = false;
    this.noteService.addNote(this.contentValue);
  }

  save() {
    this.noteService.editExisting = false;
    this.noteService.preventFromInstantCloseWindow = false;
    this.noteService.editNote(this.contentValue);
  }
}
