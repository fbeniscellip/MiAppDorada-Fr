import { Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalEjercicioComponent } from '../modales/modal-ejercicio/modal-ejercicio.component';

@Component({
  selector: 'app-ejercicios',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './ejercicios.page.html',
  styleUrls: ['./ejercicios.page.scss']
})
export class EjerciciosPage {

  constructor(private modalController: ModalController) {}

  async abrirModal(titulo: string, descripcion: string, videoUrl: string) {
    const modal = await this.modalController.create({
      component: ModalEjercicioComponent, // ✅ CORREGIDO AQUÍ
      componentProps: {
        titulo,
        descripcion,
        videoUrl
      }
    });
    return await modal.present();
  }
}

