import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilvaComponent } from './perfilva.component';

describe('PerfilvaComponent', () => {
  let component: PerfilvaComponent;
  let fixture: ComponentFixture<PerfilvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
