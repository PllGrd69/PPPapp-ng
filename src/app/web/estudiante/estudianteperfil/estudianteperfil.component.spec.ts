import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudianteperfilComponent } from './estudianteperfil.component';

describe('EstudianteperfilComponent', () => {
  let component: EstudianteperfilComponent;
  let fixture: ComponentFixture<EstudianteperfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudianteperfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudianteperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
