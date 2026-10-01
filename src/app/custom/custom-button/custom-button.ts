import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-custom-button',
  imports: [MatButtonModule, CommonModule],
  templateUrl: './custom-button.html',
  styleUrl: './custom-button.scss',
})
export class CustomButton {
  @Input('bgColor') bgColor: string = ''
  @Input('color') color: string = ''
  @Input('text') text: string = ''
  @Input('size') size: string = '';
}
