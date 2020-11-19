import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { AlertController } from '@ionic/angular';
import { Plugins,
  PushNotification
 } from '@capacitor/core'; 

const { PushNotifications } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fbX : FirebaseX,
    private alertController: AlertController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.setUpPushNotifications();
    });
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

    this.fbX.subscribe("all"); 
    
    this.fbX.onMessageReceived().subscribe((message) => {
      if(message.messageType === "notification") {
        this.showAlert(JSON.stringify(message.notification));
      }
      
    });

  }

  private async showAlert(message : string) {
    const alert = await this.alertController.create({
      header: 'Push notification',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

}
