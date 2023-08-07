import { Routes } from '@angular/router';
import { ExampleComponent } from './example/router/example/example.component';
export const routes: Routes = [
  { path: '', redirectTo: 'example', pathMatch: 'full' },
  {
    path: 'example',
    loadChildren: () => import('./example/routes').then((m) => m.routes),
  },
];
