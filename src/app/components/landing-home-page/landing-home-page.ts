import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-landing-home-page',
  imports: [MatIconModule],
  templateUrl: './landing-home-page.html',
  styleUrl: './landing-home-page.scss',
})
export class LandingHomePage {
  header = ['Home', 'Services', 'Feature', 'Product', 'Testimonial', 'FAQ']
}
