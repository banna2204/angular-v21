import { RouterOutlet } from '@angular/router';

import { Component,ChangeDetectionStrategy,signal, computed,} from '@angular/core';
import { email, form, FormField, required } from '@angular/forms/signals';
import { CdkDrag,CdkDragDrop,CdkDropList,moveItemInArray,} from '@angular/cdk/drag-drop';
import { Child } from './components/child/child';
import { Counter } from './components/counter/counter';

interface Fruit {
  name: string;
  price: number;
}

interface User {
  name: string;
  email: string;
  password: string;
}

interface FormFields {
  id: number;
  label: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [RouterOutlet, FormField, CdkDrag, CdkDropList,Child,Counter],
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
  });

  userForm = form(this.userModel, (schema) => {
    required(schema.name, { message: 'Name is required!!' });
    required(schema.email, { message: 'Email is required!!' }),
      email(schema.email, { message: 'Enter valid email!!' }),
      required(schema.password, { message: 'Password is required!!' });
  });

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

  onSubmit(event: Event) {
    event.preventDefault();
    this.name.set('banna');
    this.name.update((name) => name.toUpperCase());
    this.userModel.update((user) => ({
      ...user,
      email: 'banna2204@gmail.com',
    }));
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
