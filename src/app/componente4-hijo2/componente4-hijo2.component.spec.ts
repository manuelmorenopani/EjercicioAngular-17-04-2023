import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente4Hijo2Component } from './componente4-hijo2.component';

describe('Componente4Hijo2Component', () => {
  let component: Componente4Hijo2Component;
  let fixture: ComponentFixture<Componente4Hijo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente4Hijo2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente4Hijo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
