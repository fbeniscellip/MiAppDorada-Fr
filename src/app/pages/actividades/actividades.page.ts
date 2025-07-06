import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonGrid, IonRow, IonCol,
  IonCard, IonHeader, IonButtons, IonToolbar, IonTitle, IonBackButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-actividades',
  standalone: true,
  imports: [
    IonToolbar, IonButtons, IonHeader, IonTitle, IonBackButton,
    CommonModule, FormsModule,
    IonContent, IonGrid, IonRow, IonCol,
    IonCard
  ],
  templateUrl: './actividades.page.html',
  styleUrls: ['./actividades.page.scss']
})
export class ActividadesPage implements OnInit {
  categorias: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.categorias = [
      { nombre: 'Ejercicios Físicos', color: '#43a047', imagen: 'walk' },
      { nombre: 'Ejercicios Mentales', color: '#5e35b1', imagen: 'brain' },
      { nombre: 'Juegos', color: '#039be5', imagen: 'puzzle', ruta: '/juegos' },
      { nombre: 'Relajación', color: '#00897b', imagen: 'relajacion' },
      { nombre: 'Otras Actividades', color: '#ffb300', imagen: 'recetario' }
    ];

    // 🔄 Revisa si hay que redirigir a una categoría específica (como desde receta)
    const volverCategoria = localStorage.getItem('volverCategoria');
    if (volverCategoria) {
      localStorage.removeItem('volverCategoria');
      this.abrirDetalle(volverCategoria);
    }
  }

  abrirDetalle(nombreCategoria: string) {
    const categoria = this.categorias.find(c => c.nombre === nombreCategoria);

    if (categoria?.ruta) {
      this.router.navigateByUrl(categoria.ruta);
    } else {
      this.router.navigateByUrl(`/actividad-detalle/${encodeURIComponent(nombreCategoria)}`, {
        state: { categoria: nombreCategoria }
      });
    }
  }
}

