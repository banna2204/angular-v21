import { Component } from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@Component({
  selector: 'app-mat-toggle',
  imports: [MatButtonToggleModule],
  templateUrl: './mat-toggle.html',
  styleUrl: './mat-toggle.scss',
})
export class MatToggle {}
