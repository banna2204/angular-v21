import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-app-card',
  imports: [MatCardModule,MatIconModule],
  templateUrl: './app-card.html',
  styleUrl: './app-card.css',
})
export class AppCard {
  @Input('icon') icon: string = '';
}
