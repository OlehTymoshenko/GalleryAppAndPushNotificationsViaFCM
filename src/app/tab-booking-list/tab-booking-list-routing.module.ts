import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabBookingListPage } from './tab-booking-list.page';

const routes: Routes = [
  {
    path: '',
    component: TabBookingListPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabBookingListPageRoutingModule {}
