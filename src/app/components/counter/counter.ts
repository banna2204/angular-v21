import { Component, input } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  increaseValue = input<number>(0);
  decreaseValue = input<number>(0);
  toggle = input<boolean>(false);
}
