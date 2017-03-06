import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { D3Service } from 'd3-ng2-service';

import { AppComponent } from './app.component';
import { ListingsComponent } from './components/listings/listings.component';
import { ListingComponent } from './components/listings/listing.component';
import { ListingDetailComponent } from './components/listing-detail/listing-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ListingsComponent,
    ListingComponent,
    ListingDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
