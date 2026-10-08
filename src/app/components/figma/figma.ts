import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-figma',
  imports: [MatIconModule, CommonModule],
  templateUrl: './figma.html',
  styleUrl: './figma.scss',
})
export class Figma {
  listItems = [
    {
      title: 'Unlimited product updates',
      bgColor: '#2DC071'
    },
    {
      title: 'Unlimited product services',
      bgColor: '#2DC071'
    },
    {
      title: 'Unlimited product access',
      bgColor: '#2DC071'
    },
    {
      title: '1GB  Cloud storage',
      bgColor: '#BDBDBD'
    },
    {
      title: 'Email and community support',
      bgColor: '#BDBDBD'
    }
  ];
}
