import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente4Padre2Component } from './componente4-padre2.component';

describe('Componente4Padre2Component', () => {
  let component: Componente4Padre2Component;
  let fixture: ComponentFixture<Componente4Padre2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente4Padre2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente4Padre2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
