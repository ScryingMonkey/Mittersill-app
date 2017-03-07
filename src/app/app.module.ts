import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { D3Service } from 'd3-ng2-service';

import { AppComponent } from './app.component';
import { ListingsComponent } from './components/listings/listings.component';
import { ListingComponent } from './components/listings/listing.component';
import { ListingDetailComponent } from './components/listing-detail/listing-detail.component';

export const firebaseConfig = {
    apiKey: "AIzaSyATR_rdBvTFvX4YcA9syM-amGDJYyEU34A",
    authDomain: "mittersill-app.firebaseapp.com",
    databaseURL: "https://mittersill-app.firebaseio.com",
    storageBucket: "mittersill-app.appspot.com",
    messagingSenderId: "131108452775"
}

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
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
