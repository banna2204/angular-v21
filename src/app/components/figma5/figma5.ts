import { Component } from '@angular/core';
import { CustomButton } from '../../custom/custom-button/custom-button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-figma5',
  imports: [CustomButton, MatIconModule],
  templateUrl: './figma5.html',
  styleUrl: './figma5.scss',
})
export class Figma5 {
  entertainmentNavigation = [
    {
      title: 'Tours',
      icon: 'tour',
    },
    {
      title: 'Hotels',
      icon: 'night_shelter',
    },
    {
      title: 'Flights',
      icon: 'travel',
    },
    {
      title: 'Shows',
      icon: 'movie',
    },
  ]

  footerData = [
    {
      title: 'Select destination',
      buttonText: 'Where do you wanna go?'
    },
    {
      title: 'Starting date',
      buttonText: 'Select starting date'
    },
    {
      title: 'Ending date',
      buttonText: 'Select ending date'
    },
    {
      title: 'No. of Persons',
      buttonText: 'Total travelers on tour'
    },
  ]
}
