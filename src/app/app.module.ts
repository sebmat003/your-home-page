import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NotesComponent } from './notes/notes.component';
import { OptionsComponent } from './options/options.component';
import { LinksComponent } from './links/links.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { GmailComponent } from './gmail/gmail.component';
import { ToolsComponent } from './tools/tools.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { AddLinkComponent } from './add-link/add-link.component';
import { LinkComponent } from './links/link/link.component';
import { NoteComponent } from './notes/note/note.component';
import { StopwatchComponent } from './tools/stopwatch/stopwatch.component';
import { CalculatorComponent } from './tools/calculator/calculator.component';
import { TimerComponent } from './tools/timer/timer.component';
import {UserModule} from "./user/user.module";

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    NotesComponent,
    OptionsComponent,
    LinksComponent,
    SearchPanelComponent,
    GmailComponent,
    ToolsComponent,
    AddNoteComponent,
    AddLinkComponent,
    LinkComponent,
    NoteComponent,
    StopwatchComponent,
    CalculatorComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
