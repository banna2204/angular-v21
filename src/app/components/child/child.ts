import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  username = input('');
  email = 'shubham2204@gmail.com'

  onSendEmit = output<string>();

  SendToParent(){
    this.onSendEmit.emit(this.email);
  }
}
