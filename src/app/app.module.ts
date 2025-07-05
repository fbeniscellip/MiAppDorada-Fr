import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';

import { ModalEjercicioComponent } from './modales/modal-ejercicio/modal-ejercicio.component';
import { SafePipe } from './pipes/safe.pipe';

import { AppRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ModalEjercicioComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    importProvidersFrom(AppRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

