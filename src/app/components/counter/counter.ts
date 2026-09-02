import { Component, input } from '@angular/core';
import { AppCard } from '../app-card/app-card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-counter',
  imports: [AppCard,MatIconModule],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  increaseValue = input<number>(0);
  decreaseValue = input<number>(0);
  toggle = input<boolean>(false);
}
