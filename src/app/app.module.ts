import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { AcercaComponent } from './component/acerca/acerca.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AcercaComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
