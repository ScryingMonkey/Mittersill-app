import { Component, OnInit, Input } from '@angular/core';
import { Listing } from '../listings/listing';
import { TimeShareDataService } from '../../services/time-share-data.service';

@Component({
  selector: 'listing-detail',
  templateUrl: './listing-detail.component.html',
  styleUrls: ['./listing-detail.component.css'],
  providers: [TimeShareDataService]

})
export class ListingDetailComponent implements OnInit {
  @Input() listing: Listing;
  private title: String = 'DEFAULT TITLE';
  private detail: String = 'DEFAULT DETAILS';

  constructor(private tsdService: TimeShareDataService) { }

  ngOnInit() {
    this.title = 'Unit #'+this.listing.unitNum;
    this.detail = this.getDetails(this.listing);
  }
  getDetails(data:Object) { 
    let detailsString:String = '';
    for(let d in data) {
      detailsString += 'TEST:' +d+ '/n';
    }
    return detailsString;
  }

}
