import { Component, OnInit } from '@angular/core';
import {XunkCalendarModule} from "xunk-calendar";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  time: number = Date.now()
  date = { date:1, month:1, year:1 };

  constructor() {
    this.date = XunkCalendarModule.getToday();
  }

  ngOnInit(): void {
    setInterval(()=> {
      this.time = Date.now();
    }, 1000)
  }

}
