import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabPhotoPage } from './tab-photo.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TabPhotoPageRoutingModule } from './tab-photo-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TabPhotoPageRoutingModule
  ],
  declarations: [TabPhotoPage]
})
export class TabPhotoPageModule {}
