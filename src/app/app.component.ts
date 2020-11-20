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
        // error is iOS here
      }
    });
    this.messagingFB.subscribe("all");

    PushNotifications.addListener('pushNotificationReceived',
      (notification: PushNotification) => {
        this.showAlert(notification);
      }
    );
  }

  private async showAlert(message : PushNotification) {

    const alert = await this.alertController.create({
      header: message.title,
      message: message.body,
      buttons: ['OK']
    });

    if(alert.message === undefined || alert.message === "" || alert.message === null)
    {
      return;
    }
    await alert.present();  
  }
}