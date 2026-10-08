import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-figma4',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './figma4.html',
  styleUrl: './figma4.scss',
})
export class Figma4 {
  footerData = {
    'support' : ['Support', 'Getting Started', 'FAQS', 'Help Articles', 'Report an issue', 'Contact Help Desk'],
    'service' : ['Services', 'Booking Flights', 'Hotel Reservations', 'Book a Trip', 'Event Tickets', 'Exclusive Deals'],
    'legal' : ['Legal', 'Terms & Conditions', 'Privacy Policy', 'Cookie Notice', 'Cookie Preferences', 'Trust Center']
  }
}
