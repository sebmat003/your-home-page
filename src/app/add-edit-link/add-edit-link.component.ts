import {Component, Input, OnInit} from '@angular/core';
import {LinkService} from "../shared/link.service";
import {Link} from "../links/link/link.model";

@Component({
  selector: 'app-add-edit-link',
  templateUrl: './add-edit-link.component.html',
  styleUrls: ['./add-edit-link.component.scss']
})
export class AddEditLinkComponent implements OnInit {
  @Input() currentLink;
  urlValue: string = '';

  constructor(public linkService: LinkService) {
    if(this.linkService.editExisting) {
      this.urlValue = this.linkService.currentLink.url;
    }
  }

  ngOnInit(): void {
  }

  close() {
    if(this.linkService.preventFromInstantCloseWindow) {
      this.linkService.addNew = false;
      this.linkService.editExisting = false;
      this.linkService.preventFromInstantCloseWindow = false;
    } else {
      this.linkService.preventFromInstantCloseWindow = true;
    }
  }

  clear() {
    this.urlValue = '';
  }

  add() {
    this.linkService.addNew = false;
    this.linkService.preventFromInstantCloseWindow = false;
    let links = this.linkService.defaultLinks;
    let link: Link = {
      id: links[links.length - 1].id + 1,
      url: this.urlValue,
      last_visit: Date.now(),
      number_of_visits: 0
    }
    this.linkService.newLink(link);
  }

  save() {
    this.linkService.editExisting = false;
    this.linkService.preventFromInstantCloseWindow = false;
    let id = this.currentLink.id;
    let url = this.currentLink.url;
    this.linkService.editLink(id, url);
  }
}
