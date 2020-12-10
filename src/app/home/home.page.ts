import { Component } from '@angular/core';
import { AnalyticsService } from '../services/analytics.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  PAGE = "HOME"

  constructor(private analyticsService : AnalyticsService) {}

  logEvent(event_name){
    this.analyticsService.logEvent(event_name , this.PAGE)
  }
}
