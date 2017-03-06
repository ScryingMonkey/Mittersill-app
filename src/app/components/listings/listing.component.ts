import { Component, OnInit, Input } from '@angular/core';

import { Listing } from './listing';

@Component({
  selector: 'listingCard',
  template: `
  <span class="listingCard card">
    <h1 class="listingCard_title">Unit # {{ listing.unitNum }}</h1>
    <span class="listingCard_detail">
      <div class="listingCard_detail_label">Week #</div>
      <div class="listingCard_detail_value">{{ listing.weekNum }}</div>
    </span>
    <span class="listingCard_detail">
      <div class="listingCard_detail_label"># Bedrooms</div>
      <div class="listingCard_detail_value">{{ listing.numBedrooms }}</div>
    </span>
    <span class="listingCard_detail">
      <div class="listingCard_detail_label">Privacy</div>
      <div class="listingCard_detail_value">{{ listing.privacy }}</div>
    </span>
    <span class="listingCard_detail">
      <div class="listingCard_detail_label">Occupancy</div>
      <div class="listingCard_detail_value">{{ listing.occupancy }}</div>
    </span>
  </span>
  `,
  styleUrls: ['./listings.component.css']
})
export class ListingComponent implements OnInit {
  @Input() listing: Listing;



  constructor() { }

  ngOnInit() {
  }

  clicked(){
    console.log('clicked!');

  }

}