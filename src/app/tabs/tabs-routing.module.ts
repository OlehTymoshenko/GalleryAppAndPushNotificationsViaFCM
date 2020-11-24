import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tabBooking',
        loadChildren: () => import('../tab-booking/tab-booking.module').then(m => m.TabBookingPageModule)
      },
      {
        path: 'tabPhoto',
        loadChildren: () => import('../tab-photo/tab-photo.module').then(m => m.TabPhotoPageModule)
      },
      {
        path: 'tabBookingList',
        loadChildren: () => import('../tab-booking-list/tab-booking-list.module').then(m => m.TabBookingListPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tabBooking',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tabBooking',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
