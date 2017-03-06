import { Component, OnInit, ElementRef } from '@angular/core';
import { D3Service, D3, Selection } from 'd3-ng2-service';

import { ListingComponent } from './listing.component';
import { Listing } from './listing';
import { TimeShareDataService } from '../../services/time-share-data.service';

@Component({
  selector: 'listings-component',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css'],
  providers: [TimeShareDataService]
})
export class ListingsComponent implements OnInit {

  private d3: D3;
  private parentNativeElement: any;
  private listings: Listing[] = [];
  private headers: String[] = [];
  private tableHTML: String = '';
  private csvData: any = [];

  constructor(element: ElementRef, 
              d3Service: D3Service, 
              private tsdService: TimeShareDataService) {
    this.d3 = d3Service.getD3();
    this.parentNativeElement = element.nativeElement;

    this.listings = this.tsdService.getDummyListings();
    console.log('headers'+this.listings[0])
    this.headers = this.tsdService.getDummyHeaders();
    console.log(this.headers);  
   }

  ngOnInit() {
    let d3 = this.d3;
    let d3ParentElement: Selection<any, any, any, any>;
    //stuff
    if (this.parentNativeElement !== null) {
      d3ParentElement = d3.select(this.parentNativeElement); //use the d3 select method
      //Do more d3 things
    } 
  }
  toCardDetail(card) {
    console.log('clicked card:');
    console.dir(card);
    this.tsdService.setSelectedListing(card);
    this.tsdService.selectDetail = true;
    console.log('this.tsdService.selectDetail: '+this.tsdService.selectDetail);
  }
  toMaster() { 
    this.tsdService.selectDetail = false; 
    console.log('this.tsdService.selectDetail: '+this.tsdService.selectDetail);
  }

}
