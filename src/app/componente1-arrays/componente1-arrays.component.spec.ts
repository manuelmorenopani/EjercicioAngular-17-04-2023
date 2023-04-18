import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente1ArraysComponent } from './componente1-arrays.component';

describe('Componente1ArraysComponent', () => {
  let component: Componente1ArraysComponent;
  let fixture: ComponentFixture<Componente1ArraysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente1ArraysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente1ArraysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
