import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NotesComponent } from './notes/notes.component';
import { OptionsComponent } from './options/options.component';
import { LinksComponent } from './links/links.component';
import { ToolsComponent } from './tools/tools.component';
import { AddEditNoteComponent } from './add-edit-note/add-edit-note.component';
import {AddEditLinkComponent} from './add-edit-link/add-edit-link.component';
import { LinkComponent } from './links/link/link.component';
import { NoteComponent } from './notes/note/note.component';
import { StopwatchComponent } from './tools/stopwatch/stopwatch.component';
import { CalculatorComponent } from './tools/calculator/calculator.component';
import { TimerComponent } from './tools/timer/timer.component';
import {UserModule} from "./user/user.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {XunkCalendarModule} from "xunk-calendar";
import {NoteService} from "./shared/note.service";
import {ClickOutsideDirective} from "./directives/click-outside.directive";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {LinkService} from "./shared/link.service";
import {DatePipe} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    NotesComponent,
    OptionsComponent,
    LinksComponent,
    ToolsComponent,
    AddEditNoteComponent,
    AddEditLinkComponent,
    LinkComponent,
    NoteComponent,
    StopwatchComponent,
    CalculatorComponent,
    TimerComponent,
    ClickOutsideDirective
  ],
  imports: [
    BrowserModule,
    UserModule,
    BrowserAnimationsModule,
    XunkCalendarModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    NoteService,
    LinkService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
