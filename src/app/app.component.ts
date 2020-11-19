import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AlertController } from '@ionic/angular';

import { Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
  Capacitor
 } from '@capacitor/core'; 
import { FirebaseMessaging } from '@ionic-native/firebase-messaging/ngx';


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
    private messagingFB : FirebaseMessaging,
    public alertController : AlertController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      await this.setUpPushNotifications();
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
    this.messagingFB.subscribe("all");

    this.messagingFB.onMessage().subscribe(payload => {
      if(payload.notification) {
        this.showAlert(JSON.stringify(payload.notification));
      }
    });

    PushNotifications.addListener('pushNotificationReceived',
    (notification: PushNotification) => {
      this.showAlert('Push received: ' + JSON.stringify(notification));
    }
  );
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
