import { Component } from '@angular/core';
import { LandingHomePage } from '../landing-home-page/landing-home-page';
import { LandingClientPage } from '../landing-client-page/landing-client-page';
import { LandingSpendingPage } from '../landing-spending-page/landing-spending-page';
import { LandingPrivacyPage } from '../landing-privacy-page/landing-privacy-page';

@Component({
  selector: 'app-landing-page',
  imports: [LandingHomePage, LandingClientPage, LandingSpendingPage, LandingPrivacyPage],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {}