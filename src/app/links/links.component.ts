import { Component, OnInit } from '@angular/core';
import {LinkService} from "../shared/link.service";
import {Link} from "./link/link.model";

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {
  links: Link[];
  indexOfLink: number;

  constructor(private linkService: LinkService) { }

  ngOnInit(): void {
    this.links = this.linkService.defaultsLinks;
    this.sortByNumberOfVisitsDesc(this.links);
  }

  sortByNumberOfVisitsDesc(array: Link[]) {
    array.sort((a, b) => {
        return b.number_of_visits - a.number_of_visits;
    } )
  }

}
