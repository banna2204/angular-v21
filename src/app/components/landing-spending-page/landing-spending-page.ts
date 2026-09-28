import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-landing-spending-page',
  imports: [MatIconModule],
  templateUrl: './landing-spending-page.html',
  styleUrl: './landing-spending-page.scss',
})
export class LandingSpendingPage {
  spendingData = [
    {
      icon:'groups',
      count: '2,245,341',
      unit: 'Members'
    },
    {
      icon:'handshake',
      count: '46,328',
      unit: 'Clubs'
    },
    {
      icon:'av_timer',
      count: '828,867',
      unit: 'Event Bookings'
    },
    {
      icon:'card_travel',
      count: '1,926,436',
      unit: 'Payments'
    },
    
  ]
}
