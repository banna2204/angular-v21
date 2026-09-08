import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-figma3',
  imports: [MatCardModule],
  templateUrl: './figma3.html',
  styleUrl: './figma3.scss',
})
export class Figma3 {
  cardData = [
    {
      title: 'training Courses',
      content: 'The gradual accumulation of information about'
    },
    {
      title: 'frontend Modal',
      content: 'The frontend course about frontend modal'
    },
    {
      title: 'backend Courses',
      content: 'The backend course about backend modal'
    },
    {
      title: 'full stack Courses',
      content: 'The full stack course about full stack modal'
    },
  ]
}
