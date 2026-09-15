import { Routes } from '@angular/router';
import { App } from './app';
import { Figma } from './components/figma/figma';
import { Figma2 } from './components/figma2/figma2';
import { Figma3 } from './components/figma3/figma3';
import { MatToggle } from './components/mat-toggle/mat-toggle';
import { Figma4 } from './components/figma4/figma4';
import { Figma5 } from './components/figma5/figma5';

export const routes: Routes = [
    {path: '', component: App},
    {path: 'figma', component: Figma},
    {path: 'figma2',component: Figma2},
    {path: 'figma3', component: Figma3},
    {path: 'figma4', component: Figma4},
    {path: 'figma5', component: Figma5},
    {path: 'mat-toggle', component: MatToggle}
];
