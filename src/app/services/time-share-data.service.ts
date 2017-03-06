import { Injectable } from '@angular/core';

import { Listing } from '../components/listings/listing';

@Injectable()
export class TimeShareDataService {
  private selectedListing: Listing = null;
  public selectDetail:boolean = false;

  constructor() { }

  getDummyListing() {
    var r = Math.random();
    var dummy : Listing = new Listing(
                        Math.floor(r*52)+1,
                        Math.floor(r*400)+1,
                        Math.floor(r*8)+1,
                        Math.floor(r*10)+1,
                        Math.floor(r*6)+1,
                        "Dummy","dummy@dummy.com", "333-333-3333", "dummy description", 'dummy notes', new Date('2033/03/03'));
    return dummy;
  }
  getDummyListings() {
    let listings = [this.getDummyListing(),
                    this.getDummyListing(),
                    this.getDummyListing()
                    ];
    console.log('dummy listings created:');
    console.dir(listings);
    return listings;
  }
  getDummyHeaders() {
    return [ 'Week #','Unit #','# Bedrooms',	
      'Occupancy','Privacy','Contact Name',	
      'Email','Phone','Description',
      'Notes','Submitted/Updated' ]
  }
  getListingKeys(){
    return ['weekNum', 'unitNum', 'numBedrooms', 'occupancy', 
            'privacy', 'contactName', 'email', 'phone', 
            'description', 'notes', 'submittedUpdated' ]
  }
  getTableHTML(headers,rows, keys) {
    console.log('time-share-data.Service.getTableHTML()...')
    let html = "<table><tr>";
    let newRow = '';
    for (let hi = 0, len = headers.length; hi < len; hi++) {
      html += '<th>'+headers[hi]+'</th>';
    }
    console.log(html);
    html += '</tr><tr>';
    console.log('starting rows...');   
    for (let ri = 0, len = rows.length; ri < len; ri++) {
      console.log('rows[ri]: '+rows[ri]);
      console.dir(rows[ri]);
      console.log('adding a row...');
      for (let ci = 0, len = Object.keys(rows[ri]).length; ci < len; ci++) {
        console.log('rows[ri][keys[ci]]: '+rows[ri][keys[ci]]);
        newRow = '<td>'+rows[ri][keys[ci]]+'</td>';
        console.log('newRow: '+newRow);
        html += newRow
      }
      html += '</tr>';
      console.log('ending rows...');
    }
    html += '</tr></table>';
    console.log(html);
    return html;
  }
  setSelectedListing(listing) {
    this.selectedListing = listing;
  }
}
