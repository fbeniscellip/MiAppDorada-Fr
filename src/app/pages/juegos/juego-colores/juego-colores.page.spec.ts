import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegoColoresPage } from './juego-colores.page';

describe('JuegoColoresPage', () => {
  let component: JuegoColoresPage;
  let fixture: ComponentFixture<JuegoColoresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoColoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
