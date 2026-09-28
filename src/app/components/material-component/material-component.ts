import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-material-component',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './material-component.html',
  styleUrl: './material-component.scss',
})
export class MaterialComponent {}
