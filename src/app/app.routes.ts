import { Routes } from '@angular/router';
import { App } from './app';
import { Figma } from './components/figma/figma';

export const routes: Routes = [
    {path: '', component: App},
    {path: 'figma', component: Figma}
];
