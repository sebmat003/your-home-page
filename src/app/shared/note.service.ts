import {Injectable} from "@angular/core";

@Injectable()
export class NoteService {
  editExisting: boolean = false;
  addNew: boolean = false;
  preventFromInstantCloseWindow: boolean = false;
  notes = [
    {
      id: 1,
      content: 'do somethingggggggggggggggggggggggggggggggggggggsssssssssssssssssssssssssssssssfasddasdasdasdasdasdasdasdasdasdasfasd asd asd asda sdas das das dasdasdasd as das ads '
    },
    {
      id: 2,
      content: 'clean dishes'
    },
    {
      id: 3,
      content: 'make dinner'
    },
    {
      id: 4,
      content: 'go shopping and walk with a dog'
    },
    {
      id: 5,
      content: 'go shopping and walk with a dog'
    },
    {
      id: 6,
      content: 'go shopping and walk with a dog'
    },
    {
      id: 7,
      content: 'go shopping and walk with a dog'
    }
  ]

  currentEditedNote = {
    id: null,
    content: null
  };

  constructor() {
  }

  addNote (content: string) {
    let id: number;
    if (this.notes.length == 0) {
      id = 1;
    } else {
      id = this.notes[this.notes.length - 1].id + 1
    }
    this.notes.push({
      id: id,
      content: content
    })
  }

  editNote (content: string) {
    this.notes[this.findItem(this.currentEditedNote.id)].content = content;
  }

  removeNote (id: number) {
    this.notes.splice(this.findItem(id),1);
  }

  findItem(id: number) {
    let index;
    this.notes.forEach((item) => {
      if(item.id == id) {
        index = this.notes.indexOf(item);
      }
    })
    return index;
  }

}
