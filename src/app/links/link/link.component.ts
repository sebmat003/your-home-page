import {Component, Input, OnInit} from '@angular/core';
import {LinkService} from "../../shared/link.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {
  @Input() link;
  @Input() isBig: boolean;
  imageToShow: any;
  imageIsLoading: boolean;
  title: string;

  constructor(private linkService: LinkService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.getImageFromService(this.link.url);
    this.title = 'Last visit: ' + this.transformDate(this.link.last_visit) + '\n' + '' +
      'Number of clicks: ' + this.link.number_of_visits;
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", ()=> {
      this.imageToShow = reader.result;
      console.log(this.imageToShow);
    }, false)

    if(image) {
      reader.readAsDataURL(image);
    }
  }

  getImageFromService(url: string) {
    this.imageIsLoading = true;
    this.linkService.getIcon(url)
      .subscribe( (data) => {
        this.createImageFromBlob(data);
        this.imageIsLoading = false;
      }, error => {
        this.imageIsLoading = false;
        console.log(error);
      })
  }

  transformDate(date) {
    return this.datePipe.transform(date, 'dd.MM.yyyy');
  }

  clickOnLink() {
    window.open('https://' + this.link.url, '_blank');

  }
}
