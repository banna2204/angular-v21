import { Routes } from '@angular/router';
import { App } from './app';
import { Figma } from './components/figma/figma';
import { Figma2 } from './components/figma2/figma2';

export const routes: Routes = [
    {path: '', component: App},
    {path: 'figma', component: Figma},
    {path: 'figma2',component: Figma2}
];
