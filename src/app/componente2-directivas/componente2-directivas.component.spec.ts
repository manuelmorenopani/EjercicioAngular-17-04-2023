import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente2DirectivasComponent } from './componente2-directivas.component';

describe('Componente2DirectivasComponent', () => {
  let component: Componente2DirectivasComponent;
  let fixture: ComponentFixture<Componente2DirectivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componente2DirectivasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componente2DirectivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
