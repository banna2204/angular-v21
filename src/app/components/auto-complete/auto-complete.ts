import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AsyncPipe} from '@angular/common';


@Component({
  selector: 'app-auto-complete',
  imports: [MatAutocompleteModule, FormsModule, ReactiveFormsModule, AsyncPipe],
  templateUrl: './auto-complete.html',
  styleUrl: './auto-complete.scss',
})
export class AutoComplete {
  control = new FormControl('');
  streets: string[] = ['Champs-Élysées', 'Lombard Street', 'Abbey Road', 'Fifth Avenue'];
  filteredStreets: Observable<string[]>;

  constructor() {
    this.filteredStreets = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
}
