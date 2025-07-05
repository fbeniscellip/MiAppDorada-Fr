import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MemoricePage } from './memorice.page';

describe('MemoricePage', () => {
  let component: MemoricePage;
  let fixture: ComponentFixture<MemoricePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoricePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
