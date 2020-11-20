import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabBookingPage } from './tab-booking.page';

const routes: Routes = [
  {
    path: '',
    component: TabBookingPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabBookingPageRoutingModule {}
