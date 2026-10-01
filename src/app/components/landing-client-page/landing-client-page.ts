import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-landing-client-page',
  imports: [MatIconModule],
  templateUrl: './landing-client-page.html',
  styleUrl: './landing-client-page.scss',
})
export class LandingClientPage {
  headerIcons = ['toll','toll','toll','toll','toll','toll','toll'];

  membershipData = [
    {
      icon:'groups',
      title: 'Membership Organisations',
      description: 'Our membership management software provides full automation of membership renewals and payments'
    },
    {
      icon:'apartment',
      title: 'National Associations',
      description: 'Our membership management software provides full automation of membership renewals and payments'
    },
    {
      icon:'handshake',
      title: 'Clubs And Groups',
      description: 'Our membership management software provides full automation of membership renewals and payments'
    },
    
  ]
}
