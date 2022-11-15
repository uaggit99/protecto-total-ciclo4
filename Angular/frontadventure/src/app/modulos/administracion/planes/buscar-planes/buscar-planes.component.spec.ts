import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPlanesComponent } from './buscar-planes.component';

describe('BuscarPlanesComponent', () => {
  let component: BuscarPlanesComponent;
  let fixture: ComponentFixture<BuscarPlanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarPlanesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarPlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
