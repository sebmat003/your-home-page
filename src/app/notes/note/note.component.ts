import {Component, Input, OnInit} from '@angular/core';
import {NoteService} from "../../shared/note.service";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() note: any;
  hoverOnNote: boolean = false;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {

  }

  editNote(id: number, content: string) {
    this.noteService.editExisting = true;
    this.noteService.currentEditedNote = {
      id: id,
      content: content
    }
  }

  removeNote(id: number) {
    this.noteService.removeNote(id);
  }

  mouseHover() {
    this.hoverOnNote = true;
  }

  mouseLeave() {
    this.hoverOnNote = false;
  }
}
