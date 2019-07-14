import { RouterModule, Routes } from '@angular/router';

import { AcercaComponent } from './component/acerca/acerca.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

const appRoutes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true });
