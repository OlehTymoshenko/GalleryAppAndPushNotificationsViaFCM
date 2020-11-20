import { Component } from '@angular/core';
import { PhotoService } from '../shared/services/photo.service';


@Component({
  selector: 'app-tab-photo',
  templateUrl: 'tab-photo.page.html',
  styleUrls: ['tab-photo.page.scss']
})
export class TabPhotoPage {

  constructor(
    public photoService : PhotoService
  ) {}

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}
