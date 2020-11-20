import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabBookingPage } from './tab-booking.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabBookingPageRoutingModule } from './tab-booking-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TabBookingPageRoutingModule
  ],
  declarations: [TabBookingPage]
})
export class TabBookingPageModule {}
