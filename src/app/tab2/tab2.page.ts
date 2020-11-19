import { Component } from '@angular/core';
import { PhotoService } from '../shared/services/photo.service';
import { Plugins,
         PushNotification,
         PushNotificationToken,
         PushNotificationActionPerformed,
         Capacitor
        } from '@capacitor/core'; 
import { AlertController } from '@ionic/angular';


const { PushNotifications } = Plugins;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    public photoService : PhotoService,
  ) {}

  async ngOnInit() {
    await this.photoService.loadSaved();
    await this.setUpPushNotifications();
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
  
  private async setUpPushNotifications() {
    PushNotifications.requestPermission().then( result => {
      if (result.granted) {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // Show some error
      }
    });
  }
}
