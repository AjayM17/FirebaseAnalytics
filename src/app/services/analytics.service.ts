import { Injectable } from '@angular/core';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx'

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private firebaseAnalytics: FirebaseAnalytics) { }

  logEvent (event_name, page) {
    console.log(event_name)
    this.firebaseAnalytics.logEvent(event_name,{page : page}).then( res =>{
      console.log(res)
    }).catch( err =>{
      console.log(err)
    })
  }
}
