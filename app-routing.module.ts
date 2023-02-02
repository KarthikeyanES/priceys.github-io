import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignincompComponent } from './signincomp/signincomp.component';
import { SignupcompComponent } from './signupcomp/signupcomp.component';
import { PriceyscompComponent } from './priceyscomp/priceyscomp.component';
import { LoggedinComponent } from './loggedin/loggedin.component';
import { OffersComponent } from './offers/offers.component';
import { NextpageComponent } from './nextpage/nextpage.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { LaptopComponent } from './laptop/laptop.component';
import { SoundComponent } from './sound/sound.component';
import { SoftwareComponent } from './software/software.component';
import { StorageAndAccessoriesComponent } from './storage-and-accessories/storage-and-accessories.component';

const routes: Routes = [
{ path: '', pathMatch: 'full', redirectTo: 'priceys' },
{ path: 'priceys', component:PriceyscompComponent },
{ path: 'loggedin', component:LoggedinComponent},
{ path: 'signin', component: SignincompComponent  },
{ path: 'signup', component: SignupcompComponent },
{ path: 'next', component: NextpageComponent },
{ path: 'offers', component: OffersComponent },
{ path: 'mobiles', component: MobilesComponent },
{ path: 'laptops', component: LaptopComponent },
{ path: 'sound', component: SoundComponent },
{ path: 'software', component: SoftwareComponent },
{ path: 's&a', component: StorageAndAccessoriesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
