import { Component } from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  imports: [MatPaginatorModule],
  templateUrl: './paginator.html',
  styleUrl: './paginator.css',
})
export class Paginator {}
