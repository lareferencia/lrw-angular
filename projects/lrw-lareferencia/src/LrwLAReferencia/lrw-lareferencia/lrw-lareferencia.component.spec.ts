import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LrwLAReferenciaComponent } from './lrw-lareferencia.component';

describe('LrwLAReferenciaComponent', () => {
  let component: LrwLAReferenciaComponent;
  let fixture: ComponentFixture<LrwLAReferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LrwLAReferenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LrwLAReferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
