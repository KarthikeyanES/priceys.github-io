import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PriceyscompComponent } from './priceyscomp/priceyscomp.component';
import { SignincompComponent } from './signincomp/signincomp.component';
import { SignupcompComponent } from './signupcomp/signupcomp.component';
import { LoggedinComponent } from './loggedin/loggedin.component';
import { NextpageComponent } from './nextpage/nextpage.component';
import { OffersComponent } from './offers/offers.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { LaptopComponent } from './laptop/laptop.component';
import { SoundComponent } from './sound/sound.component';
import { SoftwareComponent } from './software/software.component';
import { StorageAndAccessoriesComponent } from './storage-and-accessories/storage-and-accessories.component';
import { StoreModule } from '@ngrx/store';
import { SearchBoxDirective } from './search-box.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SignincompComponent,
    SignupcompComponent,
    LoggedinComponent,
    NextpageComponent,
    PriceyscompComponent,
    OffersComponent,
    MobilesComponent,
    LaptopComponent,
    SoundComponent,
    SoftwareComponent,
    StorageAndAccessoriesComponent,
    SearchBoxDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
