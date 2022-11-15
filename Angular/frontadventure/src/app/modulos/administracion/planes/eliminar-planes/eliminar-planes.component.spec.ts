import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPlanesComponent } from './eliminar-planes.component';

describe('EliminarPlanesComponent', () => {
  let component: EliminarPlanesComponent;
  let fixture: ComponentFixture<EliminarPlanesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarPlanesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarPlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
