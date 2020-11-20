import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabPhotoPage } from './tab-photo.page';

const routes: Routes = [
  {
    path: '',
    component: TabPhotoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabPhotoPageRoutingModule {}
