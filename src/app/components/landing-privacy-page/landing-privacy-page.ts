import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-landing-privacy-page',
  imports: [MatIconModule],
  templateUrl: './landing-privacy-page.html',
  styleUrl: './landing-privacy-page.scss',
})
export class LandingPrivacyPage {
  footerIcons = ['toll','toll','toll','toll','toll'];
}
