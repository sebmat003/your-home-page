import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Link} from "../links/link/link.model";


@Injectable()
export class LinkService {
  addNew: boolean = false;
  editExisting: boolean = false;
  preventFromInstantCloseWindow: boolean = false;

  currentLink: Link = {
    id: null,
    number_of_visits: 0,
    last_visit: null,
    url: null
  }


  constructor(private http: HttpClient) {}

  getIcon(url: string): Observable<Blob> {
    return this.http.get('https://api.faviconkit.com/' + url + '/100', {responseType: "blob"})
  }

  newLink(link: Link) {
    this.defaultLinks.push(link);
  }

  editLink(id: number, url: string) {
    this.defaultLinks.forEach((link) => {
      if (link.id == id) {
        link.url = url;
      }
    })
  }

  updateLink(id: number, last_visit: number, number_of_clicks: number) {
    this.defaultLinks.forEach((link) => {
      if (link.id == id) {
        link.number_of_visits++;
        link.last_visit = last_visit;
      }
    })
  }

  defaultLinks: Link[] = [
    {
      id: 1,
      last_visit: Date.now(),
      number_of_visits: 15,
      url: 'youtube.com'
    },
    {
      id: 2,
      last_visit: Date.now(),
      number_of_visits: 0,
      url: 'facebook.com'
    },
    {
      id: 3,
      last_visit: Date.now(),
      number_of_visits: 4,
      url: 'plemiona.pl'
    },
    {
      id: 4,
      last_visit: Date.now(),
      number_of_visits: 3,
      url: 'netflix.com'
    },
    {
      id: 5,
      last_visit: Date.now(),
      number_of_visits: 20,
      url: 'linkedin.com'
    },
    {
      id: 6,
      last_visit: Date.now(),
      number_of_visits: 17,
      url: 'instagram.com'
    },
    {
      id: 7,
      last_visit: Date.now(),
      number_of_visits: 1,
      url: 'github.com'
    },
    {
      id: 8,
      last_visit: Date.now(),
      number_of_visits: 21,
      url: 'artstation.com'
    },
    {
      id: 9,
      last_visit: Date.now(),
      number_of_visits: 15,
      url: 'sebastianmatusiak.pl'
    },
    {
      id: 10,
      last_visit: Date.now(),
      number_of_visits: 1,
      url: 'wp.pl'
    },
    {
      id: 11,
      last_visit: Date.now(),
      number_of_visits: 1,
      url: 'onet.pl'
    },
    {
      id: 12,
      last_visit: Date.now(),
      number_of_visits: 1,
      url: 'justjoin.it'
    },
    {
      id: 13,
      last_visit: Date.now(),
      number_of_visits: 1,
      url: 'medium.com'
    },
    {
      id: 14,
      last_visit: Date.now(),
      number_of_visits: 1,
      url: 'amazon.com'
    },
    {
      id: 15,
      last_visit: Date.now(),
      number_of_visits: 1,
      url: 'paypal.com'
    },
  ]
}
