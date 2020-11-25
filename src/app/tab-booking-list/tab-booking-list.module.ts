import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabBookingListPage } from './tab-booking-list.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabBookingListPageRoutingModule } from './tab-booking-list-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: TabBookingListPage }]),
    
    TabBookingListPageRoutingModule,
  ],
  declarations: [TabBookingListPage]
})
export class TabBookingListPageModule {}
