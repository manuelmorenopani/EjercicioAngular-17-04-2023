import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePadrePacientesComponent } from './componente-padre-pacientes.component';

describe('ComponentePadrePacientesComponent', () => {
  let component: ComponentePadrePacientesComponent;
  let fixture: ComponentFixture<ComponentePadrePacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentePadrePacientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentePadrePacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
