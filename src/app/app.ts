import { RouterOutlet } from '@angular/router';

import { Component,ChangeDetectionStrategy,signal, computed,} from '@angular/core';
import { applyEach, email, form, FormField, required, schema } from '@angular/forms/signals';
import { CdkDrag,CdkDragDrop,CdkDropList,moveItemInArray,} from '@angular/cdk/drag-drop';
import { Child } from './components/child/child';
import { Counter } from './components/counter/counter';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MaterialSortTable } from './components/material-sort-table/material-sort-table';
import { Paginator } from './components/paginator/paginator';
import { AppCard } from './components/app-card/app-card';

interface Fruit {
  name: string;
  price: number;
}

interface User {
  name: string;
  email: string;
  password: string;
  address:string[];
}

interface FormFields {
  id: number;
  label: string;
}

const addressSchema = schema<User>((path)=>{
  required(path.email,{message:'Email is required!!'});

  applyEach(path.address, (addressPath)=>{
    required(addressPath,{message:'Address field is required!!'})
  })
})

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [RouterOutlet, FormField, CdkDrag, CdkDropList,Child,Counter,MatFormFieldModule,MatIconModule,MatInputModule,MatButtonModule,MaterialSortTable,Paginator,AppCard],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class App {
  name = signal('shubham');
  fruit = signal<Fruit>({
    name: 'apple',
    price: 100,
  });

  fruit2 = computed(() => ({
    ...this.fruit(),
    price: this.fruit().price * 2,
  }));

  userModel = signal<User>({
    name: '',
    email: '',
    password: '',
    address: []
  });

  // userForm = form(this.userModel, (schema) => {
  //   required(schema.name, { message: 'Name is required!!' });
  //   required(schema.email, { message: 'Email is required!!' }),
  //   email(schema.email, { message: 'Enter valid email!!' }),
  //   required(schema.password, { message: 'Password is required!!' });
  // });

  userForm = form(this.userModel, addressSchema);

  formFields: { id: number; label: keyof User }[] = [
    { id: 1, label: 'name' },
    { id: 2, label: 'password' },
  ];

  increaseValue = signal<number>(100);
  decreaseValue = signal<number>(100);
  toggle = signal<boolean>(false);

  getField(fieldName: keyof User) {
    return this.userForm[fieldName];
  }

  addAddress() {
    this.userModel.update(state => ({
      ...state,
      address: [...state.address, '']
    }));
  }

  onSubmit(event: Event) {
    event.preventDefault();
    // this.name.set('banna');
    // this.name.update((name) => name.toUpperCase());
    // this.userModel.update((user) => ({
    //   ...user,
    //   email: 'banna2204@gmail.com',
    // }));
    console.log(this.userModel())
    alert('login successfull')
  }

  drop(event: CdkDragDrop<FormFields[]>) {
    moveItemInArray(this.formFields, event.previousIndex, event.currentIndex);
  }

  onTakeData(val:string){
    console.log(val)
  }

  increaseCounterValue(){
    this.increaseValue.update((count) => count + 1);
  }

  decreaseCounterValue(){
    this.decreaseValue.update((count) => count - 1);
  }

  toggleCounterValue(){
    this.toggle.set(!this.toggle())
  }
}
